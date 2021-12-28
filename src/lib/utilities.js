const getImageURL = (url, device = "desktop") => {
	let prefix = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.href.includes("localhost"))
		prefix = `${window.location.protocol}//${window.location.hostname}:8888`;

	return `${prefix}/.netlify/functions/website?url=${url}&device=${device}`;
};

export {
	getImageURL
}
