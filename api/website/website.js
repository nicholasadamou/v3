const express = require("express");
const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");
const wait = require('waait');

const app = express();
const cache = new Map();

app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});

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
	console.log({url, type, isDev})

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
		await wait(5000);
	} catch (error) {
		await page.close();
		await browser.close();
	}

	const data = await page.screenshot({type: "png"});
	const screenshot = Buffer.from(data, 'base64');

	await page.close();
	await browser.close();

	return screenshot;
}

// https://vercel.com/docs/runtimes?query=aws#advanced-usage/advanced-node-js-usage/aws-lambda-api
// exports.handler = async (event, context) => {
// 	const qs = new URLSearchParams(event.queryStringParameters);
//
// 	let screenshot = '';
// 	const key = `https://${qs.get("url")}/:${qs.get("type")}`;
//
// 	if (cache.has(key)) {
// 		screenshot = await cache.get(key);
// 	} else {
// 		let prefix = `${process.env.URL}`
//
// 		if (process.env.URL.includes("http://localhost")) {
// 			prefix = `${process.env.URL}:${process.env.PORT}`
// 		}
//
// 		console.log(
// 			`${prefix}/website?${qs.toString()}`
// 		);
//
// 		screenshot = await getScreenshot(
// 			`https://${qs.get("url")}/`,
// 			`${qs.get("type")}`,
// 			process.env.URL.includes("http://localhost")
// 		);
//
// 		cache.set(key, screenshot);
// 	}
//
// 	console.log({
// 		statusCode: 200,
// 		'content-type': 'image/png',
// 		'content-length': screenshot.length
// 	});
//
// 	return {
// 		statusCode: 200,
// 		body: screenshot,
// 		isBase64Encoded: true
// 	};
// }

app.get('/website', async (req, res) => {
	const qs = new URLSearchParams(req.query);

	let screenshot = '';
	const key = `https://${qs.get("url")}/:${qs.get("type")}`;

	if (cache.has(key)) {
		screenshot = await cache.get(key);
	} else {
		let prefix = `${process.env.URL}`

		if (process.env.URL.includes("http://localhost")) {
			prefix = `${process.env.URL}:${process.env.PORT}`
		}

		console.log(
			`${prefix}/website?${qs.toString()}`
		);

		screenshot = await getScreenshot(
			`https://${qs.get("url")}/`,
			`${qs.get("type")}`,
			process.env.URL.includes("http://localhost")
		);

		cache.set(key, screenshot);
	}

	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': screenshot.length
	});

	res.end(screenshot);

	console.log({
		message: res.statusMessage,
		statusCode: res.statusCode,
		'content-type': 'image/png',
		'content-length': screenshot.length
	});
});
