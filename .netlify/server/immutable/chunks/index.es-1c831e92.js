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
	I: () => Icon,
	a: () => faArrowUp,
	b: () => faBars,
	c: () => faTimes,
	d: () => faPaperPlane,
	e: () => faStar,
	f: () => faExclamationTriangle,
	g: () => faCodeBranch,
	h: () => faFileCode
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c5a8641a = require('./index-c5a8641a.js');
const Path = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { id } = $$props;
	let { data = {} } = $$props;
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `<path${(0, import_index_c5a8641a.f)(
		[{ id: 'path-' + (0, import_index_c5a8641a.e)(id, true) }, (0, import_index_c5a8641a.h)(data)],
		{}
	)}></path>`;
});
const Polygon = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { id } = $$props;
	let { data = {} } = $$props;
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `<polygon${(0, import_index_c5a8641a.f)(
		[
			{ id: 'polygon-' + (0, import_index_c5a8641a.e)(id, true) },
			(0, import_index_c5a8641a.h)(data)
		],
		{}
	)}></polygon>`;
});
const Raw = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let cursor = 870711;
	function getId() {
		cursor += 1;
		return `fa-${cursor.toString(16)}`;
	}
	let raw;
	let { data } = $$props;
	function getRaw(data2) {
		if (!data2 || !data2.raw) {
			return null;
		}
		let rawData = data2.raw;
		const ids = {};
		rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
			const uniqueId = getId();
			ids[id] = uniqueId;
			return ` id="${uniqueId}"`;
		});
		rawData = rawData.replace(
			/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
			(match, rawId, _, pointerId) => {
				const id = rawId || pointerId;
				if (!id || !ids[id]) {
					return match;
				}
				return `#${ids[id]}`;
			}
		);
		return rawData;
	}
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	raw = getRaw(data);
	return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const Svg_svelte_svelte_type_style_lang = '';
