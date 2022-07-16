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
	default: () => _error
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c5a8641a = require('../../immutable/chunks/index-c5a8641a.js');
var import_index_es_1c831e92 = require('../../immutable/chunks/index.es-1c831e92.js');
const __error_svelte_svelte_type_style_lang = '';
const css = {
	code: 'section.svelte-1spppwt.svelte-1spppwt{height:100vh}section.svelte-1spppwt div.svelte-1spppwt{display:flex;flex-direction:column;justify-content:center;height:100%;margin-left:10rem}@media screen and (max-width: 430px){section.svelte-1spppwt div.svelte-1spppwt{margin-left:1rem}}section.svelte-1spppwt div h1.svelte-1spppwt{margin:0;font-size:64px}@media screen and (max-width: 430px){section.svelte-1spppwt div h1.svelte-1spppwt{font-size:28px}}section.svelte-1spppwt div h1.svelte-1spppwt svg{zoom:2}@media screen and (max-width: 430px){section.svelte-1spppwt div h1.svelte-1spppwt svg{zoom:1}}section.svelte-1spppwt div p.svelte-1spppwt{font-size:24px;font-weight:200}@media screen and (max-width: 430px){section.svelte-1spppwt div p.svelte-1spppwt{font-size:18px}}',
	map: null
};
const _error = (0, import_index_c5a8641a.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<section class="${'svelte-1spppwt'}"><div class="${'svelte-1spppwt'}"><h1 class="${'svelte-1spppwt'}">${(0,
	import_index_c5a8641a.v)(import_index_es_1c831e92.I, 'Icon').$$render(
		$$result,
		{ data: import_index_es_1c831e92.f, scale: '2' },
		{},
		{}
	)}
			404 Page Not Found.
		</h1>
		<p class="${'svelte-1spppwt'}">Go back to${(0, import_index_c5a8641a.e)(' ')}
			<a href="${'/'}" aria-hidden="${'true'}" aria-label="${'go back to nicholasadamou.com'}" title="${'go back to nicholasadamou.com'}" rel="${'noopener noreferrer'}" class="${'link'}"><em>nicholasadamou.com</em>
			</a>?
		</p></div>
</section>`;
});
