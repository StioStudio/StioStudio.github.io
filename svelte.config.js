import adapter from "@sveltejs/adapter-static";

export default {
	kit: {
		// adapter: adapter({
		// 	// 	adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// 	// 	If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// 	// 	See https://svelte.dev/docs/kit/adapters for more information about adapters.
		// 	// default options are shown. On some platforms
		// 	// these options are set automatically — see below
		// 	pages: "build",
		// 	assets: "build",
		// 	// fallback: "404.html",
		// 	fallback: undefined,
		// 	precompress: false,
		// 	strict: true,
		// }),
		// prerender: {
		// 	handleHttpError: "warn"
		// }
		// // paths: {
		// // 	base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
		// // },
		adapter: adapter({
			fallback: "404.html",
		}),
		prerender: {
			handleHttpError: "warn",
		},
	},
};
