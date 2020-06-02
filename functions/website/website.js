const chromium = require("chrome-aws-lambda");
const devices = require('puppeteer/DeviceDescriptors');
const validator = require('validator');

const cache = new Map();

async function getOptions() {
	return process.env.URL.includes("http://localhost")
		?
			{
				product: "chrome",
				args: [],
				executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
				headless: true,
			}
		:
			{
				product: "chrome",
				args: chromium.args,
				executablePath: await chromium.executablePath,
				headless: chromium.headless,
			};
}

async function getScreenshot(url, device = "desktop", type = 'png') {
	console.log({url, device, type})

	const options = await getOptions();
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
		if (validator.isURL(`https://${url}/`, {
			protocols: ['http', 'https']
		})) {
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
					`${type}`
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
					message: `Bad Request: The provided URL '${url}' is not valid.`
				})
			}
		}
	} catch (e) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: `Server Error: ${e.message}`
			})
		}
	}
};
