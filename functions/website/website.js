const chromium = require("chrome-aws-lambda");
const puppeteer = require('puppeteer-core');
const validator = require("validator");
const sharp = require('sharp');

const isDevelopment = process.env.URL.includes("http://localhost");

const cache = new Map();

function obtainDevices() {
	return isDevelopment
		?
			puppeteer.devices
		:
			chromium.puppeteer.devices;
}

async function launchBrowser() {
	return isDevelopment
		?
			await puppeteer.launch({
				args: [],
				executablePath:
					"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
				headless: true,
			})
		:
			await chromium.puppeteer.launch({
				args: chromium.args,
				executablePath: await chromium.executablePath,
				headless: chromium.headless,
			});
}

async function getScreenshot(url, device = "desktop", type = "webp") {
	console.log({ url, device, type });

	const browser = await launchBrowser();
	const page = await browser.newPage();

	await chromium.font(
		"https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
	);

	if (device === "mobile") {
		const devices = obtainDevices();

		await page.emulate(devices["iPhone X"]);
	} else {
		await page.setViewport({
			width: 1600,
			height: 900,
			deviceScaleFactor: 1.5,
		});
	}

	await page.goto(url, {
		waitUntil: ["domcontentloaded", "networkidle2"],
		timeout: 0,
	});

	const data = await page.screenshot({ type });

	let compressed = data;

	if (type === 'webp') {
		compressed = await sharp(data).webp({ quality: 20 }).toBuffer();
	} else if (type === 'png') {
		compressed = await sharp(data).png().toBuffer();
	} else if (type === 'jpg' || type === 'jpeg') {
		compressed = await sharp(data).jpeg({ quality: 20 }).toBuffer();
	}

	const screenshot = compressed.toString("base64");

	await browser.close();

	return screenshot;
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event) => {
	const { url, device = "desktop", type = "webp" } = event.queryStringParameters;

	try {
		if (
			validator.isURL(`https://${url}/`, {
				protocols: ["http", "https"],
			})
		) {
			let screenshot;
			const key = `https://${url}/device=${device}&type=${type}`;

			console.log(key);

			if (cache.has(key)) {
				screenshot = await cache.get(key);
			} else {
				let prefix = `${process.env.URL}/.netlify/functions/`;

				if (isDevelopment) {
					prefix = `${process.env.URL}`;
				}

				console.log(
					`${prefix}/website?${new URLSearchParams(
						event.queryStringParameters
					).toString()}`
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
				"Content-Type": `image/${type}`,
				"Content-Length": screenshot.length,
			});

			return {
				statusCode: 200,
				body: screenshot,
				isBase64Encoded: true,
			};
		} else {
			return {
				statusCode: 400,
				body: JSON.stringify({
					message: `Bad Request: The provided URL '${url}' is not valid.`,
				}),
			};
		}
	} catch (e) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: `Server Error: ${e.message}`,
			}),
		};
	}
};
