var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name2 in all) __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	R: () => Retryer,
	S: () => Subscribable,
	a: () => isCancelledError,
	b: () => getLogger,
	c: () => notifyManager,
	d: () => matchMutation,
	e: () => ensureQueryKeyArray,
	f: () => functionalUpdate,
	g: () => getAbortController,
	h: () => hashQueryKeyByOptions,
	i: () => isValidTimeout,
	j: () => isCancelable,
	k: () => focusManager,
	l: () => parseQueryArgs,
	m: () => matchQuery,
	n: () => noop,
	o: () => onlineManager,
	p: () => parseFilterArgs,
	q: () => hashQueryKey,
	r: () => replaceEqualDeep,
	s: () => partialMatchKey,
	t: () => timeUntilStale,
	u: () => config,
	v: () => isServer,
	w: () => writable,
	x: () => shallowEqualObjects,
	y: () => readable
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c5a8641a = require('./index-c5a8641a.js');
class Subscribable {
	constructor() {
		this.listeners = [];
	}
	subscribe(listener) {
		const callback = listener || (() => void 0);
		this.listeners.push(callback);
		this.onSubscribe();
		return () => {
			this.listeners = this.listeners.filter((x) => x !== callback);
			this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.length > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
}
const isServer = typeof window === 'undefined';
function noop() {
	return void 0;
}
function functionalUpdate(updater, input) {
	return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
	return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
	return Array.isArray(value) ? value : [value];
}
function timeUntilStale(updatedAt, staleTime) {
	return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
	if (!isQueryKey(arg1)) {
		return arg1;
	}
	if (typeof arg2 === 'function') {
		return Object.assign(Object.assign({}, arg3), { queryKey: arg1, queryFn: arg2 });
	}
	return Object.assign(Object.assign({}, arg2), { queryKey: arg1 });
}
function parseFilterArgs(arg1, arg2, arg3) {
	return isQueryKey(arg1)
		? [Object.assign(Object.assign({}, arg2), { queryKey: arg1 }), arg3]
		: [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
	if ((active === true && inactive === true) || (active == null && inactive == null)) {
		return 'all';
	} else if (active === false && inactive === false) {
		return 'none';
	} else {
		const isActive = active !== null && active !== void 0 ? active : !inactive;
		return isActive ? 'active' : 'inactive';
	}
}
function matchQuery(filters, query) {
	const { active, exact, fetching, inactive, predicate, queryKey, stale } = filters;
	if (isQueryKey(queryKey)) {
		if (exact) {
			if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
				return false;
			}
		} else if (!partialMatchKey(query.queryKey, queryKey)) {
			return false;
		}
	}
	const queryStatusFilter = mapQueryStatusFilter(active, inactive);
	if (queryStatusFilter === 'none') {
		return false;
	} else if (queryStatusFilter !== 'all') {
		const isActive = query.isActive();
		if (queryStatusFilter === 'active' && !isActive) {
			return false;
		}
		if (queryStatusFilter === 'inactive' && isActive) {
			return false;
		}
	}
	if (typeof stale === 'boolean' && query.isStale() !== stale) {
		return false;
	}
	if (typeof fetching === 'boolean' && query.isFetching() !== fetching) {
		return false;
	}
	if (predicate && !predicate(query)) {
		return false;
	}
	return true;
}
function matchMutation(filters, mutation) {
	const { exact, fetching, predicate, mutationKey } = filters;
	if (isQueryKey(mutationKey)) {
		if (!mutation.options.mutationKey) {
			return false;
		}
		if (exact) {
			if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
				return false;
			}
		} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
			return false;
		}
	}
	if (typeof fetching === 'boolean' && (mutation.state.status === 'loading') !== fetching) {
		return false;
	}
	if (predicate && !predicate(mutation)) {
		return false;
	}
	return true;
}
function hashQueryKeyByOptions(queryKey, options) {
	const hashFn =
		(options === null || options === void 0 ? void 0 : options.queryKeyHashFn) || hashQueryKey;
	return hashFn(queryKey);
}
function hashQueryKey(queryKey) {
	const asArray = ensureQueryKeyArray(queryKey);
	return stableValueHash(asArray);
}
function stableValueHash(value) {
	return JSON.stringify(value, (_, val) =>
		isPlainObject(val)
			? Object.keys(val)
					.sort()
					.reduce((result, key) => {
						result[key] = val[key];
						return result;
					}, {})
			: val
	);
}
function partialMatchKey(a, b) {
	return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
function partialDeepEqual(a, b) {
	if (a === b) {
		return true;
	}
	if (typeof a !== typeof b) {
		return false;
	}
	if (a && b && typeof a === 'object' && typeof b === 'object') {
		return !Object.keys(b).some((key) => !partialDeepEqual(a[key], b[key]));
	}
	return false;
}
function replaceEqualDeep(a, b) {
	if (a === b) {
		return a;
	}
	const array = Array.isArray(a) && Array.isArray(b);
	if (array || (isPlainObject(a) && isPlainObject(b))) {
		const aSize = array ? a.length : Object.keys(a).length;
		const bItems = array ? b : Object.keys(b);
		const bSize = bItems.length;
		const copy = array ? [] : {};
		let equalItems = 0;
		for (let i = 0; i < bSize; i++) {
			const key = array ? i : bItems[i];
			copy[key] = replaceEqualDeep(a[key], b[key]);
			if (copy[key] === a[key]) {
				equalItems++;
			}
		}
		return aSize === bSize && equalItems === aSize ? a : copy;
	}
	return b;
}
function shallowEqualObjects(a, b) {
	if ((a && !b) || (b && !a)) {
		return false;
	}
	for (const key in a) {
		if (a[key] !== b[key]) {
			return false;
		}
	}
	return true;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) {
		return false;
	}
	const ctor = o.constructor;
	if (typeof ctor === 'undefined') {
		return true;
	}
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) {
		return false;
	}
	if (!prot.hasOwnProperty('isPrototypeOf')) {
		return false;
	}
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === '[object Object]';
}
function isQueryKey(value) {
	return typeof value === 'string' || Array.isArray(value);
}
function sleep(timeout) {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
}
function scheduleMicrotask(callback) {
	Promise.resolve()
		.then(callback)
		.catch((error) =>
			setTimeout(() => {
				throw error;
			})
		);
}
function getAbortController() {
	if (typeof AbortController === 'function') {
		return new AbortController();
	}
}
class FocusManager extends Subscribable {
	constructor() {
		super();
		this.setup = (onFocus) => {
			if (!isServer && (window === null || window === void 0 ? void 0 : window.addEventListener)) {
				const listener = () => onFocus();
				window.addEventListener('visibilitychange', listener, false);
				window.addEventListener('focus', listener, false);
				return () => {
					window.removeEventListener('visibilitychange', listener);
					window.removeEventListener('focus', listener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.cleanup) {
			this.setEventListener(this.setup);
		}
	}
	onUnsubscribe() {
		var _a;
		if (!this.hasListeners()) {
			(_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
			this.cleanup = void 0;
		}
	}
	setEventListener(setup) {
		var _a;
		this.setup = setup;
		(_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
		this.cleanup = setup((focused) => {
			if (typeof focused === 'boolean') {
				this.setFocused(focused);
			} else {
				this.onFocus();
			}
		});
	}
	setFocused(focused) {
		this.focused = focused;
		if (focused) {
			this.onFocus();
		}
	}
	onFocus() {
		this.listeners.forEach((listener) => {
			listener();
		});
	}
	isFocused() {
		if (typeof this.focused === 'boolean') {
			return this.focused;
		}
		if (typeof document === 'undefined') {
			return true;
		}
		return [void 0, 'visible', 'prerender'].includes(document.visibilityState);
	}
}
const focusManager = new FocusManager();
class OnlineManager extends Subscribable {
	constructor() {
		super();
		this.setup = (onOnline) => {
			if (!isServer && (window === null || window === void 0 ? void 0 : window.addEventListener)) {
				const listener = () => onOnline();
				window.addEventListener('online', listener, false);
				window.addEventListener('offline', listener, false);
				return () => {
					window.removeEventListener('online', listener);
					window.removeEventListener('offline', listener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.cleanup) {
			this.setEventListener(this.setup);
		}
	}
	onUnsubscribe() {
		var _a;
		if (!this.hasListeners()) {
			(_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
			this.cleanup = void 0;
		}
	}
	setEventListener(setup) {
		var _a;
		this.setup = setup;
		(_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
		this.cleanup = setup((online) => {
			if (typeof online === 'boolean') {
				this.setOnline(online);
			} else {
				this.onOnline();
			}
		});
	}
	setOnline(online) {
		this.online = online;
		if (online) {
			this.onOnline();
		}
	}
	onOnline() {
		this.listeners.forEach((listener) => {
			listener();
		});
	}
	isOnline() {
		if (typeof this.online === 'boolean') {
			return this.online;
		}
		if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
			return true;
		}
		return navigator.onLine;
	}
}
const onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
	return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function isCancelable(value) {
	return typeof (value === null || value === void 0 ? void 0 : value.cancel) === 'function';
}
class CancelledError {
	constructor(options) {
		this.revert = options === null || options === void 0 ? void 0 : options.revert;
		this.silent = options === null || options === void 0 ? void 0 : options.silent;
	}
}
function isCancelledError(value) {
	return value instanceof CancelledError;
}
class Retryer {
	constructor(config2) {
		let cancelRetry = false;
		let cancelFn;
		let continueFn;
		let promiseResolve;
		let promiseReject;
		this.abort = config2.abort;
		this.cancel = (cancelOptions) =>
			cancelFn === null || cancelFn === void 0 ? void 0 : cancelFn(cancelOptions);
		this.cancelRetry = () => {
			cancelRetry = true;
		};
		this.continueRetry = () => {
			cancelRetry = false;
		};
		this.continue = () => (continueFn === null || continueFn === void 0 ? void 0 : continueFn());
		this.failureCount = 0;
		this.isPaused = false;
		this.isResolved = false;
		this.isTransportCancelable = false;
		this.promise = new Promise((outerResolve, outerReject) => {
			promiseResolve = outerResolve;
			promiseReject = outerReject;
		});
		const resolve = (value) => {
			var _a;
			if (!this.isResolved) {
				this.isResolved = true;
				(_a = config2.onSuccess) === null || _a === void 0 ? void 0 : _a.call(config2, value);
				continueFn === null || continueFn === void 0 ? void 0 : continueFn();
				promiseResolve(value);
			}
		};
		const reject = (value) => {
			var _a;
			if (!this.isResolved) {
				this.isResolved = true;
				(_a = config2.onError) === null || _a === void 0 ? void 0 : _a.call(config2, value);
				continueFn === null || continueFn === void 0 ? void 0 : continueFn();
				promiseReject(value);
			}
		};
		const pause = () => {
			return new Promise((continueResolve) => {
				var _a;
				continueFn = continueResolve;
				this.isPaused = true;
				(_a = config2.onPause) === null || _a === void 0 ? void 0 : _a.call(config2);
			}).then(() => {
				var _a;
				continueFn = void 0;
				this.isPaused = false;
				(_a = config2.onContinue) === null || _a === void 0 ? void 0 : _a.call(config2);
			});
		};
		const run = () => {
			if (this.isResolved) {
				return;
			}
			let promiseOrValue;
			try {
				promiseOrValue = config2.fn();
			} catch (error) {
				promiseOrValue = Promise.reject(error);
			}
			cancelFn = (cancelOptions) => {
				var _a;
				if (!this.isResolved) {
					reject(new CancelledError(cancelOptions));
					(_a = this.abort) === null || _a === void 0 ? void 0 : _a.call(this);
					if (isCancelable(promiseOrValue)) {
						try {
							promiseOrValue.cancel();
						} catch (_b) {}
					}
				}
			};
			this.isTransportCancelable = isCancelable(promiseOrValue);
			Promise.resolve(promiseOrValue)
				.then(resolve)
				.catch((error) => {
					var _a, _b, _c;
					if (this.isResolved) {
						return;
					}
					const retry = (_a = config2.retry) !== null && _a !== void 0 ? _a : 3;
					const retryDelay =
						(_b = config2.retryDelay) !== null && _b !== void 0 ? _b : defaultRetryDelay;
					const delay =
						typeof retryDelay === 'function' ? retryDelay(this.failureCount, error) : retryDelay;
					const shouldRetry =
						retry === true ||
						(typeof retry === 'number' && this.failureCount < retry) ||
						(typeof retry === 'function' && retry(this.failureCount, error));
					if (cancelRetry || !shouldRetry) {
						reject(error);
						return;
					}
					this.failureCount++;
					(_c = config2.onFail) === null || _c === void 0
						? void 0
						: _c.call(config2, this.failureCount, error);
					sleep(delay)
						.then(() => {
							if (!focusManager.isFocused() || !onlineManager.isOnline()) {
								return pause();
							}
						})
						.then(() => {
							if (cancelRetry) {
								reject(error);
							} else {
								run();
							}
						});
				});
		};
		run();
	}
}
class NotifyManager {
	constructor() {
		this.queue = [];
		this.transactions = 0;
		this.notifyFn = (callback) => {
			callback();
		};
		this.batchNotifyFn = (callback) => {
			callback();
		};
	}
	batch(callback) {
		let result;
		this.transactions++;
		try {
			result = callback();
		} finally {
			this.transactions--;
			if (!this.transactions) {
				this.flush();
			}
		}
		return result;
	}
	schedule(callback) {
		if (this.transactions) {
			this.queue.push(callback);
		} else {
			scheduleMicrotask(() => {
				this.notifyFn(callback);
			});
		}
	}
	batchCalls(callback) {
		return (...args) => {
			this.schedule(() => {
				callback(...args);
			});
		};
	}
	flush() {
		const queue = this.queue;
		this.queue = [];
		if (queue.length) {
			scheduleMicrotask(() => {
				this.batchNotifyFn(() => {
					queue.forEach((callback) => {
						this.notifyFn(callback);
					});
				});
			});
		}
	}
	setNotifyFunction(fn) {
		this.notifyFn = fn;
	}
	setBatchNotifyFunction(fn) {
		this.batchNotifyFn = fn;
	}
}
const notifyManager = new NotifyManager();
let logger = console;
function getLogger() {
	return logger;
}
const subscriber_queue = [];
function readable(value, start) {
	return {
		subscribe: writable(value, start).subscribe
	};
}
function writable(value, start = import_index_c5a8641a.n) {
	let stop;
	const subscribers = /* @__PURE__ */ new Set();
	function set(new_value) {
		if ((0, import_index_c5a8641a.d)(value, new_value)) {
			value = new_value;
			if (stop) {
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}
	function update(fn) {
		set(fn(value));
	}
	function subscribe(run, invalidate = import_index_c5a8641a.n) {
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set) || import_index_c5a8641a.n;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}
const name = 'nicholasadamou.com';
const version = '1.0.0';
const description = "Nicholas Adamou's Personal Website";
const author = 'Nicholas Adamou <nicholasadamouemail@gmail.com>';
const repository = {
	type: 'git',
	url: 'https://github.com/nicholadamou/nicholasadamou.com'
};
const keywords = ['svelte'];
const scripts = {
	dev: 'vite dev',
	prebuild:
		'test "$CI" = true && npx pnpm install -r --store=node_modules/.pnpm-store || echo skipping pnpm install',
	build: 'vite build',
	package: 'svelte-kit package',
	preview: 'vite preview',
	prepare: 'husky install',
	'lint-staged': 'lint-staged',
	lint: 'prettier --check --plugin-search-dir=. . && eslint --ignore-path .gitignore .',
	format: 'prettier --write --plugin-search-dir=. .',
	update: 'npx yarn-check -u',
	clean: 'sudo rm -rf .svelte-kit build/ node_modules/'
};
const devDependencies = {
	'@sveltejs/adapter-auto': 'next',
	'@sveltejs/adapter-netlify': '1.0.0-next.67',
	'@beyonk/svelte-google-analytics': '^2.6.4',
	'@sveltejs/kit': 'next',
	eslint: '8.19.0',
	'eslint-config-prettier': '^8.5.0',
	'eslint-plugin-svelte3': '4.0.0',
	'node-sass': '7.0.1',
	prettier: '^2.7.1',
	'prettier-plugin-svelte': '^2.7.0',
	svelte: '^3.49.0',
	'svelte-preprocess': '^4.10.7',
	vite: '^3.0.0'
};
const type = 'module';
const dependencies = {
	'@fortawesome/fontawesome-svg-core': '^6.1.1',
	'@fortawesome/free-brands-svg-icons': '^6.1.1',
	'@fortawesome/free-regular-svg-icons': '^6.1.1',
	'@fortawesome/free-solid-svg-icons': '^6.1.1',
	'@sveltestack/svelte-query': '^1.6.0',
	'broadcast-channel': '^4.13.0',
	husky: '8.0.1',
	'lint-staged': '13.0.3',
	moment: '^2.29.4',
	netlify: '11.0.2',
	'netlify-cli': '10.7.1',
	'netlify-lambda': '^2.0.15',
	'normalize.css': '^8.0.1',
	'svelte-awesome': '3.0.0',
	'svelte-lazy': '^1.1.0',
	'svelte-loading-spinners': '^0.1.7',
	'svelte-scrollto': '^0.2.0',
	'svelte-themer': '0.5.5'
};
const packageJSON = {
	name,
	version,
	description,
	author,
	repository,
	keywords,
	scripts,
	'lint-staged': {
		'*.{js,css,json,md}': ['prettier --write'],
		'*.js': ['eslint --fix']
	},
	devDependencies,
	type,
	dependencies
};
const config = {
	name: packageJSON.name,
	siteUrl: 'https://nicholasadamou.com',
	image: '/og.png',
	title: 'Nicholas Adamou',
	description:
		'Nicholas Adamou is a performance-driven full-stack software engineer. Currently, he is focused on building accessible, human-centered products at IBM.',
	author: 'Nicholas Adamou',
	twitterUsername: '@nicholasadamou',
	email: 'nicholasadamouemail@gmail.com',
	socialMedia: {
		github: {
			name: 'GitHub',
			url: 'https://github.com/nicholasadamou',
			username: 'nicholasadamou'
		},
		codepen: {
			name: 'CodePen',
			url: 'https://codepen.io/nicholasadamou'
		},
		linkedin: {
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/nicholas-adamou'
		},
		stackexchange: {
			name: 'Stack Exchange',
			url: 'https://stackexchange.com/users/6884358/nicholas-adamou',
			stackoverflow: {
				name: 'Stack Overflow',
				url: 'https://stackoverflow.com/users/5290011/nicholas-adamou'
			}
		}
	},
	experiences: [
		{
			image: 'ibm.png',
			company: 'IBM',
			title: 'Staff Software Engineer, GLUI NG Squad',
			duration: 'May 2021 - Present',
			location: 'Southbury, CT',
			description:
				"Leverages modern technologies to bring a new modern face to IBM's ledger application. I lifted and shifted IBM's departmental application's chatbot to the ledger application. Utilized JWT to handle user authentication within the chatbot. I leveraged Box and Java Spring Boot to construct a microservice to stream video/image content to the chatbot. Integrated Apache POI to dynamically handle Excel document generation and parsing for the ledger application's Direct File Import (DFI) feature. Leveraged GoLang and Gin to construct a microservice to handle transferring parsed Excel files to the downstream import job server. I migrated each of the ledger application's environments to IBM's Hybrid Cloud Cirrus platform. I integrated HCL AppScan for static analysis into each of the ledger's microservices' development docker build pipelines on IBM's Hybrid Cloud Cirrus platform. I improved the application's pagination performance by transitioning the application's data table pagination on several key pages from back end to front end pagination based on user research and surveys that concluded how likely our users are to navigate beyond the first page of a data table. Integrated gzip and brotli compression in order to decrease the size of the application's production assets which improved the application overall time to interactive by ~85% on several key pages. Helps interview prospective intern candidates by assessing their depth and breadth of knowledge within the realm of software engineering. Acts as a software librarian for IBM's departmental software handling production deployments."
		},
		{
			image: 'ibm.png',
			company: 'IBM',
			title: 'Associate Software Engineer, GLUI NG and GUDA Squads',
			duration: 'June 2019 - May 2021',
			location: 'Southbury, CT',
			description:
				"Works on cross-functional teams to enhance IBM's ledger and departmental software. Developed various key front-end and back-end services. Utilized Java Spring Boot and JDBC in order to construct a microservice for handling sending user emails based on user activity within the ledger application. Leveraged Swagger in order to construct documentation surrounding each of the ledger's microservice APIs. Integrated dynamic session timeout handling for user sessions based on JWT expiration for the ledger application. Utilized CRON jobs, Hibernate, and Java Spring Boot to automate the clean-up of user-PI data within the departmental software. I worked closely with the departmental application development lead in order to maintain their full-stack Angular and Express IBM Watson-backed chatbot."
		},
		{
			image: 'blackbird.png',
			company: 'Blackbird',
			title: 'Software Engineering Intern',
			duration: 'June 2018 - August 2018',
			location: 'San Francisco, CA',
			description:
				'Worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging React, React Native, React Native Web, GraphQL, and Apollo. Provided Quality Assurance and unit testing on multiple builds of the Blackbird web and mobile apps.'
		}
	],
	projects: [
		{
			name: 'serverless-react-browsers',
			language: 'react'
		},
		{
			name: 'down-to-network',
			language: 'react'
		},
		{
			name: 'isitup',
			language: 'gulp'
		},
		{
			name: 'cf-detect',
			language: 'gulp'
		},
		{
			name: 'vineyard-vines-sales',
			language: 'react',
			url: 'https://vineyard-vines-sales.netlify.app/'
		},
		{
			name: 'wifi-card',
			language: 'react',
			url: 'https://wifi-card.netlify.app/'
		},
		{
			name: 'muuvies',
			language: 'react',
			url: 'https://muuvies.netlify.app/'
		},
		{
			name: 'firebase-react-starter-kit',
			language: 'react'
		},
		{
			name: 'react-iframe',
			language: 'react'
		},
		{
			name: 'storage',
			language: 'react'
		},
		{
			name: 'krios-github-bot',
			language: 'node'
		},
		{
			name: 'toasty',
			language: 'react'
		},
		{
			name: 'jwt-spring-security-demo',
			language: 'java'
		},
		{
			name: 'carbon-sidebar-tabs',
			language: 'react'
		},
		{
			name: 'chunked-file-upload-poc',
			language: 'react'
		}
	]
};
