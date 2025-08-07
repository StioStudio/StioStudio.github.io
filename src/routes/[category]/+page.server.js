import { categories } from "$lib/data.js";

// ensure this route is prerendered
export const prerender = true;

// SvelteKit will call this at build time and prerender each of these URLs:
export const entries = Object.keys(categories).map((c) => `/${c}`);

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const { category } = params;
	let _cat = Object.keys(categories);
	if (!_cat.includes(category)) {
		// console.error("404")
		// throw error(404, 'Not found');
		throw new Error("404");
	}
	return {
		category,
	};
}
