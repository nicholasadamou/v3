var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
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
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, 'default', { value: mod, enumerable: true })
			: target,
		mod
	)
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c5a8641a = require('../../immutable/chunks/index-c5a8641a.js');
var import_config_2fdef3a5 = require('../../immutable/chunks/config-2fdef3a5.js');
var import_index_es_1c831e92 = require('../../immutable/chunks/index.es-1c831e92.js');
var import_moment = __toESM(require('moment'));
class QueryObserver extends import_config_2fdef3a5.S {
	constructor(client, options) {
		super();
		this.client = client;
		this.options = options;
		this.trackedProps = [];
		this.previousSelectError = null;
		this.bindMethods();
		this.setOptions(options);
	}
	bindMethods() {
		this.remove = this.remove.bind(this);
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		if (this.listeners.length === 1) {
			this.currentQuery.addObserver(this);
			if (shouldFetchOnMount(this.currentQuery, this.options)) {
				this.executeFetch();
			}
			this.updateTimers();
		}
	}
	onUnsubscribe() {
		if (!this.listeners.length) {
			this.destroy();
		}
	}
	shouldFetchOnReconnect() {
		return shouldFetchOnReconnect(this.currentQuery, this.options);
	}
	shouldFetchOnWindowFocus() {
		return shouldFetchOnWindowFocus(this.currentQuery, this.options);
	}
	destroy() {
		this.listeners = [];
		this.clearTimers();
		this.currentQuery.removeObserver(this);
	}
	setOptions(options, notifyOptions) {
		const prevOptions = this.options;
		const prevQuery = this.currentQuery;
		this.options = this.client.defaultQueryObserverOptions(options);
		if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
			throw new Error('Expected enabled to be a boolean');
		}
		if (!this.options.queryKey) {
			this.options.queryKey = prevOptions.queryKey;
		}
		this.updateQuery();
		const mounted = this.hasListeners();
		if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
			this.executeFetch();
		}
		this.updateResult(notifyOptions);
		if (
			mounted &&
			(this.currentQuery !== prevQuery ||
				this.options.enabled !== prevOptions.enabled ||
				this.options.staleTime !== prevOptions.staleTime)
		) {
			this.updateStaleTimeout();
		}
		const nextRefetchInterval = this.computeRefetchInterval();
		if (
			mounted &&
			(this.currentQuery !== prevQuery ||
				this.options.enabled !== prevOptions.enabled ||
				nextRefetchInterval !== this.currentRefetchInterval)
		) {
			this.updateRefetchInterval(nextRefetchInterval);
		}
	}
	updateOptions(options, notifyOptions) {
		const mergedOptions = Object.assign(Object.assign({}, this.options), options);
		if (options.queryKey && !options.queryHash && options.queryKey !== this.options.queryKey) {
			mergedOptions.queryHash = (0, import_config_2fdef3a5.h)(options.queryKey, mergedOptions);
		}
		this.setOptions(mergedOptions, notifyOptions);
	}
	getOptimisticResult(options) {
		const defaultedOptions = this.client.defaultQueryObserverOptions(options);
		const query = this.client.getQueryCache().build(this.client, defaultedOptions);
		return this.createResult(query, defaultedOptions);
	}
	getCurrentResult() {
		return this.currentResult;
	}
	trackResult(result, defaultedOptions) {
		const trackedResult = {};
		const trackProp = (key) => {
			if (!this.trackedProps.includes(key)) {
				this.trackedProps.push(key);
			}
		};
		Object.keys(result).forEach((key) => {
			Object.defineProperty(trackedResult, key, {
				configurable: false,
				enumerable: true,
				get: () => {
					trackProp(key);
					return result[key];
				}
			});
		});
		if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) {
			trackProp('error');
		}
		return trackedResult;
	}
	getNextResult(options) {
		return new Promise((resolve, reject) => {
			const unsubscribe = this.subscribe((result) => {
				if (!result.isFetching) {
					unsubscribe();
					if (
						result.isError &&
						(options === null || options === void 0 ? void 0 : options.throwOnError)
					) {
						reject(result.error);
					} else {
						resolve(result);
					}
				}
			});
		});
	}
	getCurrentQuery() {
		return this.currentQuery;
	}
	remove() {
		this.client.getQueryCache().remove(this.currentQuery);
	}
	refetch(options) {
		return this.fetch(
			Object.assign(Object.assign({}, options), {
				meta: { refetchPage: options === null || options === void 0 ? void 0 : options.refetchPage }
			})
		);
	}
	fetchOptimistic(options) {
		const defaultedOptions = this.client.defaultQueryObserverOptions(options);
		const query = this.client.getQueryCache().build(this.client, defaultedOptions);
		return query.fetch().then(() => this.createResult(query, defaultedOptions));
	}
	fetch(fetchOptions) {
		return this.executeFetch(fetchOptions).then(() => {
			this.updateResult();
			return this.currentResult;
		});
	}
	executeFetch(fetchOptions) {
		this.updateQuery();
		let promise = this.currentQuery.fetch(this.options, fetchOptions);
		if (!(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.throwOnError)) {
			promise = promise.catch(import_config_2fdef3a5.n);
		}
		return promise;
	}
	updateStaleTimeout() {
		this.clearStaleTimeout();
		if (
			import_config_2fdef3a5.v ||
			this.currentResult.isStale ||
			!(0, import_config_2fdef3a5.i)(this.options.staleTime)
		) {
			return;
		}
		const time = (0, import_config_2fdef3a5.t)(
			this.currentResult.dataUpdatedAt,
			this.options.staleTime
		);
		const timeout = time + 1;
		this.staleTimeoutId = setTimeout(() => {
			if (!this.currentResult.isStale) {
				this.updateResult();
			}
		}, timeout);
	}
	computeRefetchInterval() {
		var _a;
		return typeof this.options.refetchInterval === 'function'
			? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
			: (_a = this.options.refetchInterval) !== null && _a !== void 0
			? _a
			: false;
	}
	updateRefetchInterval(nextInterval) {
		this.clearRefetchInterval();
		this.currentRefetchInterval = nextInterval;
		if (
			import_config_2fdef3a5.v ||
			this.options.enabled === false ||
			!(0, import_config_2fdef3a5.i)(this.currentRefetchInterval) ||
			this.currentRefetchInterval === 0
		) {
			return;
		}
		this.refetchIntervalId = setInterval(() => {
			if (this.options.refetchIntervalInBackground || import_config_2fdef3a5.k.isFocused()) {
				this.executeFetch();
			}
		}, this.currentRefetchInterval);
	}
	updateTimers() {
		this.updateStaleTimeout();
		this.updateRefetchInterval(this.computeRefetchInterval());
	}
	clearTimers() {
		this.clearStaleTimeout();
		this.clearRefetchInterval();
	}
	clearStaleTimeout() {
		clearTimeout(this.staleTimeoutId);
		this.staleTimeoutId = void 0;
	}
	clearRefetchInterval() {
		clearInterval(this.refetchIntervalId);
		this.refetchIntervalId = void 0;
	}
	createResult(query, options) {
		var _a;
		const prevQuery = this.currentQuery;
		const prevOptions = this.options;
		const prevResult = this.currentResult;
		const prevResultState = this.currentResultState;
		const prevResultOptions = this.currentResultOptions;
		const queryChange = query !== prevQuery;
		const queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
		const prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
		const { state } = query;
		let { dataUpdatedAt, error, errorUpdatedAt, isFetching, status } = state;
		let isPreviousData = false;
		let isPlaceholderData = false;
		let data;
		if (options.optimisticResults) {
			const mounted = this.hasListeners();
			const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
			const fetchOptionally =
				mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
			if (fetchOnMount || fetchOptionally) {
				isFetching = true;
				if (!dataUpdatedAt) {
					status = 'loading';
				}
			}
		}
		if (
			options.keepPreviousData &&
			!state.dataUpdateCount &&
			(prevQueryResult === null || prevQueryResult === void 0
				? void 0
				: prevQueryResult.isSuccess) &&
			status !== 'error'
		) {
			data = prevQueryResult.data;
			dataUpdatedAt = prevQueryResult.dataUpdatedAt;
			status = prevQueryResult.status;
			isPreviousData = true;
		} else if (options.select && typeof state.data !== 'undefined') {
			if (
				prevResult &&
				state.data ===
					(prevResultState === null || prevResultState === void 0
						? void 0
						: prevResultState.data) &&
				options.select ===
					((_a = this.previousSelect) === null || _a === void 0 ? void 0 : _a.fn) &&
				!this.previousSelectError
			) {
				data = this.previousSelect.result;
			} else {
				try {
					data = options.select(state.data);
					if (options.structuralSharing !== false) {
						data = (0, import_config_2fdef3a5.r)(
							prevResult === null || prevResult === void 0 ? void 0 : prevResult.data,
							data
						);
					}
					this.previousSelect = {
						fn: options.select,
						result: data
					};
					this.previousSelectError = null;
				} catch (selectError) {
					(0, import_config_2fdef3a5.b)().error(selectError);
					error = selectError;
					this.previousSelectError = selectError;
					errorUpdatedAt = Date.now();
					status = 'error';
				}
			}
		} else {
			data = state.data;
		}
		if (
			typeof options.placeholderData !== 'undefined' &&
			typeof data === 'undefined' &&
			(status === 'loading' || status === 'idle')
		) {
			let placeholderData;
			if (
				(prevResult === null || prevResult === void 0 ? void 0 : prevResult.isPlaceholderData) &&
				options.placeholderData ===
					(prevResultOptions === null || prevResultOptions === void 0
						? void 0
						: prevResultOptions.placeholderData)
			) {
				placeholderData = prevResult.data;
			} else {
				placeholderData =
					typeof options.placeholderData === 'function'
						? options.placeholderData()
						: options.placeholderData;
				if (options.select && typeof placeholderData !== 'undefined') {
					try {
						placeholderData = options.select(placeholderData);
						if (options.structuralSharing !== false) {
							placeholderData = (0, import_config_2fdef3a5.r)(
								prevResult === null || prevResult === void 0 ? void 0 : prevResult.data,
								placeholderData
							);
						}
						this.previousSelectError = null;
					} catch (selectError) {
						(0, import_config_2fdef3a5.b)().error(selectError);
						error = selectError;
						this.previousSelectError = selectError;
						errorUpdatedAt = Date.now();
						status = 'error';
					}
				}
			}
			if (typeof placeholderData !== 'undefined') {
				status = 'success';
				data = placeholderData;
				isPlaceholderData = true;
			}
		}
		const result = {
			status,
			isLoading: status === 'loading',
			isSuccess: status === 'success',
			isError: status === 'error',
			isIdle: status === 'idle',
			data,
			dataUpdatedAt,
			error,
			errorUpdatedAt,
			failureCount: state.fetchFailureCount,
			isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
			isFetchedAfterMount:
				state.dataUpdateCount > queryInitialState.dataUpdateCount ||
				state.errorUpdateCount > queryInitialState.errorUpdateCount,
			isFetching,
			isRefetching: isFetching && status !== 'loading',
			isLoadingError: status === 'error' && state.dataUpdatedAt === 0,
			isPlaceholderData,
			isPreviousData,
			isRefetchError: status === 'error' && state.dataUpdatedAt !== 0,
			isStale: isStale(query, options),
			refetch: this.refetch,
			remove: this.remove
		};
		return result;
	}
	shouldNotifyListeners(result, prevResult) {
		if (!prevResult) {
			return true;
		}
		const { notifyOnChangeProps, notifyOnChangePropsExclusions } = this.options;
		if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
			return true;
		}
		if (notifyOnChangeProps === 'tracked' && !this.trackedProps.length) {
			return true;
		}
		const includedProps =
			notifyOnChangeProps === 'tracked' ? this.trackedProps : notifyOnChangeProps;
		return Object.keys(result).some((key) => {
			const typedKey = key;
			const changed = result[typedKey] !== prevResult[typedKey];
			const isIncluded =
				includedProps === null || includedProps === void 0
					? void 0
					: includedProps.some((x) => x === key);
			const isExcluded =
				notifyOnChangePropsExclusions === null || notifyOnChangePropsExclusions === void 0
					? void 0
					: notifyOnChangePropsExclusions.some((x) => x === key);
			return changed && !isExcluded && (!includedProps || isIncluded);
		});
	}
	updateResult(notifyOptions) {
		const prevResult = this.currentResult;
		this.currentResult = this.createResult(this.currentQuery, this.options);
		this.currentResultState = this.currentQuery.state;
		this.currentResultOptions = this.options;
		if ((0, import_config_2fdef3a5.x)(this.currentResult, prevResult)) {
			return;
		}
		const defaultNotifyOptions = { cache: true };
		if (
			(notifyOptions === null || notifyOptions === void 0 ? void 0 : notifyOptions.listeners) !==
				false &&
			this.shouldNotifyListeners(this.currentResult, prevResult)
		) {
			defaultNotifyOptions.listeners = true;
		}
		this.notify(Object.assign(Object.assign({}, defaultNotifyOptions), notifyOptions));
	}
	updateQuery() {
		const query = this.client.getQueryCache().build(this.client, this.options);
		if (query === this.currentQuery) {
			return;
		}
		const prevQuery = this.currentQuery;
		this.currentQuery = query;
		this.currentQueryInitialState = query.state;
		this.previousQueryResult = this.currentResult;
		if (this.hasListeners()) {
			prevQuery === null || prevQuery === void 0 ? void 0 : prevQuery.removeObserver(this);
			query.addObserver(this);
		}
	}
	onQueryUpdate(action) {
		const notifyOptions = {};
		if (action.type === 'success') {
			notifyOptions.onSuccess = true;
		} else if (action.type === 'error' && !(0, import_config_2fdef3a5.a)(action.error)) {
			notifyOptions.onError = true;
		}
		this.updateResult(notifyOptions);
		if (this.hasListeners()) {
			this.updateTimers();
		}
	}
	notify(notifyOptions) {
		import_config_2fdef3a5.c.batch(() => {
			var _a, _b, _c, _d, _e, _f, _g, _h;
			if (notifyOptions.onSuccess) {
				(_b = (_a = this.options).onSuccess) === null || _b === void 0
					? void 0
					: _b.call(_a, this.currentResult.data);
				(_d = (_c = this.options).onSettled) === null || _d === void 0
					? void 0
					: _d.call(_c, this.currentResult.data, null);
			} else if (notifyOptions.onError) {
				(_f = (_e = this.options).onError) === null || _f === void 0
					? void 0
					: _f.call(_e, this.currentResult.error);
				(_h = (_g = this.options).onSettled) === null || _h === void 0
					? void 0
					: _h.call(_g, void 0, this.currentResult.error);
			}
			if (notifyOptions.listeners) {
				this.listeners.forEach((listener) => {
					listener(this.currentResult);
				});
			}
			if (notifyOptions.cache) {
				this.client
					.getQueryCache()
					.notify({ query: this.currentQuery, type: 'observerResultsUpdated' });
			}
		});
	}
}
function shouldLoadOnMount(query, options) {
	return (
		options.enabled !== false &&
		!query.state.dataUpdatedAt &&
		!(query.state.status === 'error' && options.retryOnMount === false)
	);
}
function shouldRefetchOnMount(query, options) {
	return (
		options.enabled !== false &&
		query.state.dataUpdatedAt > 0 &&
		(options.refetchOnMount === 'always' ||
			(options.refetchOnMount !== false && isStale(query, options)))
	);
}
function shouldFetchOnMount(query, options) {
	return shouldLoadOnMount(query, options) || shouldRefetchOnMount(query, options);
}
function shouldFetchOnReconnect(query, options) {
	return (
		options.enabled !== false &&
		(options.refetchOnReconnect === 'always' ||
			(options.refetchOnReconnect !== false && isStale(query, options)))
	);
}
function shouldFetchOnWindowFocus(query, options) {
	return (
		options.enabled !== false &&
		(options.refetchOnWindowFocus === 'always' ||
			(options.refetchOnWindowFocus !== false && isStale(query, options)))
	);
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
	return (
		options.enabled !== false &&
		(query !== prevQuery || prevOptions.enabled === false) &&
		(!options.suspense || query.state.status !== 'error') &&
		isStale(query, options)
	);
}
function isStale(query, options) {
	return query.isStaleByTime(options.staleTime);
}
function useQueryClient() {
	const queryClient = (0, import_index_c5a8641a.j)('queryClient');
	if (!queryClient) {
		throw new Error('No QueryClient set, use QueryClientProvider to set one');
	}
	return queryClient;
}
function setBatchCalls(options) {
	options.optimisticResults = true;
	if (options.onError) {
		options.onError = import_config_2fdef3a5.c.batchCalls(options.onError);
	}
	if (options.onSuccess) {
		options.onSuccess = import_config_2fdef3a5.c.batchCalls(options.onSuccess);
	}
	if (options.onSettled) {
		options.onSettled = import_config_2fdef3a5.c.batchCalls(options.onSettled);
	}
	return options;
}
function useQuery(arg1, arg2, arg3) {
	const options = (0, import_config_2fdef3a5.l)(arg1, arg2, arg3);
	const client = useQueryClient();
	let defaultedOptions = client.defaultQueryObserverOptions(options);
	defaultedOptions = setBatchCalls(defaultedOptions);
	const observer = new QueryObserver(client, defaultedOptions);
	const { subscribe: subscribe2 } = (0, import_config_2fdef3a5.y)(
		observer.getCurrentResult(),
		(set) => {
			return observer.subscribe(import_config_2fdef3a5.c.batchCalls(set));
		}
	);
	observer.updateResult();
	function setOptions(arg12, arg22, arg32) {
		const options2 = (0, import_config_2fdef3a5.l)(arg12, arg22, arg32);
		let defaultedOptions2 = client.defaultQueryObserverOptions(options2);
		defaultedOptions2 = setBatchCalls(defaultedOptions2);
		if (observer.hasListeners()) {
			observer.setOptions(defaultedOptions2, { listeners: false });
		}
	}
	function updateOptions(options2) {
		observer.updateOptions(options2);
	}
	function setEnabled(enabled) {
		updateOptions({ enabled });
	}
	return { subscribe: subscribe2, setOptions, updateOptions, setEnabled };
}
const ScrollToTopButton_svelte_svelte_type_style_lang = '';
const css$j = {
	code: '.scroll-to-top-button.svelte-k9fwlc{align-items:center;justify-content:center;position:fixed;bottom:20px;right:20px;width:14px;height:14px;padding:20px;z-index:1000;cursor:pointer;border-radius:10px;background:#f5f5f5;animation:svelte-k9fwlc-fadeIn 0.3s;transition:opacity 0.4s;opacity:0.5}@media screen and (max-width: 430px){.scroll-to-top-button.svelte-k9fwlc{width:10px;height:10px}}.scroll-to-top-button.svelte-k9fwlc svg{fill:#212121}@keyframes svelte-k9fwlc-fadeIn{from{opacity:0}to{opacity:1}}',
	map: null
};
const ScrollToTopButton = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$j);
	return `

<div class="${'scroll-to-top-button svelte-k9fwlc'}"${(0, import_index_c5a8641a.b)(
		'style',
		`display: ${'none'};`,
		0
	)}>${(0, import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: import_index_es_1c831e92.a, scale: '1.25' },
		{},
		{}
	)}
</div>`;
});
const Header_svelte_svelte_type_style_lang$1 = '';
const css$i = {
	code: 'button.svelte-bybrc0.svelte-bybrc0{display:none}@media screen and (max-width: 430px){button.svelte-bybrc0.svelte-bybrc0{display:block;position:absolute;top:0;right:2rem}}button.svelte-bybrc0 svg{fill:var(--theme-colors-primary);cursor:pointer}div.svelte-bybrc0.svelte-bybrc0{display:flex;justify-content:flex-start;gap:16px;width:100%}div.svelte-bybrc0 a.svelte-bybrc0{text-decoration:none;color:var(--theme-colors-primary)}div.svelte-bybrc0 a h1.svelte-bybrc0{margin:0;font-size:var(--fz-lg);font-weight:900;text-transform:uppercase}@media screen and (max-width: 430px){div.svelte-bybrc0 a h1.svelte-bybrc0{margin-left:1rem}}',
	map: null
};
const Header$1 = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let $$unsubscribe_isSidebarOpen;
	let isSidebarOpen = (0, import_index_c5a8641a.j)('isSidebarOpen');
	$$unsubscribe_isSidebarOpen = (0, import_index_c5a8641a.a)(isSidebarOpen, (value) => value);
	$$result.css.add(css$i);
	$$unsubscribe_isSidebarOpen();
	return `<div class="${'svelte-bybrc0'}"><a href="${'/'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-bybrc0'}"><h1 class="${'svelte-bybrc0'}">Nicholas Adamou</h1></a>

	<button class="${'svelte-bybrc0'}">${(0, import_index_c5a8641a.v)(
		import_index_es_1c831e92.I,
		'Icon'
	).$$render($$result, { data: import_index_es_1c831e92.b, scale: '1.25' }, {}, {})}</button>
</div>`;
});
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var faAngular = {
	prefix: 'fab',
	iconName: 'angular',
	icon: [
		448,
		512,
		[],
		'f420',
		'M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z'
	]
};
var faCodepen = {
	prefix: 'fab',
	iconName: 'codepen',
	icon: [
		512,
		512,
		[],
		'f1cb',
		'M502.3 159.7l-234-156c-7.987-4.915-16.51-4.96-24.57 0l-234 156C3.714 163.7 0 170.8 0 177.1v155.1c0 7.143 3.714 14.29 9.715 18.29l234 156c7.987 4.915 16.51 4.96 24.57 0l234-156c6-3.999 9.715-11.14 9.715-18.29V177.1c-.001-7.142-3.715-14.29-9.716-18.28zM278 63.13l172.3 114.9-76.86 51.43L278 165.7V63.13zm-44 0v102.6l-95.43 63.72-76.86-51.43L234 63.13zM44 219.1l55.14 36.86L44 292.8v-73.71zm190 229.7L61.71 333.1l76.86-51.43L234 346.3v102.6zm22-140.9l-77.71-52 77.71-52 77.71 52-77.71 52zm22 140.9V346.3l95.43-63.72 76.86 51.43L278 448.8zm190-156l-55.14-36.86L468 219.1v73.71z'
	]
};
var faCss3Alt = {
	prefix: 'fab',
	iconName: 'css3-alt',
	icon: [
		384,
		512,
		[],
		'f38b',
		'M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z'
	]
};
var faGitAlt = {
	prefix: 'fab',
	iconName: 'git-alt',
	icon: [
		448,
		512,
		[],
		'f841',
		'M439.5 236.1L244 40.45a28.87 28.87 0 0 0 -40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.2 199v121.8c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1 -48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.6 101 8.45 235.1a28.86 28.86 0 0 0 0 40.81l195.6 195.6a28.86 28.86 0 0 0 40.8 0l194.7-194.7a28.86 28.86 0 0 0 0-40.81z'
	]
};
var faGithub = {
	prefix: 'fab',
	iconName: 'github',
	icon: [
		496,
		512,
		[],
		'f09b',
		'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
	]
};
var faGulp = {
	prefix: 'fab',
	iconName: 'gulp',
	icon: [
		256,
		512,
		[],
		'f3ae',
		'M209.8 391.1l-14.1 24.6-4.6 80.2c0 8.9-28.3 16.1-63.1 16.1s-63.1-7.2-63.1-16.1l-5.8-79.4-14.9-25.4c41.2 17.3 126 16.7 165.6 0zm-196-253.3l13.6 125.5c5.9-20 20.8-47 40-55.2 6.3-2.7 12.7-2.7 18.7 .9 5.2 3 9.6 9.3 10.1 11.8 1.2 6.5-2 9.1-4.5 9.1-3 0-5.3-4.6-6.8-7.3-4.1-7.3-10.3-7.6-16.9-2.8-6.9 5-12.9 13.4-17.1 20.7-5.1 8.8-9.4 18.5-12 28.2-1.5 5.6-2.9 14.6-.6 19.9 1 2.2 2.5 3.6 4.9 3.6 5 0 12.3-6.6 15.8-10.1 4.5-4.5 10.3-11.5 12.5-16l5.2-15.5c2.6-6.8 9.9-5.6 9.9 0 0 10.2-3.7 13.6-10 34.7-5.8 19.5-7.6 25.8-7.6 25.8-.7 2.8-3.4 7.5-6.3 7.5-1.2 0-2.1-.4-2.6-1.2-1-1.4-.9-5.3-.8-6.3 .2-3.2 6.3-22.2 7.3-25.2-2 2.2-4.1 4.4-6.4 6.6-5.4 5.1-14.1 11.8-21.5 11.8-3.4 0-5.6-.9-7.7-2.4l7.6 79.6c2 5 39.2 17.1 88.2 17.1 49.1 0 86.3-12.2 88.2-17.1l10.9-94.6c-5.7 5.2-12.3 11.6-19.6 14.8-5.4 2.3-17.4 3.8-17.4-5.7 0-5.2 9.1-14.8 14.4-21.5 1.4-1.7 4.7-5.9 4.7-8.1 0-2.9-6-2.2-11.7 2.5-3.2 2.7-6.2 6.3-8.7 9.7-4.3 6-6.6 11.2-8.5 15.5-6.2 14.2-4.1 8.6-9.1 22-5 13.3-4.2 11.8-5.2 14-.9 1.9-2.2 3.5-4 4.5-1.9 1-4.5 .9-6.1-.3-.9-.6-1.3-1.9-1.3-3.7 0-.9 .1-1.8 .3-2.7 1.5-6.1 7.8-18.1 15-34.3 1.6-3.7 1-2.6 .8-2.3-6.2 6-10.9 8.9-14.4 10.5-5.8 2.6-13 2.6-14.5-4.1-.1-.4-.1-.8-.2-1.2-11.8 9.2-24.3 11.7-20-8.1-4.6 8.2-12.6 14.9-22.4 14.9-4.1 0-7.1-1.4-8.6-5.1-2.3-5.5 1.3-14.9 4.6-23.8 1.7-4.5 4-9.9 7.1-16.2 1.6-3.4 4.2-5.4 7.6-4.5 .6 .2 1.1 .4 1.6 .7 2.6 1.8 1.6 4.5 .3 7.2-3.8 7.5-7.1 13-9.3 20.8-.9 3.3-2 9 1.5 9 2.4 0 4.7-.8 6.9-2.4 4.6-3.4 8.3-8.5 11.1-13.5 2-3.6 4.4-8.3 5.6-12.3 .5-1.7 1.1-3.3 1.8-4.8 1.1-2.5 2.6-5.1 5.2-5.1 1.3 0 2.4 .5 3.2 1.5 1.7 2.2 1.3 4.5 .4 6.9-2 5.6-4.7 10.6-6.9 16.7-1.3 3.5-2.7 8-2.7 11.7 0 3.4 3.7 2.6 6.8 1.2 2.4-1.1 4.8-2.8 6.8-4.5 1.2-4.9 .9-3.8 26.4-68.2 1.3-3.3 3.7-4.7 6.1-4.7 1.2 0 2.2 .4 3.2 1.1 1.7 1.3 1.7 4.1 1 6.2-.7 1.9-.6 1.3-4.5 10.5-5.2 12.1-8.6 20.8-13.2 31.9-1.9 4.6-7.7 18.9-8.7 22.3-.6 2.2-1.3 5.8 1 5.8 5.4 0 19.3-13.1 23.1-17 .2-.3 .5-.4 .9-.6 .6-1.9 1.2-3.7 1.7-5.5 1.4-3.8 2.7-8.2 5.3-11.3 .8-1 1.7-1.6 2.7-1.6 2.8 0 4.2 1.2 4.2 4 0 1.1-.7 5.1-1.1 6.2 1.4-1.5 2.9-3 4.5-4.5 15-13.9 25.7-6.8 25.7 .2 0 7.4-8.9 17.7-13.8 23.4-1.6 1.9-4.9 5.4-5 6.4 0 1.3 .9 1.8 2.2 1.8 2 0 6.4-3.5 8-4.7 5-3.9 11.8-9.9 16.6-14.1l14.8-136.8c-30.5 17.1-197.6 17.2-228.3 .2zm229.7-8.5c0 21-231.2 21-231.2 0 0-8.8 51.8-15.9 115.6-15.9 9 0 17.8 .1 26.3 .4l12.6-48.7L228.1 .6c1.4-1.4 5.8-.2 9.9 3.5s6.6 7.9 5.3 9.3l-.1 .1L185.9 74l-10 40.7c39.9 2.6 67.6 8.1 67.6 14.6zm-69.4 4.6c0-.8-.9-1.5-2.5-2.1l-.2 .8c0 1.3-5 2.4-11.1 2.4s-11.1-1.1-11.1-2.4c0-.1 0-.2 .1-.3l.2-.7c-1.8 .6-3 1.4-3 2.3 0 2.1 6.2 3.7 13.7 3.7 7.7 .1 13.9-1.6 13.9-3.7z'
	]
};
var faHtml5 = {
	prefix: 'fab',
	iconName: 'html5',
	icon: [
		384,
		512,
		[],
		'f13b',
		'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z'
	]
};
var faJava = {
	prefix: 'fab',
	iconName: 'java',
	icon: [
		384,
		512,
		[],
		'f4e4',
		'M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1 -2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0 -8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.8 509.4 401 461.3 348 437.4zM124.4 396c-78.7 22 47.9 67.4 148.1 24.5a185.9 185.9 0 0 1 -28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.6 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1 -21.1-12.8z'
	]
};
var faJsSquare = {
	prefix: 'fab',
	iconName: 'js-square',
	icon: [
		448,
		512,
		[],
		'f3b9',
		'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z'
	]
};
var faLinkedin = {
	prefix: 'fab',
	iconName: 'linkedin',
	icon: [
		448,
		512,
		[],
		'f08c',
		'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
	]
};
var faNode = {
	prefix: 'fab',
	iconName: 'node',
	icon: [
		640,
		512,
		[],
		'f419',
		'M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6 .2 .8 .8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5 .3-.4 .5-.8 .4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7 .7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7 .1 1.8 1.2 2.1 2.8 .1 1 .3 2.7 .6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3 .4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3 .7 2.5 1.8 3.2 1.1 .7 2.5 .7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6 .3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1 .7 2.6 .7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6 .3-.9 .9-.9 1.6v24.3c0 .7 .4 1.3 .9 1.6l21 12.1c.6 .3 1.3 .3 1.8 0l21-12.1c.6-.3 .9-.9 .9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3 .7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1 .7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4 .3-.7 .7-.7 1.2v13.6c0 .5 .3 1 .7 1.2l11.8 6.8c.4 .3 1 .3 1.4 0L584 235c.4-.3 .7-.7 .7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7 .1-.5 .2-1.1 .2-1.7zm-74.3-124.9l-.8 .5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z'
	]
};
var faPython = {
	prefix: 'fab',
	iconName: 'python',
	icon: [
		448,
		512,
		[],
		'f3e2',
		'M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z'
	]
};
var faReact = {
	prefix: 'fab',
	iconName: 'react',
	icon: [
		512,
		512,
		[],
		'f41b',
		'M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z'
	]
};
var faStackExchange = {
	prefix: 'fab',
	iconName: 'stack-exchange',
	icon: [
		448,
		512,
		[],
		'f18d',
		'M17.7 332.3h412.7v22c0 37.7-29.3 68-65.3 68h-19L259.3 512v-89.7H83c-36 0-65.3-30.3-65.3-68v-22zm0-23.6h412.7v-85H17.7v85zm0-109.4h412.7v-85H17.7v85zM365 0H83C47 0 17.7 30.3 17.7 67.7V90h412.7V67.7C430.3 30.3 401 0 365 0z'
	]
};
var faStackOverflow = {
	prefix: 'fab',
	iconName: 'stack-overflow',
	icon: [
		384,
		512,
		[],
		'f16c',
		'M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z'
	]
};
const BuyMeACoffee = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	return `<a href="${'https://www.buymeacoffee.com/nicholasadamou'}" target="${'_blank'}"><img src="${'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'}" alt="${'Buy Me A Coffee'}" style="${'height: 30px !important;width: 110px !important;'}"></a>`;
});
const Navigation_svelte_svelte_type_style_lang = '';
const css$h = {
	code: 'div.svelte-1nysos7.svelte-1nysos7{display:flex;align-items:center;justify-content:space-between;margin-top:10px;margin-bottom:20px}@media screen and (max-width: 768px){div.svelte-1nysos7.svelte-1nysos7{margin-right:2rem}}@media screen and (max-width: 430px){div.svelte-1nysos7.svelte-1nysos7{display:none}}div.svelte-1nysos7 a.svelte-1nysos7{text-decoration:underline;line-height:1}div.svelte-1nysos7 nav.svelte-1nysos7{display:flex;gap:10px}div.svelte-1nysos7 nav a.svelte-1nysos7{font-size:var(--fz-sm);font-weight:100;color:var(--theme-colors-text)}div.svelte-1nysos7 span.svelte-1nysos7{display:flex;align-items:center;gap:20px}div.svelte-1nysos7 span.svelte-1nysos7 svg{fill:var(--theme-colors-primary);cursor:pointer}',
	map: null
};
const Navigation = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	const {
		stackexchange,
		github: github2,
		codepen,
		linkedin
	} = import_config_2fdef3a5.u.socialMedia;
	const { stackoverflow } = stackexchange;
	$$result.css.add(css$h);
	return `<div class="${'svelte-1nysos7'}"><nav class="${'svelte-1nysos7'}"><a href="${'#work'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte-1nysos7'}">Work
		</a>
		<a href="${'#websites'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte-1nysos7'}">Websites
		</a>
		<a href="${'#projects'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte-1nysos7'}">Projects
		</a></nav>
	<span class="${'svelte-1nysos7'}">${(0, import_index_c5a8641a.v)(
		BuyMeACoffee,
		'BuyMeACoffee'
	).$$render($$result, {}, {}, {})}

		<a${(0, import_index_c5a8641a.b)(
			'href',
			stackoverflow.url,
			0
		)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1nysos7'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faStackOverflow, scale: '1.25' },
		{},
		{}
	)}</a>
		<a${(0, import_index_c5a8641a.b)(
			'href',
			stackexchange.url,
			0
		)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1nysos7'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faStackExchange, scale: '1.25' },
		{},
		{}
	)}</a>
		<a${(0, import_index_c5a8641a.b)(
			'href',
			github2.url,
			0
		)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1nysos7'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faGithub, scale: '1.25' },
		{},
		{}
	)}</a>
		<a${(0, import_index_c5a8641a.b)(
			'href',
			codepen.url,
			0
		)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1nysos7'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faCodepen, scale: '1.25' },
		{},
		{}
	)}</a>
		<a${(0, import_index_c5a8641a.b)(
			'href',
			linkedin.url,
			0
		)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1nysos7'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faLinkedin, scale: '1.25' },
		{},
		{}
	)}</a></span>
</div>`;
});
const Sidebar_svelte_svelte_type_style_lang = '';
const css$g = {
	code: 'nav.svelte-pl68nw.svelte-pl68nw{position:fixed;top:0;left:0;width:250px;height:100%;padding:70px 30px 30px;background-color:var(--theme-colors-background-contrast);z-index:9999}nav.svelte-pl68nw section.svelte-pl68nw{display:flex;flex-direction:column;gap:16px;margin-bottom:2rem}nav.svelte-pl68nw section a.svelte-pl68nw{text-decoration:underline;font-size:var(--fz-md);color:var(--theme-colors-text-contrast)}nav.svelte-pl68nw button.svelte-pl68nw{position:absolute;top:0;right:0;padding:30px;cursor:pointer}nav.svelte-pl68nw button.svelte-pl68nw svg{fill:var(--theme-colors-text-contrast);cursor:pointer}nav.svelte-pl68nw span.svelte-pl68nw{display:flex;flex-direction:row;align-items:center;gap:16px;margin-top:2rem;padding-top:2rem;border-top:1px solid var(--theme-colors-secondary)}nav.svelte-pl68nw span.svelte-pl68nw svg{fill:var(--theme-colors-text-contrast);cursor:pointer}',
	map: null
};
const Sidebar = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let $isSidebarOpen, $$unsubscribe_isSidebarOpen;
	const {
		stackexchange,
		github: github2,
		codepen,
		linkedin
	} = import_config_2fdef3a5.u.socialMedia;
	const { stackoverflow } = stackexchange;
	let isSidebarOpen = (0, import_index_c5a8641a.j)('isSidebarOpen');
	$$unsubscribe_isSidebarOpen = (0, import_index_c5a8641a.a)(
		isSidebarOpen,
		(value) => ($isSidebarOpen = value)
	);
	$$result.css.add(css$g);
	$$unsubscribe_isSidebarOpen();
	return `${
		$isSidebarOpen
			? `<nav class="${'svelte-pl68nw'}"><button class="${'svelte-pl68nw'}">${(0,
			  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
					$$result,
					{ data: import_index_es_1c831e92.c, scale: '1.25' },
					{},
					{}
			  )}</button>

		<section class="${'svelte-pl68nw'}"><a href="${'#work'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-pl68nw'}">Work
			</a>
			<a href="${'#websites'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte-pl68nw'}">Websites
			</a>
			<a href="${'#projects'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-pl68nw'}">Projects
			</a></section>

		${(0, import_index_c5a8641a.v)(BuyMeACoffee, 'BuyMeACoffee').$$render($$result, {}, {}, {})}

		<span class="${'svelte-pl68nw'}"><a${(0, import_index_c5a8641a.b)(
					'href',
					stackoverflow.url,
					0
			  )} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-pl68nw'}">${(0,
			  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
					$$result,
					{ data: faStackOverflow, scale: '1.25' },
					{},
					{}
			  )}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				stackexchange.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-pl68nw'}">${(0,
			  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
					$$result,
					{ data: faStackExchange, scale: '1.25' },
					{},
					{}
			  )}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				github2.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-pl68nw'}">${(0,
			  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
					$$result,
					{ data: faGithub, scale: '1.25' },
					{},
					{}
			  )}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				codepen.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-pl68nw'}">${(0,
			  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
					$$result,
					{ data: faCodepen, scale: '1.25' },
					{},
					{}
			  )}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				linkedin.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-pl68nw'}">${(0,
			  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
					$$result,
					{ data: faLinkedin, scale: '1.25' },
					{},
					{}
			  )}</a></span></nav>`
			: ``
	}`;
});
const placeholderClass = 'svelte-lazy-placeholder';
const Placeholder = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { placeholder = null } = $$props;
	let { placeholderProps = null } = $$props;
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
		$$bindings.placeholder(placeholder);
	if (
		$$props.placeholderProps === void 0 &&
		$$bindings.placeholderProps &&
		placeholderProps !== void 0
	)
		$$bindings.placeholderProps(placeholderProps);
	return `${
		placeholder
			? `<div${(0, import_index_c5a8641a.b)('class', placeholderClass, 0)}>${
					typeof placeholder === 'string'
						? `<div>${(0, import_index_c5a8641a.e)(placeholder)}</div>`
						: `${
								['function', 'object'].includes(typeof placeholder)
									? `${(0, import_index_c5a8641a.v)(
											placeholder || import_index_c5a8641a.m,
											'svelte:component'
									  ).$$render($$result, Object.assign(placeholderProps), {}, {})}`
									: ``
						  }`
			  }</div>`
			: ``
	}`;
});
const Src = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { height = 0 } = $$props;
	let { offset = 150 } = $$props;
	let { fadeOption = { delay: 0, duration: 400 } } = $$props;
	let { resetHeightDelay = 0 } = $$props;
	let { onload = null } = $$props;
	let { placeholder = null } = $$props;
	let { placeholderProps = null } = $$props;
	let { class: className = '' } = $$props;
	const rootClass = 'svelte-lazy' + (className ? ' ' + className : '');
	const rootInitialHeight = getStyleHeight();
	function getStyleHeight() {
		return typeof height === 'number' ? height + 'px' : height;
	}
	if ($$props.height === void 0 && $$bindings.height && height !== void 0)
		$$bindings.height(height);
	if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
		$$bindings.offset(offset);
	if ($$props.fadeOption === void 0 && $$bindings.fadeOption && fadeOption !== void 0)
		$$bindings.fadeOption(fadeOption);
	if (
		$$props.resetHeightDelay === void 0 &&
		$$bindings.resetHeightDelay &&
		resetHeightDelay !== void 0
	)
		$$bindings.resetHeightDelay(resetHeightDelay);
	if ($$props.onload === void 0 && $$bindings.onload && onload !== void 0)
		$$bindings.onload(onload);
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
		$$bindings.placeholder(placeholder);
	if (
		$$props.placeholderProps === void 0 &&
		$$bindings.placeholderProps &&
		placeholderProps !== void 0
	)
		$$bindings.placeholderProps(placeholderProps);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `<div${(0, import_index_c5a8641a.b)('class', rootClass, 0)} style="${
		'height: ' + (0, import_index_c5a8641a.e)(rootInitialHeight, true)
	}">${`${
		placeholder
			? `${(0, import_index_c5a8641a.v)(Placeholder, 'Placeholder').$$render(
					$$result,
					{ placeholder, placeholderProps },
					{},
					{}
			  )}`
			: ``
	}`}
</div>`;
});
const Button_svelte_svelte_type_style_lang = '';
const css$f = {
	code: 'a.svelte-hrq2gl.svelte-hrq2gl{display:inherit;padding:8px 16px;width:fit-content;text-decoration:none;border-radius:3px}a.svelte-hrq2gl span.svelte-hrq2gl{display:flex;gap:10px;font-size:var(--fz-xs);line-height:1.5}',
	map: null
};
const Button = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { url } = $$props;
	let { icon } = $$props;
	let { text } = $$props;
	let { contrast = false } = $$props;
	let { fitWidth = false } = $$props;
	if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
	if ($$props.contrast === void 0 && $$bindings.contrast && contrast !== void 0)
		$$bindings.contrast(contrast);
	if ($$props.fitWidth === void 0 && $$bindings.fitWidth && fitWidth !== void 0)
		$$bindings.fitWidth(fitWidth);
	$$result.css.add(css$f);
	return `<a${(0, import_index_c5a8641a.b)(
		'href',
		url,
		0
	)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}"${(0,
	import_index_c5a8641a.b)(
		'style',
		`
		${fitWidth ? `width: initial;` : ''}
		color: ${contrast ? 'var(--theme-colors-text)' : 'var(--theme-colors-text-contrast)'};
		background-color: ${
			contrast ? 'var(--theme-colors-background)' : 'var(--theme-colors-background-contrast)'
		};
	`,
		0
	)} class="${'svelte-hrq2gl'}"><span class="${'svelte-hrq2gl'}">${(0, import_index_c5a8641a.v)(
		import_index_es_1c831e92.I,
		'Icon'
	).$$render(
		$$result,
		{
			data: icon,
			style: `fill: ${
				contrast ? 'var(--theme-colors-text)' : 'var(--theme-colors-text-contrast)'
			};`,
			scale: '1.25'
		},
		{},
		{}
	)}
		${(0, import_index_c5a8641a.e)(text)}</span>
</a>`;
});
const Hero_svelte_svelte_type_style_lang = '';
const css$e = {
	code: 'section.svelte-sfyats.svelte-sfyats{margin-top:2.5rem;margin-bottom:1rem}@media screen and (max-width: 430px){section.svelte-sfyats.svelte-sfyats{margin-left:1rem}}section.svelte-sfyats img.svelte-sfyats{width:650px}@media screen and (max-width: 430px){section.svelte-sfyats img.svelte-sfyats{width:95%}}section.svelte-sfyats p.svelte-sfyats{margin:5px 0 1.5rem 0;font-size:var(--fz-lg);width:60%}@media screen and (max-width: 430px){section.svelte-sfyats p.svelte-sfyats{width:100%}}section.svelte-sfyats p a.svelte-sfyats{text-decoration:underline}section.svelte-sfyats aside.svelte-sfyats{width:300px}section.svelte-sfyats aside span.svelte-sfyats{display:block;margin-top:10px;font-size:var(--fz-xs);font-weight:100;line-height:1.5}',
	map: null
};
const Hero = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	const { email } = import_config_2fdef3a5.u;
	$$result.css.add(css$e);
	return `<section class="${'svelte-sfyats'}">${(0, import_index_c5a8641a.v)(Src, 'Lazy').$$render(
		$$result,
		{ height: 650 },
		{},
		{
			default: () => {
				return `<img src="${'/hero.png'}" alt="${'hero-image'}" class="${'svelte-sfyats'}">`;
			}
		}
	)}

	<p class="${'svelte-sfyats'}">I\u2019m Nick \u2014 a full-stack software engineer and graduate student at${(0,
	import_index_c5a8641a.e)(' ')}
		<a href="${'https://www.cc.gatech.edu/'}" target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link gatech svelte-sfyats'}">Georgia Tech
		</a>
		focused on building accessible, human-centered financial products at
		<a href="${'https://ibm.com/'}" target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link ibm svelte-sfyats'}">IBM</a>.
	</p>

	<aside class="${'svelte-sfyats'}">${(0, import_index_c5a8641a.v)(Button, 'Button').$$render(
		$$result,
		{
			url: `mailto:${email}?subject=Hello`,
			icon: import_index_es_1c831e92.d,
			text: 'Get In Touch'
		},
		{},
		{}
	)}
		<span class="${'svelte-sfyats'}">Whether you have a question or just want to say hi, I will try my best to get back to you!
		</span></aside>
</section>`;
});
const Header_svelte_svelte_type_style_lang = '';
const css$d = {
	code: 'header.svelte-1ofdg3b.svelte-1ofdg3b{display:flex;flex-direction:column;gap:10px;margin-top:20px}@media screen and (max-width: 430px){header.svelte-1ofdg3b.svelte-1ofdg3b{margin-left:1rem}}header.svelte-1ofdg3b h2.svelte-1ofdg3b{margin:0;font-size:var(--fz-lg);font-weight:400}header.svelte-1ofdg3b span.svelte-1ofdg3b{font-size:var(--fz-md)}@media screen and (max-width: 430px){header.svelte-1ofdg3b span.svelte-1ofdg3b{width:95%}}',
	map: null
};
const Header = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { title } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	$$result.css.add(css$d);
	return `<header${(0, import_index_c5a8641a.b)(
		'id',
		$$props.id,
		0
	)} class="${'svelte-1ofdg3b'}"><h2 class="${'svelte-1ofdg3b'}">${(0, import_index_c5a8641a.e)(
		title
	)}</h2>

	<span class="${'svelte-1ofdg3b'}">${slots.default ? slots.default({}) : ``}</span>
</header>`;
});
const Experience_svelte_svelte_type_style_lang = '';
const css$c = {
	code: 'div.svelte-yqhzzv.svelte-yqhzzv{position:relative;margin:30px 0;width:60%}@media screen and (max-width: 430px){div.svelte-yqhzzv.svelte-yqhzzv{margin-left:1rem;width:95%}}div.svelte-yqhzzv img.svelte-yqhzzv{position:absolute;top:5px;left:-70px;width:60px;height:60px;border-radius:3px}@media screen and (max-width: 1024px){div.svelte-yqhzzv img.svelte-yqhzzv{position:static}}div.svelte-yqhzzv strong.svelte-yqhzzv,div.svelte-yqhzzv aside.svelte-yqhzzv,div.svelte-yqhzzv p.svelte-yqhzzv{font-size:var(--fz-md)}div.svelte-yqhzzv aside.svelte-yqhzzv,div.svelte-yqhzzv p.svelte-yqhzzv{margin-top:5px}div.svelte-yqhzzv aside.svelte-yqhzzv{margin-top:5px;font-weight:100}div.svelte-yqhzzv p.svelte-yqhzzv{font-weight:400}@media screen and (max-width: 430px){div.svelte-yqhzzv p.svelte-yqhzzv{width:95%}}',
	map: null
};
const Experience = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { image } = $$props;
	let { company } = $$props;
	let { title } = $$props;
	let { duration } = $$props;
	let { location } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.company === void 0 && $$bindings.company && company !== void 0)
		$$bindings.company(company);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
		$$bindings.duration(duration);
	if ($$props.location === void 0 && $$bindings.location && location !== void 0)
		$$bindings.location(location);
	$$result.css.add(css$c);
	return `<div class="${'svelte-yqhzzv'}">${(0, import_index_c5a8641a.v)(Src, 'Lazy').$$render(
		$$result,
		{ height: 50 },
		{},
		{
			default: () => {
				return `<img${(0, import_index_c5a8641a.b)('src', `/logos/${image}`, 0)}${(0,
				import_index_c5a8641a.b)('alt', company, 0)} class="${'svelte-yqhzzv'}">`;
			}
		}
	)}

	<span><strong class="${'svelte-yqhzzv'}">${(0, import_index_c5a8641a.e)(company)}</strong>
		<p class="${'svelte-yqhzzv'}">${(0, import_index_c5a8641a.e)(title)}</p>
		<aside class="${'svelte-yqhzzv'}">${(0, import_index_c5a8641a.e)(duration)}</aside>
		<aside class="${'svelte-yqhzzv'}">${(0, import_index_c5a8641a.e)(location)}</aside>
		<p class="${'svelte-yqhzzv'}">${slots.default ? slots.default({}) : ``} </p></span>
</div>`;
});
const Work = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	const { experiences } = import_config_2fdef3a5.u;
	const { linkedin } = import_config_2fdef3a5.u.socialMedia;
	return `<section id="${'work'}">${(0, import_index_c5a8641a.v)(Header, 'Header').$$render(
		$$result,
		{ title: 'Work Experience' },
		{},
		{
			default: () => {
				return `<span>Please connect with me on
			<a${(0, import_index_c5a8641a.b)(
				'href',
				linkedin.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link'}"${(0,
				import_index_c5a8641a.b)(
					'style',
					`
					color: var(--linkedin);
				`,
					0
				)}>LinkedIn</a>.
		</span>`;
			}
		}
	)}

	${(0, import_index_c5a8641a.i)(experiences, (experience) => {
		return `${(0, import_index_c5a8641a.v)(Experience, 'Experience').$$render(
			$$result,
			{
				image: experience.image,
				company: experience.company,
				title: experience.title,
				duration: experience.duration,
				location: experience.location
			},
			{},
			{
				default: () => {
					return `${(0, import_index_c5a8641a.e)(experience.description)}
		`;
				}
			}
		)}`;
	})}</section>`;
});
const Browser_svelte_svelte_type_style_lang = '';
const css$b = {
	code: 'div.svelte-1lfajzo.svelte-1lfajzo{position:relative;width:98%;min-height:50px;border:0px solid var(--black);border-width:20px 0 0 0;border-radius:3px 3px 6px 6px;box-shadow:1px 1px 20px -5px rgba(var(--black), 0.5)}div.svelte-1lfajzo.svelte-1lfajzo::before,div.svelte-1lfajzo.svelte-1lfajzo::after{content:"";position:absolute;top:-15px;left:8px;width:9px;height:9px;z-index:10;background:var(--red);border-radius:50%}div.svelte-1lfajzo.svelte-1lfajzo::after{left:24px;background:var(--green)}div.svelte-1lfajzo img.svelte-1lfajzo{max-width:100%;border-radius:0 0 6px 6px}',
	map: null
};
const Browser = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { image } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	$$result.css.add(css$b);
	return `<div class="${'svelte-1lfajzo'}"><img${(0, import_index_c5a8641a.b)(
		'src',
		image,
		0
	)} alt="${'web-browser'}" class="${'svelte-1lfajzo'}">
</div>`;
});
const Mobile_svelte_svelte_type_style_lang = '';
const css$a = {
	code: 'div.svelte-193j5u2.svelte-193j5u2{position:absolute;right:0;top:26px;width:33%;min-height:50px;border:2px solid var(--black);border-width:5px 5px 5px 5px;border-radius:10px;box-shadow:1px 1px 20px -5px rgba(var(--black), 0.5)}@media screen and (max-width: 430px){div.svelte-193j5u2.svelte-193j5u2{width:30%}}div.svelte-193j5u2.svelte-193j5u2::before{content:"";position:absolute;bottom:2px;left:calc(50% - 16px);width:32px;height:2px;background:var(--black);border-radius:5px}div.svelte-193j5u2.svelte-193j5u2::after{content:"";position:absolute;top:-1px;left:calc(50% - 20px);width:40px;height:10px;background:var(--black);border-bottom-left-radius:5px;border-bottom-right-radius:5px}div.svelte-193j5u2 img.svelte-193j5u2{max-width:100%;border-radius:4px}',
	map: null
};
const Mobile = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { image } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	$$result.css.add(css$a);
	return `<div class="${'svelte-193j5u2'}"><img${(0, import_index_c5a8641a.b)(
		'src',
		image,
		0
	)} alt="${'mobile-device'}" class="${'svelte-193j5u2'}">
</div>`;
});
const Website_svelte_svelte_type_style_lang = '';
const css$9 = {
	code: 'div.svelte-jy0v1x.svelte-jy0v1x{display:-webkit-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-flex:1;display:flex;flex-direction:column;flex:1 1 33%;position:relative;width:33%;max-width:33%;margin-top:0;margin-bottom:50px}@media screen and (max-width: 430px){div.svelte-jy0v1x.svelte-jy0v1x{-webkit-box-flex:1;flex:1 1 100%;width:100%;max-width:100%;margin-bottom:50px}}div.svelte-jy0v1x a.svelte-jy0v1x{display:block;position:relative;margin:0 20px;text-decoration:none;color:black}div.svelte-jy0v1x a.svelte-jy0v1x:hover{cursor:pointer}div.svelte-jy0v1x h3.svelte-jy0v1x{position:absolute;top:0;left:60px;padding:0;margin:0;color:var(--white);line-height:20px;font-size:0.7em}',
	map: null
};
const Website = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { title = '' } = $$props;
	let { link = '#' } = $$props;
	let { desktop = void 0 } = $$props;
	let { mobile = void 0 } = $$props;
	let { noMobile = false } = $$props;
	let { noFetchImage = false } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
	if ($$props.desktop === void 0 && $$bindings.desktop && desktop !== void 0)
		$$bindings.desktop(desktop);
	if ($$props.mobile === void 0 && $$bindings.mobile && mobile !== void 0)
		$$bindings.mobile(mobile);
	if ($$props.noMobile === void 0 && $$bindings.noMobile && noMobile !== void 0)
		$$bindings.noMobile(noMobile);
	if ($$props.noFetchImage === void 0 && $$bindings.noFetchImage && noFetchImage !== void 0)
		$$bindings.noFetchImage(noFetchImage);
	$$result.css.add(css$9);
	return `<div class="${'svelte-jy0v1x'}"><a${(0, import_index_c5a8641a.b)(
		'href',
		link,
		0
	)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-jy0v1x'}">${(0,
	import_index_c5a8641a.v)(Browser, 'Browser').$$render($$result, { image: desktop }, {}, {})}

		${
			!noMobile
				? `${(0, import_index_c5a8641a.v)(Mobile, 'Mobile').$$render(
						$$result,
						{ image: mobile },
						{},
						{}
				  )}`
				: ``
		}</a>

	<h3 class="${'svelte-jy0v1x'}">${(0, import_index_c5a8641a.e)(title)}</h3>
</div>`;
});
const Websites_svelte_svelte_type_style_lang = '';
const css$8 = {
	code: 'div.svelte-fdlk3x{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;display:flex;flex-wrap:wrap;align-items:start;justify-content:start;max-width:900px;margin-top:30px;margin-left:-20px}@media screen and (max-width: 430px){div.svelte-fdlk3x{align-items:center;justify-content:center;margin-left:0;margin-bottom:0;margin-top:30px}}',
	map: null
};
const Websites = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$8);
	return `<section id="${'websites'}">${(0, import_index_c5a8641a.v)(Header, 'Header').$$render(
		$$result,
		{ title: 'Slices of the Internet' },
		{},
		{
			default: () => {
				return `Corners of the internet I&#39;ve handcrafted and built myself.
	`;
			}
		}
	)}
	<div class="${'svelte-fdlk3x'}">${(0, import_index_c5a8641a.v)(Website, 'Website').$$render(
		$$result,
		{
			title: 'Vineyard Vines Sales',
			link: 'https://vineyard-vines-sales.netlify.app/',
			desktop: 'websites/vineyard-vines-sales-desktop.png',
			noFetchImage: true,
			noMobile: true
		},
		{},
		{}
	)}
		${(0, import_index_c5a8641a.v)(Website, 'Website').$$render(
			$$result,
			{
				title: 'WiFi Card',
				link: 'https://wifi-card.netlify.app',
				desktop: 'websites/wifi-card-desktop.png',
				noFetchImage: true,
				noMobile: true
			},
			{},
			{}
		)}</div>
	<div style="${'margin-top: 0'}" class="${'svelte-fdlk3x'}">${(0, import_index_c5a8641a.v)(
		Website,
		'Website'
	).$$render(
		$$result,
		{
			title: 'Personal Portfolio',
			link: 'https://nicholasadamou.com/',
			desktop: 'websites/nicholas-adamou-desktop.png',
			mobile: 'websites/nicholas-adamou-mobile.png',
			noFetchImage: true
		},
		{},
		{}
	)}</div>
</section>`;
});
const variables = {
	GITHUB_TOKEN: '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',
	GOOGLE_TRACKING_ID: 'UA-102001064-1'
};
const round = (num) => (num > 999 ? `${(num / 1e3).toFixed(1)}k` : num);
const github = (URL) =>
	fetch(URL, {
		headers: {
			Authorization: `Bearer ${variables.GITHUB_TOKEN}`
		}
	}).then((response) => response.json());
