var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c5a8641a = require('../../immutable/chunks/index-c5a8641a.js');
var import_config_2fdef3a5 = require('../../immutable/chunks/config-2fdef3a5.js');
class Query {
	constructor(config2) {
		this.abortSignalConsumed = false;
		this.hadObservers = false;
		this.defaultOptions = config2.defaultOptions;
		this.setOptions(config2.options);
		this.observers = [];
		this.cache = config2.cache;
		this.queryKey = config2.queryKey;
		this.queryHash = config2.queryHash;
		this.initialState = config2.state || this.getDefaultState(this.options);
		this.state = this.initialState;
		this.meta = config2.meta;
		this.scheduleGc();
	}
	setOptions(options) {
		var _a;
		this.options = Object.assign(Object.assign({}, this.defaultOptions), options);
		this.meta = options === null || options === void 0 ? void 0 : options.meta;
		this.cacheTime = Math.max(
			this.cacheTime || 0,
			(_a = this.options.cacheTime) !== null && _a !== void 0 ? _a : 5 * 60 * 1e3
		);
	}
	setDefaultOptions(options) {
		this.defaultOptions = options;
	}
	scheduleGc() {
		this.clearGcTimeout();
		if ((0, import_config_2fdef3a5.i)(this.cacheTime)) {
			this.gcTimeout = setTimeout(() => {
				this.optionalRemove();
			}, this.cacheTime);
		}
	}
	clearGcTimeout() {
		clearTimeout(this.gcTimeout);
		this.gcTimeout = void 0;
	}
	optionalRemove() {
		if (!this.observers.length) {
			if (this.state.isFetching) {
				if (this.hadObservers) {
					this.scheduleGc();
				}
			} else {
				this.cache.remove(this);
			}
		}
	}
	setData(updater, options) {
		var _a, _b;
		const prevData = this.state.data;
		let data = (0, import_config_2fdef3a5.f)(updater, prevData);
		if (
			(_b = (_a = this.options).isDataEqual) === null || _b === void 0
				? void 0
				: _b.call(_a, prevData, data)
		) {
			data = prevData;
		} else if (this.options.structuralSharing !== false) {
			data = (0, import_config_2fdef3a5.r)(prevData, data);
		}
		this.dispatch({
			data,
			type: 'success',
			dataUpdatedAt: options === null || options === void 0 ? void 0 : options.updatedAt
		});
		return data;
	}
	setState(state, setStateOptions) {
		this.dispatch({ type: 'setState', state, setStateOptions });
	}
	cancel(options) {
		var _a;
		const promise = this.promise;
		(_a = this.retryer) === null || _a === void 0 ? void 0 : _a.cancel(options);
		return promise
			? promise.then(import_config_2fdef3a5.n).catch(import_config_2fdef3a5.n)
			: Promise.resolve();
	}
	destroy() {
		this.clearGcTimeout();
		this.cancel({ silent: true });
	}
	reset() {
		this.destroy();
		this.setState(this.initialState);
	}
	isActive() {
		return this.observers.some((observer) => observer.options.enabled !== false);
	}
	isFetching() {
		return this.state.isFetching;
	}
	isStale() {
		return (
			this.state.isInvalidated ||
			!this.state.dataUpdatedAt ||
			this.observers.some((observer) => observer.getCurrentResult().isStale)
		);
	}
	isStaleByTime(staleTime = 0) {
		return (
			this.state.isInvalidated ||
			!this.state.dataUpdatedAt ||
			!(0, import_config_2fdef3a5.t)(this.state.dataUpdatedAt, staleTime)
		);
	}
	onFocus() {
		var _a;
		const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
		if (observer) {
			observer.refetch();
		}
		(_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continue();
	}
	onOnline() {
		var _a;
		const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
		if (observer) {
			observer.refetch();
		}
		(_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continue();
	}
	addObserver(observer) {
		if (this.observers.indexOf(observer) === -1) {
			this.observers.push(observer);
			this.hadObservers = true;
			this.clearGcTimeout();
			this.cache.notify({ type: 'observerAdded', query: this, observer });
		}
	}
	removeObserver(observer) {
		if (this.observers.indexOf(observer) !== -1) {
			this.observers = this.observers.filter((x) => x !== observer);
			if (!this.observers.length) {
				if (this.retryer) {
					if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
						this.retryer.cancel({ revert: true });
					} else {
						this.retryer.cancelRetry();
					}
				}
				if (this.cacheTime) {
					this.scheduleGc();
				} else {
					this.cache.remove(this);
				}
			}
			this.cache.notify({ type: 'observerRemoved', query: this, observer });
		}
	}
	getObserversCount() {
		return this.observers.length;
	}
	invalidate() {
		if (!this.state.isInvalidated) {
			this.dispatch({ type: 'invalidate' });
		}
	}
	fetch(options, fetchOptions) {
		var _a, _b, _c, _d, _e, _f;
		if (this.state.isFetching) {
			if (
				this.state.dataUpdatedAt &&
				(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.cancelRefetch)
			) {
				this.cancel({ silent: true });
			} else if (this.promise) {
				(_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continueRetry();
				return this.promise;
			}
		}
		if (options) {
			this.setOptions(options);
		}
		if (!this.options.queryFn) {
			const observer = this.observers.find((x) => x.options.queryFn);
			if (observer) {
				this.setOptions(observer.options);
			}
		}
		const queryKey = (0, import_config_2fdef3a5.e)(this.queryKey);
		const abortController = (0, import_config_2fdef3a5.g)();
		const queryFnContext = {
			queryKey,
			pageParam: void 0,
			meta: this.meta
		};
		Object.defineProperty(queryFnContext, 'signal', {
			enumerable: true,
			get: () => {
				if (abortController) {
					this.abortSignalConsumed = true;
					return abortController.signal;
				}
				return void 0;
			}
		});
		const fetchFn = () => {
			if (!this.options.queryFn) {
				return Promise.reject('Missing queryFn');
			}
			this.abortSignalConsumed = false;
			return this.options.queryFn(queryFnContext);
		};
		const context = {
			fetchOptions,
			options: this.options,
			queryKey,
			state: this.state,
			fetchFn,
			meta: this.meta
		};
		if ((_b = this.options.behavior) === null || _b === void 0 ? void 0 : _b.onFetch) {
			(_c = this.options.behavior) === null || _c === void 0 ? void 0 : _c.onFetch(context);
		}
		this.revertState = this.state;
		if (
			!this.state.isFetching ||
			this.state.fetchMeta !==
				((_d = context.fetchOptions) === null || _d === void 0 ? void 0 : _d.meta)
		) {
			this.dispatch({
				type: 'fetch',
				meta: (_e = context.fetchOptions) === null || _e === void 0 ? void 0 : _e.meta
			});
		}
		this.retryer = new import_config_2fdef3a5.R({
			fn: context.fetchFn,
			abort:
				(_f =
					abortController === null || abortController === void 0
						? void 0
						: abortController.abort) === null || _f === void 0
					? void 0
					: _f.bind(abortController),
			onSuccess: (data) => {
				var _a2, _b2;
				this.setData(data);
				(_b2 = (_a2 = this.cache.config).onSuccess) === null || _b2 === void 0
					? void 0
					: _b2.call(_a2, data, this);
				if (this.cacheTime === 0) {
					this.optionalRemove();
				}
			},
			onError: (error) => {
				var _a2, _b2;
				if (!((0, import_config_2fdef3a5.a)(error) && error.silent)) {
					this.dispatch({
						type: 'error',
						error
					});
				}
				if (!(0, import_config_2fdef3a5.a)(error)) {
					(_b2 = (_a2 = this.cache.config).onError) === null || _b2 === void 0
						? void 0
						: _b2.call(_a2, error, this);
					(0, import_config_2fdef3a5.b)().error(error);
				}
				if (this.cacheTime === 0) {
					this.optionalRemove();
				}
			},
			onFail: () => {
				this.dispatch({ type: 'failed' });
			},
			onPause: () => {
				this.dispatch({ type: 'pause' });
			},
			onContinue: () => {
				this.dispatch({ type: 'continue' });
			},
			retry: context.options.retry,
			retryDelay: context.options.retryDelay
		});
		this.promise = this.retryer.promise;
		return this.promise;
	}
	dispatch(action) {
		this.state = this.reducer(this.state, action);
		import_config_2fdef3a5.c.batch(() => {
			this.observers.forEach((observer) => {
				observer.onQueryUpdate(action);
			});
			this.cache.notify({ query: this, type: 'queryUpdated', action });
		});
	}
	getDefaultState(options) {
		const data =
			typeof options.initialData === 'function' ? options.initialData() : options.initialData;
		const hasInitialData = typeof options.initialData !== 'undefined';
		const initialDataUpdatedAt = hasInitialData
			? typeof options.initialDataUpdatedAt === 'function'
				? options.initialDataUpdatedAt()
				: options.initialDataUpdatedAt
			: 0;
		const hasData = typeof data !== 'undefined';
		return {
			data,
			dataUpdateCount: 0,
			dataUpdatedAt: hasData
				? initialDataUpdatedAt !== null && initialDataUpdatedAt !== void 0
					? initialDataUpdatedAt
					: Date.now()
				: 0,
			error: null,
			errorUpdateCount: 0,
			errorUpdatedAt: 0,
			fetchFailureCount: 0,
			fetchMeta: null,
			isFetching: false,
			isInvalidated: false,
			isPaused: false,
			status: hasData ? 'success' : 'idle'
		};
	}
	reducer(state, action) {
		var _a, _b;
		switch (action.type) {
			case 'failed':
				return Object.assign(Object.assign({}, state), {
					fetchFailureCount: state.fetchFailureCount + 1
				});
			case 'pause':
				return Object.assign(Object.assign({}, state), { isPaused: true });
			case 'continue':
				return Object.assign(Object.assign({}, state), { isPaused: false });
			case 'fetch':
				return Object.assign(
					Object.assign(Object.assign({}, state), {
						fetchFailureCount: 0,
						fetchMeta: (_a = action.meta) !== null && _a !== void 0 ? _a : null,
						isFetching: true,
						isPaused: false
					}),
					!state.dataUpdatedAt && {
						error: null,
						status: 'loading'
					}
				);
			case 'success':
				return Object.assign(Object.assign({}, state), {
					data: action.data,
					dataUpdateCount: state.dataUpdateCount + 1,
					dataUpdatedAt: (_b = action.dataUpdatedAt) !== null && _b !== void 0 ? _b : Date.now(),
					error: null,
					fetchFailureCount: 0,
					isFetching: false,
					isInvalidated: false,
					isPaused: false,
					status: 'success'
				});
			case 'error':
				const error = action.error;
				if ((0, import_config_2fdef3a5.a)(error) && error.revert && this.revertState) {
					return Object.assign({}, this.revertState);
				}
				return Object.assign(Object.assign({}, state), {
					error,
					errorUpdateCount: state.errorUpdateCount + 1,
					errorUpdatedAt: Date.now(),
					fetchFailureCount: state.fetchFailureCount + 1,
					isFetching: false,
					isPaused: false,
					status: 'error'
				});
			case 'invalidate':
				return Object.assign(Object.assign({}, state), { isInvalidated: true });
			case 'setState':
				return Object.assign(Object.assign({}, state), action.state);
			default:
				return state;
		}
	}
}
class QueryCache extends import_config_2fdef3a5.S {
	constructor(config2) {
		super();
		this.config = config2 || {};
		this.queries = [];
		this.queriesMap = {};
	}
	build(client, options, state) {
		var _a;
		const queryKey = options.queryKey;
		const queryHash =
			(_a = options.queryHash) !== null && _a !== void 0
				? _a
				: (0, import_config_2fdef3a5.h)(queryKey, options);
		let query = this.get(queryHash);
		if (!query) {
			query = new Query({
				cache: this,
				queryKey,
				queryHash,
				options: client.defaultQueryOptions(options),
				state,
				defaultOptions: client.getQueryDefaults(queryKey),
				meta: options.meta
			});
			this.add(query);
		}
		return query;
	}
	add(query) {
		if (!this.queriesMap[query.queryHash]) {
			this.queriesMap[query.queryHash] = query;
			this.queries.push(query);
			this.notify({
				type: 'queryAdded',
				query
			});
		}
	}
	remove(query) {
		const queryInMap = this.queriesMap[query.queryHash];
		if (queryInMap) {
			query.destroy();
			this.queries = this.queries.filter((x) => x !== query);
			if (queryInMap === query) {
				delete this.queriesMap[query.queryHash];
			}
			this.notify({ type: 'queryRemoved', query });
		}
	}
	clear() {
		import_config_2fdef3a5.c.batch(() => {
			this.queries.forEach((query) => {
				this.remove(query);
			});
		});
	}
	get(queryHash) {
		return this.queriesMap[queryHash];
	}
	getAll() {
		return this.queries;
	}
	find(arg1, arg2) {
		const [filters] = (0, import_config_2fdef3a5.p)(arg1, arg2);
		if (typeof filters.exact === 'undefined') {
			filters.exact = true;
		}
		return this.queries.find((query) => (0, import_config_2fdef3a5.m)(filters, query));
	}
	findAll(arg1, arg2) {
		const [filters] = (0, import_config_2fdef3a5.p)(arg1, arg2);
		return Object.keys(filters).length > 0
			? this.queries.filter((query) => (0, import_config_2fdef3a5.m)(filters, query))
			: this.queries;
	}
	notify(event) {
		import_config_2fdef3a5.c.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	onFocus() {
		import_config_2fdef3a5.c.batch(() => {
			this.queries.forEach((query) => {
				query.onFocus();
			});
		});
	}
	onOnline() {
		import_config_2fdef3a5.c.batch(() => {
			this.queries.forEach((query) => {
				query.onOnline();
			});
		});
	}
}
class Mutation {
	constructor(config2) {
		this.options = Object.assign(Object.assign({}, config2.defaultOptions), config2.options);
		this.mutationId = config2.mutationId;
		this.mutationCache = config2.mutationCache;
		this.observers = [];
		this.state = config2.state || getDefaultState();
		this.meta = config2.meta;
	}
	setState(state) {
		this.dispatch({ type: 'setState', state });
	}
	addObserver(observer) {
		if (this.observers.indexOf(observer) === -1) {
			this.observers.push(observer);
		}
	}
	removeObserver(observer) {
		this.observers = this.observers.filter((x) => x !== observer);
	}
	cancel() {
		if (this.retryer) {
			this.retryer.cancel();
			return this.retryer.promise.then(import_config_2fdef3a5.n).catch(import_config_2fdef3a5.n);
		}
		return Promise.resolve();
	}
	continue() {
		if (this.retryer) {
			this.retryer.continue();
			return this.retryer.promise;
		}
		return this.execute();
	}
	execute() {
		let data;
		const restored = this.state.status === 'loading';
		let promise = Promise.resolve();
		if (!restored) {
			this.dispatch({ type: 'loading', variables: this.options.variables });
			promise = promise
				.then(() => {
					var _a, _b;
					(_b = (_a = this.mutationCache.config).onMutate) === null || _b === void 0
						? void 0
						: _b.call(_a, this.state.variables, this);
				})
				.then(() => {
					var _a, _b;
					return (_b = (_a = this.options).onMutate) === null || _b === void 0
						? void 0
						: _b.call(_a, this.state.variables);
				})
				.then((context) => {
					if (context !== this.state.context) {
						this.dispatch({
							type: 'loading',
							context,
							variables: this.state.variables
						});
					}
				});
		}
		return promise
			.then(() => this.executeMutation())
			.then((result) => {
				var _a, _b;
				data = result;
				(_b = (_a = this.mutationCache.config).onSuccess) === null || _b === void 0
					? void 0
					: _b.call(_a, data, this.state.variables, this.state.context, this);
			})
			.then(() => {
				var _a, _b;
				return (_b = (_a = this.options).onSuccess) === null || _b === void 0
					? void 0
					: _b.call(_a, data, this.state.variables, this.state.context);
			})
			.then(() => {
				var _a, _b;
				return (_b = (_a = this.options).onSettled) === null || _b === void 0
					? void 0
					: _b.call(_a, data, null, this.state.variables, this.state.context);
			})
			.then(() => {
				this.dispatch({ type: 'success', data });
				return data;
			})
			.catch((error) => {
				var _a, _b;
				(_b = (_a = this.mutationCache.config).onError) === null || _b === void 0
					? void 0
					: _b.call(_a, error, this.state.variables, this.state.context, this);
				(0, import_config_2fdef3a5.b)().error(error);
				return Promise.resolve()
					.then(() => {
						var _a2, _b2;
						return (_b2 = (_a2 = this.options).onError) === null || _b2 === void 0
							? void 0
							: _b2.call(_a2, error, this.state.variables, this.state.context);
					})
					.then(() => {
						var _a2, _b2;
						return (_b2 = (_a2 = this.options).onSettled) === null || _b2 === void 0
							? void 0
							: _b2.call(_a2, void 0, error, this.state.variables, this.state.context);
					})
					.then(() => {
						this.dispatch({ type: 'error', error });
						throw error;
					});
			});
	}
	executeMutation() {
		var _a;
		this.retryer = new import_config_2fdef3a5.R({
			fn: () => {
				if (!this.options.mutationFn) {
					return Promise.reject('No mutationFn found');
				}
				return this.options.mutationFn(this.state.variables);
			},
			onFail: () => {
				this.dispatch({ type: 'failed' });
			},
			onPause: () => {
				this.dispatch({ type: 'pause' });
			},
			onContinue: () => {
				this.dispatch({ type: 'continue' });
			},
			retry: (_a = this.options.retry) !== null && _a !== void 0 ? _a : 0,
			retryDelay: this.options.retryDelay
		});
		return this.retryer.promise;
	}
	dispatch(action) {
		this.state = reducer(this.state, action);
		import_config_2fdef3a5.c.batch(() => {
			this.observers.forEach((observer) => {
				observer.onMutationUpdate(action);
			});
			this.mutationCache.notify(this);
		});
	}
}
function getDefaultState() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		isPaused: false,
		status: 'idle',
		variables: void 0
	};
}
function reducer(state, action) {
	switch (action.type) {
		case 'failed':
			return Object.assign(Object.assign({}, state), { failureCount: state.failureCount + 1 });
		case 'pause':
			return Object.assign(Object.assign({}, state), { isPaused: true });
		case 'continue':
			return Object.assign(Object.assign({}, state), { isPaused: false });
		case 'loading':
			return Object.assign(Object.assign({}, state), {
				context: action.context,
				data: void 0,
				error: null,
				isPaused: false,
				status: 'loading',
				variables: action.variables
			});
		case 'success':
			return Object.assign(Object.assign({}, state), {
				data: action.data,
				error: null,
				status: 'success',
				isPaused: false
			});
		case 'error':
			return Object.assign(Object.assign({}, state), {
				data: void 0,
				error: action.error,
				failureCount: state.failureCount + 1,
				isPaused: false,
				status: 'error'
			});
		case 'setState':
			return Object.assign(Object.assign({}, state), action.state);
		default:
			return state;
	}
}
class MutationCache extends import_config_2fdef3a5.S {
	constructor(config2) {
		super();
		this.config = config2 || {};
		this.mutations = [];
		this.mutationId = 0;
	}
	build(client, options, state) {
		const mutation = new Mutation({
			mutationCache: this,
			mutationId: ++this.mutationId,
			options: client.defaultMutationOptions(options),
			state,
			defaultOptions: options.mutationKey
				? client.getMutationDefaults(options.mutationKey)
				: void 0,
			meta: options.meta
		});
		this.add(mutation);
		return mutation;
	}
	add(mutation) {
		this.mutations.push(mutation);
		this.notify(mutation);
	}
	remove(mutation) {
		this.mutations = this.mutations.filter((x) => x !== mutation);
		mutation.cancel();
		this.notify(mutation);
	}
	clear() {
		import_config_2fdef3a5.c.batch(() => {
			this.mutations.forEach((mutation) => {
				this.remove(mutation);
			});
		});
	}
	getAll() {
		return this.mutations;
	}
	find(filters) {
		if (typeof filters.exact === 'undefined') {
			filters.exact = true;
		}
		return this.mutations.find((mutation) => (0, import_config_2fdef3a5.d)(filters, mutation));
	}
	findAll(filters) {
		return this.mutations.filter((mutation) => (0, import_config_2fdef3a5.d)(filters, mutation));
	}
	notify(mutation) {
		import_config_2fdef3a5.c.batch(() => {
			this.listeners.forEach((listener) => {
				listener(mutation);
			});
		});
	}
	onFocus() {
		this.resumePausedMutations();
	}
	onOnline() {
		this.resumePausedMutations();
	}
	resumePausedMutations() {
		const pausedMutations = this.mutations.filter((x) => x.state.isPaused);
		return import_config_2fdef3a5.c.batch(() =>
			pausedMutations.reduce(
				(promise, mutation) =>
					promise.then(() => mutation.continue().catch(import_config_2fdef3a5.n)),
				Promise.resolve()
			)
		);
	}
}
function infiniteQueryBehavior() {
	return {
		onFetch: (context) => {
			context.fetchFn = () => {
				var _a, _b, _c, _d, _e, _f;
				const refetchPage =
					(_b = (_a = context.fetchOptions) === null || _a === void 0 ? void 0 : _a.meta) ===
						null || _b === void 0
						? void 0
						: _b.refetchPage;
				const fetchMore =
					(_d = (_c = context.fetchOptions) === null || _c === void 0 ? void 0 : _c.meta) ===
						null || _d === void 0
						? void 0
						: _d.fetchMore;
				const pageParam = fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.pageParam;
				const isFetchingNextPage =
					(fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.direction) === 'forward';
				const isFetchingPreviousPage =
					(fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.direction) ===
					'backward';
				const oldPages =
					((_e = context.state.data) === null || _e === void 0 ? void 0 : _e.pages) || [];
				const oldPageParams =
					((_f = context.state.data) === null || _f === void 0 ? void 0 : _f.pageParams) || [];
				const abortController = (0, import_config_2fdef3a5.g)();
				const abortSignal =
					abortController === null || abortController === void 0 ? void 0 : abortController.signal;
				let newPageParams = oldPageParams;
				let cancelled = false;
				const queryFn = context.options.queryFn || (() => Promise.reject('Missing queryFn'));
				const buildNewPages = (pages, param, page, previous) => {
					newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
					return previous ? [page, ...pages] : [...pages, page];
				};
				const fetchPage = (pages, manual, param, previous) => {
					if (cancelled) {
						return Promise.reject('Cancelled');
					}
					if (typeof param === 'undefined' && !manual && pages.length) {
						return Promise.resolve(pages);
					}
					const queryFnContext = {
						queryKey: context.queryKey,
						signal: abortSignal,
						pageParam: param,
						meta: context.meta
					};
					const queryFnResult = queryFn(queryFnContext);
					const promise2 = Promise.resolve(queryFnResult).then((page) =>
						buildNewPages(pages, param, page, previous)
					);
					if ((0, import_config_2fdef3a5.j)(queryFnResult)) {
						const promiseAsAny = promise2;
						promiseAsAny.cancel = queryFnResult.cancel;
					}
					return promise2;
				};
				let promise;
				if (!oldPages.length) {
					promise = fetchPage([]);
				} else if (isFetchingNextPage) {
					const manual = typeof pageParam !== 'undefined';
					const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
					promise = fetchPage(oldPages, manual, param);
				} else if (isFetchingPreviousPage) {
					const manual = typeof pageParam !== 'undefined';
					const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
					promise = fetchPage(oldPages, manual, param, true);
				} else {
					newPageParams = [];
					const manual = typeof context.options.getNextPageParam === 'undefined';
					const shouldFetchFirstPage =
						refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
					promise = shouldFetchFirstPage
						? fetchPage([], manual, oldPageParams[0])
						: Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
					for (let i = 1; i < oldPages.length; i++) {
						promise = promise.then((pages) => {
							const shouldFetchNextPage =
								refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;
							if (shouldFetchNextPage) {
								const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
								return fetchPage(pages, manual, param);
							}
							return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
						});
					}
				}
				const finalPromise = promise.then((pages) => ({
					pages,
					pageParams: newPageParams
				}));
				const finalPromiseAsAny = finalPromise;
				finalPromiseAsAny.cancel = () => {
					cancelled = true;
					abortController === null || abortController === void 0 ? void 0 : abortController.abort();
					if ((0, import_config_2fdef3a5.j)(promise)) {
						promise.cancel();
					}
				};
				return finalPromise;
			};
		}
	};
}
function getNextPageParam(options, pages) {
	var _a;
	return (_a = options.getNextPageParam) === null || _a === void 0
		? void 0
		: _a.call(options, pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
	var _a;
	return (_a = options.getPreviousPageParam) === null || _a === void 0
		? void 0
		: _a.call(options, pages[0], pages);
}
class QueryClient {
	constructor(config2 = {}) {
		this.queryCache = config2.queryCache || new QueryCache();
		this.mutationCache = config2.mutationCache || new MutationCache();
		this.defaultOptions = config2.defaultOptions || {};
		this.queryDefaults = [];
		this.mutationDefaults = [];
	}
	mount() {
		this.unsubscribeFocus = import_config_2fdef3a5.k.subscribe(() => {
			if (import_config_2fdef3a5.k.isFocused() && import_config_2fdef3a5.o.isOnline()) {
				this.mutationCache.onFocus();
				this.queryCache.onFocus();
			}
		});
		this.unsubscribeOnline = import_config_2fdef3a5.o.subscribe(() => {
			if (import_config_2fdef3a5.k.isFocused() && import_config_2fdef3a5.o.isOnline()) {
				this.mutationCache.onOnline();
				this.queryCache.onOnline();
			}
		});
	}
	unmount() {
		var _a, _b;
		(_a = this.unsubscribeFocus) === null || _a === void 0 ? void 0 : _a.call(this);
		(_b = this.unsubscribeOnline) === null || _b === void 0 ? void 0 : _b.call(this);
	}
	isFetching(arg1, arg2) {
		const [filters] = (0, import_config_2fdef3a5.p)(arg1, arg2);
		filters.fetching = true;
		return this.queryCache.findAll(filters).length;
	}
	isMutating(filters) {
		return this.mutationCache.findAll(Object.assign(Object.assign({}, filters), { fetching: true }))
			.length;
	}
	getQueryData(queryKey, filters) {
		var _a;
		return (_a = this.queryCache.find(queryKey, filters)) === null || _a === void 0
			? void 0
			: _a.state.data;
	}
	getQueriesData(queryKeyOrFilters) {
		return this.getQueryCache()
			.findAll(queryKeyOrFilters)
			.map(({ queryKey, state }) => {
				const data = state.data;
				return [queryKey, data];
			});
	}
	setQueryData(queryKey, updater, options) {
		const parsedOptions = (0, import_config_2fdef3a5.l)(queryKey);
		const defaultedOptions = this.defaultQueryOptions(parsedOptions);
		return this.queryCache.build(this, defaultedOptions).setData(updater, options);
	}
	setQueriesData(queryKeyOrFilters, updater, options) {
		return import_config_2fdef3a5.c.batch(() =>
			this.getQueryCache()
				.findAll(queryKeyOrFilters)
				.map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)])
		);
	}
	getQueryState(queryKey, filters) {
		var _a;
		return (_a = this.queryCache.find(queryKey, filters)) === null || _a === void 0
			? void 0
			: _a.state;
	}
	removeQueries(arg1, arg2) {
		const [filters] = (0, import_config_2fdef3a5.p)(arg1, arg2);
		const queryCache = this.queryCache;
		import_config_2fdef3a5.c.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				queryCache.remove(query);
			});
		});
	}
	resetQueries(arg1, arg2, arg3) {
		const [filters, options] = (0, import_config_2fdef3a5.p)(arg1, arg2, arg3);
		const queryCache = this.queryCache;
		const refetchFilters = Object.assign(Object.assign({}, filters), { active: true });
		return import_config_2fdef3a5.c.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				query.reset();
			});
			return this.refetchQueries(refetchFilters, options);
		});
	}
	cancelQueries(arg1, arg2, arg3) {
		const [filters, cancelOptions = {}] = (0, import_config_2fdef3a5.p)(arg1, arg2, arg3);
		if (typeof cancelOptions.revert === 'undefined') {
			cancelOptions.revert = true;
		}
		const promises = import_config_2fdef3a5.c.batch(() =>
			this.queryCache.findAll(filters).map((query) => query.cancel(cancelOptions))
		);
		return Promise.all(promises).then(import_config_2fdef3a5.n).catch(import_config_2fdef3a5.n);
	}
	invalidateQueries(arg1, arg2, arg3) {
		var _a, _b, _c;
		const [filters, options] = (0, import_config_2fdef3a5.p)(arg1, arg2, arg3);
		const refetchFilters = Object.assign(Object.assign({}, filters), {
			active:
				(_b = (_a = filters.refetchActive) !== null && _a !== void 0 ? _a : filters.active) !==
					null && _b !== void 0
					? _b
					: true,
			inactive: (_c = filters.refetchInactive) !== null && _c !== void 0 ? _c : false
		});
		return import_config_2fdef3a5.c.batch(() => {
			this.queryCache.findAll(filters).forEach((query) => {
				query.invalidate();
			});
			return this.refetchQueries(refetchFilters, options);
		});
	}
	refetchQueries(arg1, arg2, arg3) {
		const [filters, options] = (0, import_config_2fdef3a5.p)(arg1, arg2, arg3);
		const promises = import_config_2fdef3a5.c.batch(() =>
			this.queryCache
				.findAll(filters)
				.map((query) =>
					query.fetch(
						void 0,
						Object.assign(Object.assign({}, options), {
							meta: {
								refetchPage: filters === null || filters === void 0 ? void 0 : filters.refetchPage
							}
						})
					)
				)
		);
		let promise = Promise.all(promises).then(import_config_2fdef3a5.n);
		if (!(options === null || options === void 0 ? void 0 : options.throwOnError)) {
			promise = promise.catch(import_config_2fdef3a5.n);
		}
		return promise;
	}
	fetchQuery(arg1, arg2, arg3) {
		const parsedOptions = (0, import_config_2fdef3a5.l)(arg1, arg2, arg3);
		const defaultedOptions = this.defaultQueryOptions(parsedOptions);
		if (typeof defaultedOptions.retry === 'undefined') {
			defaultedOptions.retry = false;
		}
		const query = this.queryCache.build(this, defaultedOptions);
		return query.isStaleByTime(defaultedOptions.staleTime)
			? query.fetch(defaultedOptions)
			: Promise.resolve(query.state.data);
	}
	prefetchQuery(arg1, arg2, arg3) {
		return this.fetchQuery(arg1, arg2, arg3)
			.then(import_config_2fdef3a5.n)
			.catch(import_config_2fdef3a5.n);
	}
	fetchInfiniteQuery(arg1, arg2, arg3) {
		const parsedOptions = (0, import_config_2fdef3a5.l)(arg1, arg2, arg3);
		parsedOptions.behavior = infiniteQueryBehavior();
		return this.fetchQuery(parsedOptions);
	}
	prefetchInfiniteQuery(arg1, arg2, arg3) {
		return this.fetchInfiniteQuery(arg1, arg2, arg3)
			.then(import_config_2fdef3a5.n)
			.catch(import_config_2fdef3a5.n);
	}
	cancelMutations() {
		const promises = import_config_2fdef3a5.c.batch(() =>
			this.mutationCache.getAll().map((mutation) => mutation.cancel())
		);
		return Promise.all(promises).then(import_config_2fdef3a5.n).catch(import_config_2fdef3a5.n);
	}
	resumePausedMutations() {
		return this.getMutationCache().resumePausedMutations();
	}
	executeMutation(options) {
		return this.mutationCache.build(this, options).execute();
	}
	getQueryCache() {
		return this.queryCache;
	}
	getMutationCache() {
		return this.mutationCache;
	}
	getDefaultOptions() {
		return this.defaultOptions;
	}
	setDefaultOptions(options) {
		this.defaultOptions = options;
	}
	setQueryDefaults(queryKey, options) {
		const result = this.queryDefaults.find(
			(x) => (0, import_config_2fdef3a5.q)(queryKey) === (0, import_config_2fdef3a5.q)(x.queryKey)
		);
		if (result) {
			result.defaultOptions = options;
		} else {
			this.queryDefaults.push({ queryKey, defaultOptions: options });
		}
	}
	getQueryDefaults(queryKey) {
		var _a;
		return queryKey
			? (_a = this.queryDefaults.find((x) =>
					(0, import_config_2fdef3a5.s)(queryKey, x.queryKey)
			  )) === null || _a === void 0
				? void 0
				: _a.defaultOptions
			: void 0;
	}
	setMutationDefaults(mutationKey, options) {
		const result = this.mutationDefaults.find(
			(x) =>
				(0, import_config_2fdef3a5.q)(mutationKey) === (0, import_config_2fdef3a5.q)(x.mutationKey)
		);
		if (result) {
			result.defaultOptions = options;
		} else {
			this.mutationDefaults.push({ mutationKey, defaultOptions: options });
		}
	}
	getMutationDefaults(mutationKey) {
		var _a;
		return mutationKey
			? (_a = this.mutationDefaults.find((x) =>
					(0, import_config_2fdef3a5.s)(mutationKey, x.mutationKey)
			  )) === null || _a === void 0
				? void 0
				: _a.defaultOptions
			: void 0;
	}
	defaultQueryOptions(options) {
		if (options === null || options === void 0 ? void 0 : options._defaulted) {
			return options;
		}
		const defaultedOptions = Object.assign(
			Object.assign(
				Object.assign(
					Object.assign({}, this.defaultOptions.queries),
					this.getQueryDefaults(options === null || options === void 0 ? void 0 : options.queryKey)
				),
				options
			),
			{ _defaulted: true }
		);
		if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
			defaultedOptions.queryHash = (0, import_config_2fdef3a5.h)(
				defaultedOptions.queryKey,
				defaultedOptions
			);
		}
		return defaultedOptions;
	}
	defaultQueryObserverOptions(options) {
		return this.defaultQueryOptions(options);
	}
	defaultMutationOptions(options) {
		if (options === null || options === void 0 ? void 0 : options._defaulted) {
			return options;
		}
		return Object.assign(
			Object.assign(
				Object.assign(
					Object.assign({}, this.defaultOptions.mutations),
					this.getMutationDefaults(
						options === null || options === void 0 ? void 0 : options.mutationKey
					)
				),
				options
			),
			{ _defaulted: true }
		);
	}
	clear() {
		this.queryCache.clear();
		this.mutationCache.clear();
	}
}
const QueryClientProvider = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { queryCache = new QueryCache() } = $$props;
	let { mutationCache = new MutationCache() } = $$props;
	let { defaultOptions = {} } = $$props;
	let {
		client = new QueryClient({
			queryCache,
			mutationCache,
			defaultOptions
		})
	} = $$props;
	(0, import_index_c5a8641a.s)('queryClient', client);
	(0, import_index_c5a8641a.o)(() => {
		client.unmount();
	});
	if ($$props.queryCache === void 0 && $$bindings.queryCache && queryCache !== void 0)
		$$bindings.queryCache(queryCache);
	if ($$props.mutationCache === void 0 && $$bindings.mutationCache && mutationCache !== void 0)
		$$bindings.mutationCache(mutationCache);
	if ($$props.defaultOptions === void 0 && $$bindings.defaultOptions && defaultOptions !== void 0)
		$$bindings.defaultOptions(defaultOptions);
	if ($$props.client === void 0 && $$bindings.client && client !== void 0)
		$$bindings.client(client);
	return `${slots.default ? slots.default({}) : ``}`;
});
const presets = {
	light: {
		colors: {
			text: '#282230',
			background: {
				_: '#f1f1f1',
				contrast: '#b1b1b1'
			},
			primary: '#01796f',
			primary_dark: '#016159',
			secondary: '#562931'
		}
	},
	dark: {
		colors: {
			text: '#f1f1f1',
			background: {
				_: '#27323a',
				contrast: '#0d1215'
			},
			primary: '#01978b',
			primary_dark: '#00887c',
			secondary: '#fe8690'
		}
	},
	forest: {
		colors: {
			text: '#f9f2cf',
			background: {
				_: '#3b6c4c',
				contrast: '#1d492c'
			},
			primary: '#efdc7e',
			primary_dark: '#e4d589',
			secondary: '#4a875f'
		}
	}
};
const currentThemeName = (0, import_config_2fdef3a5.w)();
const currentThemeObject = (0, import_config_2fdef3a5.w)();
const themes$1 = (0, import_config_2fdef3a5.w)();
function toggle() {
	let themes2 = (0, import_index_c5a8641a.g)(themes$1);
	currentThemeName.update((current) => {
		let keys = Object.keys(themes2);
		return keys.reduce((newCurrent, theme, index, source) => {
			if (theme === current) {
				if (source[index + 1]) return source[index + 1];
				else return source[0];
			}
			return newCurrent;
		}, '');
	});
}
function processConfig(obj) {
	const result = {};
	const recurse = (obj2, current) => {
		for (let prop in obj2) {
			const value = obj2[prop];
			const key = (current ? `${current}-${prop}` : prop)
				.replace(/-_$/g, '')
				.replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
				.toLowerCase();
			if (value && typeof value === 'object') {
				recurse(value, key);
			} else {
				result[key] = value;
			}
		}
	};
	recurse(obj);
	return result;
}
function createCSSVariableName({ variablePrefix, prop, key }) {
	if (key) return `${variablePrefix}-${key}-${prop}`;
	else return `${variablePrefix}-${prop}`;
}
function createCSSVariableStatement(variableName, value) {
	return `${variableName}: ${value};`;
}
function createCSSVariableOverride({ initialVariableName, themeVariableName }) {
	return `${initialVariableName}: var(${themeVariableName});`;
}
function createCSSTemplate(prefix, base = {}) {
	const variablePrefix = prefix ? `--${prefix}` : '-';
	const themes2 = (0, import_index_c5a8641a.g)(themes$1);
	const processedBaseConfig = processConfig(base);
	const baseCSSVariables = Object.entries(processedBaseConfig).map(([prop, value]) => [
		createCSSVariableName({ variablePrefix, prop }),
		value
	]);
	const rootCSSVariables = [].concat(baseCSSVariables);
	const themeCSSContent = [];
	for (let [themeName, themeValues] of Object.entries(themes2)) {
		const processed = processConfig(themeValues);
		const overrides = [];
		for (let [prop, value] of Object.entries(processed)) {
			const initialVariableName = createCSSVariableName({
				variablePrefix,
				prop
			});
			if (!rootCSSVariables.some(([variableName]) => variableName === initialVariableName)) {
				rootCSSVariables.push([initialVariableName, value]);
			}
			rootCSSVariables.push([
				createCSSVariableName({ variablePrefix, prop, key: themeName }),
				value
			]);
			overrides.push(
				createCSSVariableOverride({
					initialVariableName,
					themeVariableName: createCSSVariableName({
						variablePrefix,
						prop,
						key: themeName
					})
				})
			);
		}
		const themeCSSClassName = prefix ? `${prefix}--${themeName}` : themeName;
		themeCSSContent.push(`
      [theme='${themeName}'],
      .${themeCSSClassName} {
        ${overrides.join('\n	')}
      }
    `);
	}
	const template = `
    <style>
      :root {
        ${rootCSSVariables.map((vars) => createCSSVariableStatement(...vars)).join('')}
      }

      ${themeCSSContent.join('')}
    </style>
  `;
	return template.trim();
}
function isObject(obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
}
const STORAGE_KEY = '__svelte-themer__theme';
const CONTEXT_KEY = 'theme';
const VARIABLE_PREFIX = 'theme';
const VALID_MODES = ['auto', 'light', 'dark'];
const INVALID_THEMES_MESSAGE = 'Invalid themes object supplied';
const INVALID_PREFIX_MESSAGE = 'Invalid prefix string supplied';
const INVALID_MODE_MESSAGE = `Invalid mode string supplied, must be one of: ${VALID_MODES.join(
	', '
)}`;
const ThemeWrapper = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let $currentThemeName, $$unsubscribe_currentThemeName;
	$$unsubscribe_currentThemeName = (0, import_index_c5a8641a.a)(
		currentThemeName,
		(value) => ($currentThemeName = value)
	);
	let { key = STORAGE_KEY } = $$props;
	let { themes: themes2 = presets } = $$props;
	let { theme = null } = $$props;
	let { prefix = VARIABLE_PREFIX } = $$props;
	let { mode = 'auto' } = $$props;
	let { base = {} } = $$props;
	if (!isObject(themes2) || !Object.keys(themes2).length) throw new Error(INVALID_THEMES_MESSAGE);
	if (typeof prefix === 'string' && !prefix.trim().length) throw new Error(INVALID_PREFIX_MESSAGE);
	if (!VALID_MODES.includes(mode)) throw new Error(INVALID_MODE_MESSAGE);
	themes$1.set(themes2);
	const [fallback] = Object.keys(themes2);
	if (!Object.keys(themes2).includes($currentThemeName)) {
		currentThemeName.set(fallback);
	}
	const style = createCSSTemplate(prefix, base);
	(0, import_index_c5a8641a.s)(CONTEXT_KEY, {
		current: currentThemeName,
		toggle,
		theme: currentThemeName
	});
	if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
	if ($$props.themes === void 0 && $$bindings.themes && themes2 !== void 0)
		$$bindings.themes(themes2);
	if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
	if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
		$$bindings.prefix(prefix);
	if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0) $$bindings.mode(mode);
	if ($$props.base === void 0 && $$bindings.base && base !== void 0) $$bindings.base(base);
	{
		currentThemeObject.set(themes2[$currentThemeName]);
	}
	$$unsubscribe_currentThemeName();
	return `${(($$result.head += `<!-- HTML_TAG_START -->${style}<!-- HTML_TAG_END -->`), '')}

${
	slots.default
		? slots.default({})
		: `
  
