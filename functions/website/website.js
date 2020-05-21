const chromium = require("chrome-aws-lambda");
const devices = require('puppeteer/DeviceDescriptors');
const {URL} = require('url');

const cache = new Map();

function isValidURL(str) {
	try {
		const url = new URL(str);
		return url.hostname.includes('.');
	} catch (e) {
		console.error(e.message);
		return false;
	}
}

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

async function getScreenshot(url, device = "desktop", type = 'png', isDev) {
	console.log({url, device, type})

	const options = await getOptions(isDev);

	const browser = await chromium.puppeteer.launch(options);

	const page = await browser.newPage();

	await chromium.font('https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf');

	if (device === "mobile") {
		await page.emulate(devices['iPhone X'])
	} else {
		await page.setViewport({
			width: 1600,
			height: 900,
			deviceScaleFactor: 1.5
		});
	}

	await page.goto(url, {
		waitUntil: ["domcontentloaded", "networkidle2"],
		timeout: 0
	});

	const data = await page.screenshot(type);
	const screenshot = data.toString('base64');

	await browser.close();

	return screenshot;
}

exports.handler = async (event, context) => {
	const {url, device = 'desktop', type = 'png'} = event.queryStringParameters;

	try {
		if (isValidURL(`https://${url}/`)) {
			let screenshot = '';
			const key = `https://${url}/:${device}`;

			if (cache.has(key)) {
				screenshot = await cache.get(key);
			} else {
				let prefix = `${process.env.URL}/.netlify/functions/`

				if (process.env.URL.includes("http://localhost")) {
					prefix = `${process.env.URL}`
				}

				console.log(
					`${prefix}/website?${new URLSearchParams(event.queryStringParameters).toString()}`
				);

				screenshot = await getScreenshot(
					`https://${url}/`,
					`${device}`,
					`${type}`,
					process.env.URL.includes("http://localhost")
				);

				cache.set(key, screenshot);
			}

			console.log({
				statusCode: 200,
				'Content-Type': `image/${type}`,
				'Content-Length': screenshot.length,
			});

			return {
				statusCode: 200,
				body: screenshot,
				isBase64Encoded: true
			};
		} else {
			return {
				statusCode: 400,
				body: JSON.stringify({
					message: `Bad Request: The url ${url} is not valid.`
				})
			}
		}
	} catch (e) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: `${e.message}`
			})
		}
	}
};