const css = {
	code: '.fa-icon.svelte-1dof0an{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1dof0an{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1dof0an{transform:scale(1, -1)}.fa-spin.svelte-1dof0an{animation:svelte-1dof0an-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1dof0an{color:#fff}.fa-pulse.svelte-1dof0an{animation:svelte-1dof0an-fa-spin 1s infinite steps(8)}@keyframes svelte-1dof0an-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',
	map: null
};
const Svg = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { class: className } = $$props;
	let { width } = $$props;
	let { height } = $$props;
	let { box } = $$props;
	let { spin = false } = $$props;
	let { inverse = false } = $$props;
	let { pulse = false } = $$props;
	let { flip = null } = $$props;
	let { x = void 0 } = $$props;
	let { y = void 0 } = $$props;
	let { style = void 0 } = $$props;
	let { label = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0)
		$$bindings.height(height);
	if ($$props.box === void 0 && $$bindings.box && box !== void 0) $$bindings.box(box);
	if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
	if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
		$$bindings.inverse(inverse);
	if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
	if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
	if ($$props.x === void 0 && $$bindings.x && x !== void 0) $$bindings.x(x);
	if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
	if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	$$result.css.add(css);
	return `<svg version="${'1.1'}" class="${[
		'fa-icon ' + (0, import_index_c5a8641a.e)(className, true) + ' svelte-1dof0an',
		(spin ? 'fa-spin' : '') +
			' ' +
			(pulse ? 'fa-pulse' : '') +
			' ' +
			(inverse ? 'fa-inverse' : '') +
			' ' +
			(flip === 'horizontal' ? 'fa-flip-horizontal' : '') +
			' ' +
			(flip === 'vertical' ? 'fa-flip-vertical' : '')
	]
		.join(' ')
		.trim()}"${(0, import_index_c5a8641a.b)('x', x, 0)}${(0, import_index_c5a8641a.b)(
		'y',
		y,
		0
	)}${(0, import_index_c5a8641a.b)('width', width, 0)}${(0, import_index_c5a8641a.b)(
		'height',
		height,
		0
	)}${(0, import_index_c5a8641a.b)('aria-label', label, 0)}${(0, import_index_c5a8641a.b)(
		'role',
		label ? 'img' : 'presentation',
		0
	)}${(0, import_index_c5a8641a.b)('viewBox', box, 0)}${(0, import_index_c5a8641a.b)(
		'style',
		style,
		0
	)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
let outerScale = 1;
function normaliseData(data) {
	if ('iconName' in data && 'icon' in data) {
		let normalisedData = {};
		let faIcon = data.icon;
		let name = data.iconName;
		let width = faIcon[0];
		let height = faIcon[1];
		let paths = faIcon[4];
		let iconData = { width, height, paths: [{ d: paths }] };
		normalisedData[name] = iconData;
		return normalisedData;
	}
	return data;
}
const Icon = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	let { class: className = '' } = $$props;
	let { data } = $$props;
	let { scale = 1 } = $$props;
	let { spin = false } = $$props;
	let { inverse = false } = $$props;
	let { pulse = false } = $$props;
	let { flip = null } = $$props;
	let { label = null } = $$props;
	let self = null;
	let { style = null } = $$props;
	let width;
	let height;
	let combinedStyle;
	let box;
	function init() {
		if (typeof data === 'undefined') {
			return;
		}
		const normalisedData = normaliseData(data);
		const [name] = Object.keys(normalisedData);
		const icon = normalisedData[name];
		if (!icon.paths) {
			icon.paths = [];
		}
		if (icon.d) {
			icon.paths.push({ d: icon.d });
		}
		if (!icon.polygons) {
			icon.polygons = [];
		}
		if (icon.points) {
			icon.polygons.push({ points: icon.points });
		}
		self = icon;
	}
	function normalisedScale() {
		let numScale = 1;
		if (typeof scale !== 'undefined') {
			numScale = Number(scale);
		}
		if (isNaN(numScale) || numScale <= 0) {
			console.warn('Invalid prop: prop "scale" should be a number over 0.');
			return outerScale;
		}
		return numScale * outerScale;
	}
	function calculateBox() {
		if (self) {
			return `0 0 ${self.width} ${self.height}`;
		}
		return `0 0 ${width} ${height}`;
	}
	function calculateRatio() {
		if (!self) {
			return 1;
		}
		return Math.max(self.width, self.height) / 16;
	}
	function calculateWidth() {
		if (self) {
			return (self.width / calculateRatio()) * normalisedScale();
		}
		return 0;
	}
	function calculateHeight() {
		if (self) {
			return (self.height / calculateRatio()) * normalisedScale();
		}
		return 0;
	}
	function calculateStyle() {
		let combined = '';
		if (style !== null) {
			combined += style;
		}
		let size = normalisedScale();
		if (size === 1) {
			if (combined.length === 0) {
				return void 0;
			}
			return combined;
		}
		if (combined !== '' && !combined.endsWith(';')) {
			combined += '; ';
		}
		return `${combined}font-size: ${size}em`;
	}
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0) $$bindings.scale(scale);
	if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
	if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
		$$bindings.inverse(inverse);
	if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
	if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
	let $$settled;
	let $$rendered;
	do {
		$$settled = true;
		{
			{
				init();
				width = calculateWidth();
				height = calculateHeight();
				combinedStyle = calculateStyle();
				box = calculateBox();
			}
		}
		$$rendered = `${(0, import_index_c5a8641a.v)(Svg, 'Svg').$$render(
			$$result,
			{
				label,
				width,
				height,
				box,
				style: combinedStyle,
				spin,
				flip,
				inverse,
				pulse,
				class: className
			},
			{},
			{
				default: () => {
					return `${
						slots.default
							? slots.default({})
							: `
    ${
			self
				? `${
						self.paths
							? `${(0, import_index_c5a8641a.i)(self.paths, (path, i) => {
									return `${(0, import_index_c5a8641a.v)(Path, 'Path').$$render(
										$$result,
										{ id: i, data: path },
										{},
										{}
									)}`;
							  })}`
							: ``
				  }
      ${
				self.polygons
					? `${(0, import_index_c5a8641a.i)(self.polygons, (polygon, i) => {
							return `${(0, import_index_c5a8641a.v)(Polygon, 'Polygon').$$render(
								$$result,
								{ id: i, data: polygon },
								{},
								{}
							)}`;
					  })}`
					: ``
			}
      ${
				self.raw
					? `${(0, import_index_c5a8641a.v)(Raw, 'Raw').$$render(
							$$result,
							{ data: self },
							{
								data: ($$value) => {
									self = $$value;
									$$settled = false;
								}
							},
							{}
					  )}`
					: ``
			}`
				: ``
		}
  `
					}`;
				}
			}
		)}`;
	} while (!$$settled);
	return $$rendered;
});
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var faArrowUp = {
	prefix: 'fas',
	iconName: 'arrow-up',
	icon: [
		384,
		512,
		[8593],
		'f062',
		'M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z'
	]
};
var faBars = {
	prefix: 'fas',
	iconName: 'bars',
	icon: [
		448,
		512,
		['navicon'],
		'f0c9',
		'M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z'
	]
};
var faCodeBranch = {
	prefix: 'fas',
	iconName: 'code-branch',
	icon: [
		448,
		512,
		[],
		'f126',
		'M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z'
	]
};
var faFileCode = {
	prefix: 'fas',
	iconName: 'file-code',
	icon: [
		384,
		512,
		[],
		'f1c9',
		'M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 305.8c7.812 7.812 7.812 20.5 0 28.31l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0L306.1 305.8zM256 0v128h128L256 0z'
	]
};
var faPaperPlane = {
	prefix: 'fas',
	iconName: 'paper-plane',
	icon: [
		512,
		512,
		[61913],
		'f1d8',
		'M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z'
	]
};
var faStar = {
	prefix: 'fas',
	iconName: 'star',
	icon: [
		576,
		512,
		[61446, 11088],
		'f005',
		'M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z'
	]
};
var faTriangleExclamation = {
	prefix: 'fas',
	iconName: 'triangle-exclamation',
	icon: [
		512,
		512,
		[9888, 'exclamation-triangle', 'warning'],
		'f071',
		'M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z'
	]
};
var faExclamationTriangle = faTriangleExclamation;
var faXmark = {
	prefix: 'fas',
	iconName: 'xmark',
	icon: [
		320,
		512,
		[128473, 10005, 10006, 10060, 215, 'close', 'multiply', 'remove', 'times'],
		'f00d',
		'M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z'
	]
};
var faTimes = faXmark;