const fetchRepository = async (user, repositoryName) => {
	const repository = await github(`https://api.github.com/repos/${user}/${repositoryName}`);
	const latestCommit = await github(
		`https://api.github.com/repos/${user}/${repositoryName}/branches/master`
	);
	const languages2 = await github(
		`https://api.github.com/repos/${user}/${repositoryName}/languages`
	);
	const { name, description, html_url, stargazers_count, forks_count, updated_at, language } =
		repository;
	const { commit } = latestCommit;
	return {
		name: name.toLowerCase(),
		description,
		html_url,
		stargazers_count,
		forks_count,
		updated_at,
		language: language.toLowerCase(),
		languages: languages2,
		commit
	};
};
const Circle_svelte_svelte_type_style_lang = '';
const css$7 = {
	code: '.circle.svelte-14upwad{height:var(--size);width:var(--size);border-color:var(--color) transparent var(--color) var(--color);border-width:calc(var(--size) / 15);border-style:solid;border-image:initial;border-radius:50%;animation:var(--duration) linear 0s infinite normal none running svelte-14upwad-rotate}@keyframes svelte-14upwad-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}',
	map: null
};
const Circle = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { color = '#FF3E00' } = $$props;
	let { unit = 'px' } = $$props;
	let { duration = '0.75s' } = $$props;
	let { size = '60' } = $$props;
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0) $$bindings.unit(unit);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
		$$bindings.duration(duration);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	$$result.css.add(css$7);
	return `<div class="${'circle svelte-14upwad'}" style="${
		'--size: ' +
		(0, import_index_c5a8641a.e)(size, true) +
		(0, import_index_c5a8641a.e)(unit, true) +
		'; --color: ' +
		(0, import_index_c5a8641a.e)(color, true) +
		'; --duration: ' +
		(0, import_index_c5a8641a.e)(duration, true)
	}"></div>`;
});
const Circle2_svelte_svelte_type_style_lang = '';
const Circle3_svelte_svelte_type_style_lang = '';
const calculateRgba = (color, opacity) => {
	if (color[0] === '#') {
		color = color.slice(1);
	}
	if (color.length === 3) {
		let res = '';
		color.split('').forEach((c) => {
			res += c;
			res += c;
		});
		color = res;
	}
	const rgbValues = (color.match(/.{2}/g) || []).map((hex) => parseInt(hex, 16)).join(', ');
	return `rgba(${rgbValues}, ${opacity})`;
};
const range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
const DoubleBounce_svelte_svelte_type_style_lang = '';
const GoogleSpin_svelte_svelte_type_style_lang = '';
const ScaleOut_svelte_svelte_type_style_lang = '';
const SpinLine_svelte_svelte_type_style_lang = '';
const Stretch_svelte_svelte_type_style_lang = '';
const BarLoader_svelte_svelte_type_style_lang = '';
const css$6 = {
	code: '.wrapper.svelte-vhcw6{height:calc(var(--size) / 15);width:calc(var(--size) * 2);background-color:var(--rgba);position:relative;overflow:hidden;background-clip:padding-box}.lines.svelte-vhcw6{height:calc(var(--size) / 15);background-color:var(--color)}.small-lines.svelte-vhcw6{position:absolute;overflow:hidden;background-clip:padding-box;display:block;border-radius:2px;will-change:left, right;animation-fill-mode:forwards}.small-lines.\\31 .svelte-vhcw6{animation:var(--duration) cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s\r\n      infinite normal none running svelte-vhcw6-long}.small-lines.\\32 .svelte-vhcw6{animation:var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1)\r\n      calc((var(--duration)+0.1) / 2) infinite normal none running svelte-vhcw6-short}@keyframes svelte-vhcw6-long{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes svelte-vhcw6-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}',
	map: null
};
const BarLoader = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { color = '#FF3E00' } = $$props;
	let { unit = 'px' } = $$props;
	let { duration = '2.1s' } = $$props;
	let { size = '60' } = $$props;
	let rgba;
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0) $$bindings.unit(unit);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
		$$bindings.duration(duration);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	$$result.css.add(css$6);
	rgba = calculateRgba(color, 0.2);
	return `<div class="${'wrapper svelte-vhcw6'}" style="${
		'--size: ' +
		(0, import_index_c5a8641a.e)(size, true) +
		(0, import_index_c5a8641a.e)(unit, true) +
		'; --rgba:' +
		(0, import_index_c5a8641a.e)(rgba, true)
	}">${(0, import_index_c5a8641a.i)(range(2, 1), (version) => {
		return `<div class="${
			'lines small-lines ' + (0, import_index_c5a8641a.e)(version, true) + ' svelte-vhcw6'
		}" style="${
			'--color: ' +
			(0, import_index_c5a8641a.e)(color, true) +
			'; --duration: ' +
			(0, import_index_c5a8641a.e)(duration, true) +
			';'
		}"></div>`;
	})}</div>`;
});
const Jumper_svelte_svelte_type_style_lang = '';
const RingLoader_svelte_svelte_type_style_lang = '';
const SyncLoader_svelte_svelte_type_style_lang = '';
const Rainbow_svelte_svelte_type_style_lang = '';
const Wave_svelte_svelte_type_style_lang = '';
const Firework_svelte_svelte_type_style_lang = '';
const Pulse_svelte_svelte_type_style_lang = '';
const Jellyfish_svelte_svelte_type_style_lang = '';
const Chasing_svelte_svelte_type_style_lang = '';
const Shadow_svelte_svelte_type_style_lang = '';
const Square_svelte_svelte_type_style_lang = '';
const Moon_svelte_svelte_type_style_lang = '';
const Plane_svelte_svelte_type_style_lang = '';
const Diamonds_svelte_svelte_type_style_lang = '';
const Clock_svelte_svelte_type_style_lang = '';
const Skeleton_svelte_svelte_type_style_lang = '';
const css$5 = {
	code: "article.svelte-9bxf2y.svelte-9bxf2y{margin:10px 10px 10px 0;font-size:var(--fz-md)}article.svelte-9bxf2y a.svelte-9bxf2y{text-decoration:none}article.svelte-9bxf2y div.svelte-9bxf2y{display:flex;flex-direction:row;align-items:center;gap:8px;margin-bottom:10px}article.svelte-9bxf2y div span[aria-label='git'].svelte-9bxf2y{display:flex;align-items:center;gap:10px}article.svelte-9bxf2y div span[aria-label='git'].svelte-9bxf2y svg{color:var(--theme-colors-text)}article.svelte-9bxf2y div a.svelte-9bxf2y{text-decoration:none;transition:color 0.25ms ease-in-out}article.svelte-9bxf2y div a.svelte-9bxf2y:hover{color:var(--light-grey)}article.svelte-9bxf2y div a span.svelte-9bxf2y{padding:5px;border-radius:5px;background-color:var(--theme-colors-background-contrast)}article.svelte-9bxf2y div a span[role='img'].svelte-9bxf2y{display:flex;flex-direction:row;align-items:center;gap:5px;line-height:1}article.svelte-9bxf2y div a span[aria-label='star'].svelte-9bxf2y,article.svelte-9bxf2y div a span[aria-label='branch'].svelte-9bxf2y{font-weight:normal;color:var(--theme-colors-text-contrast)}article.svelte-9bxf2y div a span[aria-label='star'].svelte-9bxf2y svg,article.svelte-9bxf2y div a span[aria-label='branch'].svelte-9bxf2y svg{margin-bottom:3px;color:var(--theme-colors-text-contrast)}article.svelte-9bxf2y div a span[aria-label='language'] div.svelte-9bxf2y{margin-left:10px}",
	map: null
};
const Skeleton = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$5);
	return `<article class="${'repository svelte-9bxf2y'}"><div class="${'svelte-9bxf2y'}"><span role="${'img'}" aria-label="${'git'}" class="${'svelte-9bxf2y'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faGitAlt, scale: '1.25' },
		{},
		{}
	)}
			${(0, import_index_c5a8641a.v)(Circle, 'Circle').$$render(
				$$result,
				{
					color: 'var(--theme-colors-text)',
					size: '10'
				},
				{},
				{}
			)}</span>

		<a href="${'#'}" target="${'_blank'}" aria-hidden="${'true'}" aria-label="${'github stargazers_count'}" title="${'star'}" rel="${'noopener noreferrer'}" class="${'svelte-9bxf2y'}"><span role="${'img'}" aria-label="${'star'}" class="${'svelte-9bxf2y'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: import_index_es_1c831e92.e, scale: '1.25' },
		{},
		{}
	)}
				${(0, import_index_c5a8641a.v)(Circle, 'Circle').$$render(
					$$result,
					{
						color: 'var(--theme-colors-text-contrast)',
						size: '10'
					},
					{},
					{}
				)}</span></a>

		<a href="${'#'}" target="${'_blank'}" aria-hidden="${'true'}" aria-label="${'fork on github'}" title="${'fork'}" rel="${'noopener noreferrer'}" class="${'svelte-9bxf2y'}"><span role="${'img'}" aria-label="${'branch'}" class="${'svelte-9bxf2y'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: import_index_es_1c831e92.g, scale: '1.25' },
		{},
		{}
	)}
				${(0, import_index_c5a8641a.v)(Circle, 'Circle').$$render(
					$$result,
					{
						color: 'var(--theme-colors-text-contrast)',
						size: '10'
					},
					{},
					{}
				)}</span></a>

		<span role="${'img'}" aria-label="${'language'}" class="${'svelte-9bxf2y'}">${(0,
	import_index_c5a8641a.v)(Circle, 'Circle').$$render(
		$$result,
		{
			color: 'var(--theme-colors-text)',
			size: '10'
		},
		{},
		{}
	)}</span></div>

	${(0, import_index_c5a8641a.v)(BarLoader, 'BarLoader').$$render(
		$$result,
		{ color: 'var(--theme-colors-text)' },
		{},
		{}
	)}
