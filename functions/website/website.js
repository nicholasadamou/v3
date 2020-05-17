const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");
const wait = require('waait');

const cache = new Map();

async function getOptions(isDev) {
	if (isDev) {
		return {
			product: "chrome",
			args: [],
			executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
			headless: true,
		};
	}

	return {
		product: "chrome",
		args: chromium.args,
		executablePath: await chromium.executablePath,
		headless: chromium.headless,
	};
}

async function getScreenshot(url, type = "desktop", isDev) {
	console.log({url, type, isDev, cached: cache.has(`${url}:${type}`)})

	const key = `${url}:${type}`;
	let screenshot = cache.get(key);
	if (screenshot) {
		return screenshot;
	}

	const options = await getOptions(isDev);
	const browser = await puppeteer.launch(options);
	const page = await browser.newPage();

	await chromium.font('https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf');

	if (type === "mobile") {
		await page.setViewport({
			width: 375,
			height: 812,
			deviceScaleFactor: 1.5,
		});
		await page.setUserAgent(
			"Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
		);
	} else {
		await page.setViewport({
			width: 1600,
			height: 900,
			deviceScaleFactor: 1.5,
		});
	}

	try {
		await page.goto(url, {
			waitUntil: 'domcontentloaded',
			timeout: 0
		});
		await wait(3500);
	} catch (error) {
		await page.close();
		await browser.close();
	}

	const buffer = await page.screenshot({type: "png"});
	screenshot = buffer.toString("base64");
	cache.set(key, screenshot);

	await page.close();
	await browser.close();

	return screenshot;
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
	const qs = new URLSearchParams(event.queryStringParameters);

	console.log(
		`${process.env.URL || `http://localhost:34567`}/website?${qs.toString()}`
	);

	const screenshot = await getScreenshot(
		`https://${qs.get("url")}/`,
		`${qs.get("type")}`,
		// Here we need to pass a boolean to say if we are on the server. Netlify has a bug where process.env.NETLIFY is undefined in functions, so I'm using one of the only vars I can find.
		// !process.env.NETLIFY
		process.env.URL.includes("http://localhost")
	);

	return {
		statusCode: 200,
		body: screenshot,
		isBase64Encoded: true,
	};
};
