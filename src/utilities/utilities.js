export const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

export const parseURL = (URL = 'https://example.com') => {
	let url = {},
		tempProtocol;

	let a = document.createElement('a');

	// if {URL} doesn't start with something like 'https://' it's not a URL, but try to work around that.
	if (URL.indexOf('://') === -1) {
		tempProtocol = 'https://';
		a.href = tempProtocol + URL;
	} else a.href = URL;

	let parts = a.hostname.split('.');

	url.favicon = `https://s2.googleusercontent.com/s2/favicons?domain=${URL}`;
	url.origin = tempProtocol ? '' : a.origin;
	url.domain = a.hostname;
	url.subdomain = parts[0];
	url.domainroot = '';
	url.domainpath = '';
	url.tld = '.' + parts[parts.length - 1];
	url.path = a.pathname.substring(1);
	url.query = a.search.substr(1);
	url.protocol = tempProtocol
		? ''
		: a.protocol.substr(0, a.protocol.length - 1);
	url.port = tempProtocol
		? ''
		: a.port
			? a.port
			: a.protocol === 'http:'
				? 80
				: a.protocol === 'https:'
					? 443
					: a.port;
	url.parts = parts;
	url.segments = a.pathname === '/' ? [] : a.pathname.split('/').slice(1);
	url.params = url.query === '' ? [] : url.query.split('&');

	for (let j = 0; j < url.params.length; j++) {
		let param = url.params[j];
		let dict = param.split('=');
		url.params[j] = {
			key: dict[0],
			value: dict[1],
		};
	}
	// domainroot
	if (parts.length > 2) {
		url.domainroot = parts[parts.length - 2] + '.' + parts[parts.length - 1];
		// check for country code top level domain
		if (
			parts[parts.length - 1].length === 2 &&
			parts[parts.length - 1].length === 2
		)
			url.domainroot = parts[parts.length - 3] + '.' + url.domainroot;
	}
	// domainpath (domain+path without filenames)
	if (url.segments.length > 0) {
		var lastSegment = url.segments[url.segments.length - 1];
		var endsWithFile = lastSegment.indexOf('.') !== -1;
		if (endsWithFile) {
			var fileSegment = url.path.indexOf(lastSegment);
			var pathNoFile = url.path.substr(0, fileSegment - 1);
			url.domainpath = url.domain;
			if (pathNoFile) url.domainpath = url.domainpath + '/' + pathNoFile;
		} else url.domainpath = url.domain + '/' + url.path;
	} else url.domainpath = url.domain;

	return url;
};

export default {
	isMobile,
	parseURL,
};