</article>`;
});
const languages = {
	javascript: {
		icon: faJsSquare,
		text: 'JavaScript'
	},
	typescript: {
		icon: faJsSquare,
		text: 'TypeScript'
	},
	react: {
		icon: faReact,
		text: 'React'
	},
	angular: {
		icon: faAngular,
		text: 'Angular'
	},
	node: {
		icon: faNode,
		text: 'Node'
	},
	gulp: {
		icon: faGulp,
		text: 'Gulp'
	},
	python: {
		icon: faPython,
		text: 'Python'
	},
	c: {
		icon: import_index_es_1c831e92.h,
		text: 'C'
	},
	'c#': {
		icon: import_index_es_1c831e92.h,
		text: 'C#'
	},
	html: {
		icon: faHtml5,
		text: 'HTML'
	},
	css: {
		icon: faCss3Alt,
		text: 'CSS'
	},
	shell: {
		icon: import_index_es_1c831e92.h,
		text: 'Shell'
	},
	java: {
		icon: faJava,
		text: 'Java'
	}
};
const LanguageTag_svelte_svelte_type_style_lang = '';
const css$4 = {
	code: 'span.svelte-1qgxpmi.svelte-1qgxpmi{display:flex;align-items:center;gap:5px;padding:5px;margin-left:-5px;color:var(--theme-colors-text)}span.svelte-1qgxpmi svg{color:var(--theme-colors-text)}span.svelte-1qgxpmi aside.svelte-1qgxpmi{font-size:var(--fz-sm)}',
	map: null
};
const LanguageTag = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { language } = $$props;
	if ($$props.language === void 0 && $$bindings.language && language !== void 0)
		$$bindings.language(language);
	$$result.css.add(css$4);
	return `<span class="${'svelte-1qgxpmi'}">${(0, import_index_c5a8641a.v)(
		import_index_es_1c831e92.I,
		'Icon'
	).$$render(
		$$result,
		{
			data: languages[language].icon,
			scale: '1.25'
		},
		{},
		{}
	)}
	<aside class="${'svelte-1qgxpmi'}">${(0, import_index_c5a8641a.e)(languages[language].text)}</aside>