`
}`;
});
const ThemeToggle_svelte_svelte_type_style_lang = '';
const themes = {
	light: {
		colors: {
			text: {
				_: '#212121',
				contrast: '#ffffff'
			},
			background: {
				_: '#ffffff',
				contrast: '#212121'
			},
			primary: '#212121',
			secondary: '#656d78'
		}
	},
	dark: {
		colors: {
			text: {
				_: '#ffffff',
				contrast: '#212121'
			},
			background: {
				_: '#212121',
				contrast: '#ffffff'
			},
			primary: '#ffffff',
			secondary: '#656d78'
		}
	}
};
const Head = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let pathname;
	let { title = void 0 } = $$props;
	let { description = void 0 } = $$props;
	let { image = void 0 } = $$props;
	const {
		siteUrl,
		image: defaultImage,
		title: defaultTitle,
		description: defaultDescription,
		twitterUsername
	} = import_config_2fdef3a5.u;
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`
	};
	const favicon = (icon) =>
		`
	<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
		<text y=%22.9em%22 font-size=%2290%22>
			${icon}
		</text>
	</svg>
	`.trim();
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0)
		$$bindings.description(description);
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	return `${
		(($$result.head += `${
			(($$result.title = `<title>${(0, import_index_c5a8641a.e)(seo.title)}</title>`), '')
		}<meta name="${'description'}"${(0, import_index_c5a8641a.b)(
			'content',
			seo.description,
			0
		)} data-svelte="svelte-1e8hnk2"><meta name="${'image'}"${(0, import_index_c5a8641a.b)(
			'content',
			seo.image,
			0
		)} data-svelte="svelte-1e8hnk2"><meta property="${'og:title'}"${(0, import_index_c5a8641a.b)(
			'content',
			seo.title,
			0
		)} data-svelte="svelte-1e8hnk2"><meta property="${'og:description'}"${(0,
		import_index_c5a8641a.b)(
			'content',
			seo.description,
			0
		)} data-svelte="svelte-1e8hnk2"><meta property="${'og:image'}"${(0, import_index_c5a8641a.b)(
			'content',
			seo.image,
			0
		)} data-svelte="svelte-1e8hnk2"><meta property="${'og:url'}"${(0, import_index_c5a8641a.b)(
			'content',
			seo.siteUrl,
			0
		)} data-svelte="svelte-1e8hnk2"><meta property="${'og:type'}" content="${'website'}" data-svelte="svelte-1e8hnk2"><meta name="${'twitter:card'}" content="${'summary_large_image'}" data-svelte="svelte-1e8hnk2"><meta name="${'twitter:creator'}"${(0,
		import_index_c5a8641a.b)(
			'content',
			twitterUsername,
			0
		)} data-svelte="svelte-1e8hnk2"><meta name="${'twitter:title'}"${(0, import_index_c5a8641a.b)(
			'content',
			seo.title,
			0
		)} data-svelte="svelte-1e8hnk2"><meta name="${'twitter:description'}"${(0,
		import_index_c5a8641a.b)(
			'content',
			seo.description,
			0
		)} data-svelte="svelte-1e8hnk2"><meta name="${'twitter:image'}"${(0, import_index_c5a8641a.b)(
			'content',
			seo.image,
			0
		)} data-svelte="svelte-1e8hnk2"><link rel="${'icon'}"${(0, import_index_c5a8641a.b)(
			'href',
			`data:image/svg+xml,${favicon('\u{1F468}\u{1F3FC}\u200D\u{1F4BB}')}`,
			0
		)} data-svelte="svelte-1e8hnk2"><link rel="${'preconnect'}" href="${'https://fonts.gstatic.com'}" data-svelte="svelte-1e8hnk2"><link rel="${'preconnect'}" href="${'https://fonts.gstatic.com'}" crossorigin data-svelte="svelte-1e8hnk2"><link href="${'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;700;900&display=swap'}" rel="${'stylesheet'}" data-svelte="svelte-1e8hnk2">`),
		'')
	}`;
});
const __layout_svelte_svelte_type_style_lang = '';
const css = {
	code: "@import url(../../node_modules/normalize.css/normalize.css);:root{--light-grey:#cccccc;--blue:#5496ff;--green:#10b500;--black:#212121;--red:#fc4349;--white:#fafafa;--gatech:#eeb211;--ibm:#1f70c1;--linkedin:#0077b5;--svelte:#fe3e00;--netlify:#419490;--font-family-primary:'Inter';--fz-xxs:12px;--fz-xs:13px;--fz-sm:14px;--fz-md:16px;--fz-lg:18px;--fz-xl:20px;--fz-xxl:22px;--fz-heading:32px}*::selection{background:var(--theme-colors-background-contrast);color:var(--theme-colors-text-contrast)}html{overflow-x:hidden}body{margin:0;font-family:var(--font-family-primary);font-size:clamp(100%, calc(1rem + 2vw), var(--fz-lg));line-height:1.3;background-color:var(--theme-colors-background);color:var(--theme-colors-text);transition:background-color 0.3s;overflow-x:hidden;zoom:125%}@media screen and (max-width: 1920px){body{zoom:110%}}@media screen and (max-width: 1440px){body{zoom:100%}}.link{text-decoration:underline;color:var(--blue)}.link:hover{color:var(--light-grey) !important}.gatech{color:var(--gatech) !important}.ibm{color:var(--ibm) !important}.github{color:var(--github) !important}.netlify{color:var(--netlify) !important}.svelte{color:var(--svelte) !important}button{padding:0;background:none;border:none;outline:inherit;font:inherit;color:inherit;line-height:1;cursor:pointer}p{margin:0}",
	map: null
};
const _layout = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	const queryClient = new QueryClient();
	$$result.css.add(css);
	return `${(0, import_index_c5a8641a.v)(Head, 'Head').$$render($$result, {}, {}, {})}

${(0, import_index_c5a8641a.v)(QueryClientProvider, 'QueryClientProvider').$$render(
	$$result,
	{ client: queryClient },
	{},
	{
		default: () => {
			return `${(0, import_index_c5a8641a.v)(ThemeWrapper, 'ThemeWrapper').$$render(
				$$result,
				{ themes, theme: 'light' },
				{},
				{
					default: () => {
						return `
		${slots.default ? slots.default({}) : ``}`;
					}
				}
			)}`;
		}
	}
)}`;
});