</span>`;
});
const Repository_svelte_svelte_type_style_lang = '';
const css$3 = {
	code: "article.svelte-9bxf2y.svelte-9bxf2y{margin:10px 10px 10px 0;font-size:var(--fz-md)}article.svelte-9bxf2y a.svelte-9bxf2y{text-decoration:none}article.svelte-9bxf2y div.svelte-9bxf2y{display:flex;flex-direction:row;align-items:center;gap:8px;margin-bottom:10px}article.svelte-9bxf2y div span[aria-label='git'].svelte-9bxf2y{display:flex;align-items:center;gap:10px}article.svelte-9bxf2y div span[aria-label='git'].svelte-9bxf2y svg{color:var(--theme-colors-text)}article.svelte-9bxf2y div a.svelte-9bxf2y{text-decoration:none;transition:color 0.25ms ease-in-out}article.svelte-9bxf2y div a.svelte-9bxf2y:hover{color:var(--light-grey)}article.svelte-9bxf2y div a span.svelte-9bxf2y{padding:5px;border-radius:5px;background-color:var(--theme-colors-background-contrast)}article.svelte-9bxf2y div a span[role='img'].svelte-9bxf2y{display:flex;flex-direction:row;align-items:center;gap:5px;line-height:1}article.svelte-9bxf2y div a span[aria-label='title'].svelte-9bxf2y{color:var(--theme-colors-text-contrast);text-decoration:underline}article.svelte-9bxf2y div a span[aria-label='title'].svelte-9bxf2y:hover{color:var(--light-grey)}article.svelte-9bxf2y div a span[aria-label='star'].svelte-9bxf2y,article.svelte-9bxf2y div a span[aria-label='branch'].svelte-9bxf2y{font-weight:normal;color:var(--theme-colors-text-contrast)}article.svelte-9bxf2y div a span[aria-label='star'].svelte-9bxf2y svg,article.svelte-9bxf2y div a span[aria-label='branch'].svelte-9bxf2y svg{margin-bottom:3px;color:var(--theme-colors-text-contrast)}article.svelte-9bxf2y div a span[aria-label='language'] div.svelte-9bxf2y{margin-left:10px}article.svelte-9bxf2y p.svelte-9bxf2y{color:var(--theme-colors-text)}",
	map: null
};
const Repository = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let $repository, $$unsubscribe_repository;
	const { github: github2 } = import_config_2fdef3a5.u.socialMedia;
	let { user = github2.username } = $$props;
	let { repositoryName } = $$props;
	let { language } = $$props;
	let { demoURL = void 0 } = $$props;
	const repository = useQuery(`${user}/${repositoryName}`, () =>
		fetchRepository(user, repositoryName)
	);
	$$unsubscribe_repository = (0, import_index_c5a8641a.a)(
		repository,
		(value) => ($repository = value)
	);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
	if ($$props.repositoryName === void 0 && $$bindings.repositoryName && repositoryName !== void 0)
		$$bindings.repositoryName(repositoryName);
	if ($$props.language === void 0 && $$bindings.language && language !== void 0)
		$$bindings.language(language);
	if ($$props.demoURL === void 0 && $$bindings.demoURL && demoURL !== void 0)
		$$bindings.demoURL(demoURL);
	$$result.css.add(css$3);
	$$unsubscribe_repository();
	return `${
		$repository.isLoading
			? `${(0, import_index_c5a8641a.v)(Skeleton, 'Skeleton').$$render($$result, {}, {}, {})}`
			: `
	<article class="${'repository svelte-9bxf2y'}"><div class="${'svelte-9bxf2y'}"><span role="${'img'}" aria-label="${'git'}" class="${'svelte-9bxf2y'}">${(0,
			  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
					$$result,
					{ data: faGitAlt, scale: '1.2' },
					{},
					{}
			  )}</span>

			<a${(0, import_index_c5a8641a.b)(
				'href',
				$repository.data.html_url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-9bxf2y'}"><span aria-label="${'title'}" class="${'svelte-9bxf2y'}">${(0,
			  import_index_c5a8641a.e)($repository.data.name)}</span></a>

			${
				demoURL !== void 0
					? `<a${(0, import_index_c5a8641a.b)(
							'href',
							demoURL,
							0
					  )} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-9bxf2y'}"><span aria-label="${'title'}" class="${'svelte-9bxf2y'}">demo
					</span></a>`
					: ``
			}

			${
				$repository.data.stargazers_count > 0
					? `<a${(0, import_index_c5a8641a.b)(
							'href',
							`${$repository.data.html_url}/stargazers`,
							0
					  )} target="${'_blank'}" aria-hidden="${'true'}" aria-label="${'github stargazers_count'}" title="${'star'}" rel="${'noopener noreferrer'}" class="${'svelte-9bxf2y'}"><span role="${'img'}" aria-label="${'star'}" class="${'svelte-9bxf2y'}">${(0,
					  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
							$$result,
							{ data: import_index_es_1c831e92.e, scale: '1.2' },
							{},
							{}
					  )}
						${(0, import_index_c5a8641a.e)(' ')}
						${(0, import_index_c5a8641a.e)(round($repository.data.stargazers_count))}</span></a>`
					: ``
			}

			${
				$repository.data.forks_count > 0
					? `<a${(0, import_index_c5a8641a.b)(
							'href',
							`${$repository.data.html_url}/fork`,
							0
					  )} target="${'_blank'}" aria-hidden="${'true'}" aria-label="${'fork on github'}" title="${'fork'}" rel="${'noopener noreferrer'}" class="${'svelte-9bxf2y'}"><span role="${'img'}" aria-label="${'branch'}" class="${'svelte-9bxf2y'}">${(0,
					  import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
							$$result,
							{ data: import_index_es_1c831e92.g, scale: '1.2' },
							{},
							{}
					  )}
						${(0, import_index_c5a8641a.e)(' ')}
						${(0, import_index_c5a8641a.e)(round($repository.data.forks_count))}</span></a>`
					: ``
			}

			<span role="${'img'}" aria-label="${'language'}" class="${'svelte-9bxf2y'}">${(0,
			  import_index_c5a8641a.v)(LanguageTag, 'LanguageTag').$$render(
					$$result,
					{
						language: language !== void 0 ? language : $repository.data.language
					},
					{},
					{}
			  )}</span></div>

		<p class="${'svelte-9bxf2y'}">${(0, import_index_c5a8641a.e)(
					$repository.data.description
			  )}</p></article>`
	}`;
});
const Projects_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: '#projects > header{margin-top:40px}@media screen and (max-width: 430px){#projects > header{margin-top:30px}}div.svelte-we2fn8{display:grid;grid-template-columns:repeat(2, 1fr);width:80%;max-width:90%;margin:20px 0 10px}@media screen and (max-width: 430px){div.svelte-we2fn8{grid-template-columns:repeat(1, 1fr);width:100%;max-width:95%;margin-left:1rem}}span.svelte-we2fn8{font-size:var(--fz-md)}@media screen and (max-width: 430px){span.svelte-we2fn8{margin-left:1rem}}',
	map: null
};
const Projects = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	const { projects } = import_config_2fdef3a5.u;
	const { github: github2 } = import_config_2fdef3a5.u.socialMedia;
	$$result.css.add(css$2);
	return `<section id="${'projects'}">${(0, import_index_c5a8641a.v)(Header, 'Header').$$render(
		$$result,
		{ title: "Some Things I've Built" },
		{},
		{
			default: () => {
				return `Various projects that I&#39;ve open sourced in my spare time.
	`;
			}
		}
	)}

	<div class="${'svelte-we2fn8'}">${(0, import_index_c5a8641a.i)(projects, (project) => {
		return `${(0, import_index_c5a8641a.v)(Repository, 'Repository').$$render(
			$$result,
			{
				repositoryName: project.name,
				language: project.language,
				demoURL: project.url || void 0
			},
			{},
			{}
		)}`;
	})}</div>

	<span class="${'svelte-we2fn8'}">More can be found on my
		<a aria-hidden="${'true'}" class="${'github'}"${(0, import_index_c5a8641a.b)(
		'href',
		github2.url,
		0
	)} rel="${'noopener noreferrer'}" target="${'_blank'}">GitHub</a>.
	</span>
</section>`;
});
const Footer_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: 'footer.svelte-1pr1u5s.svelte-1pr1u5s{margin:1rem 0 0;background-color:var(--theme-colors-background-contrast)}footer.svelte-1pr1u5s .svelte-1pr1u5s::selection{background:var(--theme-colors-background);color:var(--theme-colors-text)}footer.svelte-1pr1u5s #buy-me-a-coffee.svelte-1pr1u5s{margin-bottom:-5px}footer.svelte-1pr1u5s div.svelte-1pr1u5s{display:flex;flex-direction:column;gap:10px;width:960px;margin:0 auto;padding:8rem 0}@media screen and (max-width: 430px){footer.svelte-1pr1u5s div.svelte-1pr1u5s{margin-left:1rem;width:100%}}footer.svelte-1pr1u5s div span.svelte-1pr1u5s,footer.svelte-1pr1u5s div p.svelte-1pr1u5s,footer.svelte-1pr1u5s div a.svelte-1pr1u5s{font-size:var(--fz-sm);color:var(--theme-colors-text-contrast);font-weight:100}footer.svelte-1pr1u5s div a.svelte-1pr1u5s{font-weight:300}footer.svelte-1pr1u5s div span.svelte-1pr1u5s,footer.svelte-1pr1u5s div nav.svelte-1pr1u5s{display:flex;flex-direction:row;align-items:center;gap:10px}footer.svelte-1pr1u5s div span.svelte-1pr1u5s{gap:20px}footer.svelte-1pr1u5s div span.svelte-1pr1u5s svg{fill:var(--theme-colors-text-contrast);cursor:pointer;opacity:0.3}footer.svelte-1pr1u5s div p.svelte-1pr1u5s{font-weight:100}',
	map: null
};
const Footer = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	const { title } = import_config_2fdef3a5.u;
	const {
		stackexchange,
		github: github2,
		codepen,
		linkedin
	} = import_config_2fdef3a5.u.socialMedia;
	const { stackoverflow } = stackexchange;
	$$result.css.add(css$1);
	return `<footer class="${'svelte-1pr1u5s'}"><div class="${'svelte-1pr1u5s'}"><span class="${'svelte-1pr1u5s'}"><a${(0,
	import_index_c5a8641a.b)(
		'href',
		stackoverflow.url,
		0
	)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1pr1u5s'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faStackOverflow, scale: '1.2' },
		{},
		{}
	)}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				stackexchange.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1pr1u5s'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faStackExchange, scale: '1.2' },
		{},
		{}
	)}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				github2.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1pr1u5s'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faGithub, scale: '1.2' },
		{},
		{}
	)}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				codepen.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1pr1u5s'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faCodepen, scale: '1.2' },
		{},
		{}
	)}</a>
			<a${(0, import_index_c5a8641a.b)(
				'href',
				linkedin.url,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'svelte-1pr1u5s'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: faLinkedin, scale: '1.2' },
		{},
		{}
	)}</a></span>
		<nav class="${'svelte-1pr1u5s'}"><a href="${'#work'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte-1pr1u5s'}">Work
			</a>
			<a href="${'#websites'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte-1pr1u5s'}">Websites
			</a>
			<a href="${'#projects'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte-1pr1u5s'}">Projects
			</a></nav>

		<span id="${'buy-me-a-coffee'}" class="${'svelte-1pr1u5s'}">${(0, import_index_c5a8641a.v)(
		BuyMeACoffee,
		'BuyMeACoffee'
	).$$render($$result, {}, {}, {})}</span>

		<p class="${'svelte-1pr1u5s'}">Built using${(0, import_index_c5a8641a.e)(' ')}
			<a href="${'https://kit.svelte.dev/'}" target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link svelte svelte-1pr1u5s'}">SvelteKit</a>.
		</p>
		<p class="${'svelte-1pr1u5s'}">Proudly hosted on${(0, import_index_c5a8641a.e)(' ')}
			<a href="${'https://www.netlify.com/'}" target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link netlify svelte-1pr1u5s'}">Netlify</a>.
		</p>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		<p class="${'svelte-1pr1u5s'}">Source code available on${(0, import_index_c5a8641a.e)(' ')}
			<a${(0, import_index_c5a8641a.b)(
				'href',
				`${github2.url}/${import_config_2fdef3a5.u.name}`,
				0
			)} target="${'_blank'}" aria-hidden="${'true'}" rel="${'noopener noreferrer'}" class="${'link github svelte-1pr1u5s'}">GitHub</a>.
		</p>
		<p class="${'svelte-1pr1u5s'}">\xA9 1997 - ${(0, import_index_c5a8641a.e)(
		(0, import_moment.default)(Date.now()).year()
	)} ${(0, import_index_c5a8641a.e)(title)}. All Rights Reserved.</p></div>
</footer>`;
});
const index_svelte_svelte_type_style_lang = '';
const css = {
	code: 'main.svelte-1pla7rh{position:relative;margin:5rem auto 2rem;width:960px;text-align:left}@media screen and (max-width: 768px){main.svelte-1pla7rh{margin-left:2rem;width:100%}}@media screen and (max-width: 430px){main.svelte-1pla7rh{margin:2rem 0 0}}',
	map: null
};
const Routes = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let isSidebarOpen = (0, import_config_2fdef3a5.w)(false);
	(0, import_index_c5a8641a.s)('isSidebarOpen', isSidebarOpen);
	$$result.css.add(css);
	return `

<main class="${'svelte-1pla7rh'}">${(0, import_index_c5a8641a.v)(Header$1, 'Header').$$render(
		$$result,
		{},
		{},
		{}
	)}
	${(0, import_index_c5a8641a.v)(Navigation, 'Navigation').$$render($$result, {}, {}, {})}
	${(0, import_index_c5a8641a.v)(Hero, 'Hero').$$render($$result, {}, {}, {})}
	${(0, import_index_c5a8641a.v)(Work, 'Work').$$render($$result, {}, {}, {})}
	${(0, import_index_c5a8641a.v)(Websites, 'Websites').$$render($$result, {}, {}, {})}
	${(0, import_index_c5a8641a.v)(Projects, 'Projects').$$render($$result, {}, {}, {})}</main>

${(0, import_index_c5a8641a.v)(Footer, 'Footer').$$render($$result, {}, {}, {})}

${(0, import_index_c5a8641a.v)(Sidebar, 'Sidebar').$$render($$result, {}, {}, {})}
${(0, import_index_c5a8641a.v)(ScrollToTopButton, 'ScrollToTopButton').$$render(
	$$result,
	{},
	{},
	{}
)}`;
});
