import { categories } from "$lib/data.js";
import { error } from "@sveltejs/kit";

// ensure this route is prerendered
export const prerender = true;

// SvelteKit will call this at build time and prerender each of these URLs:
export function entries() {
	// Must return [{ category: 'name' }, ...]
	return Object.keys(categories).map((c) => ({ category: c }));
}

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const { category } = params;
	const allCategories = Object.keys(categories);

	if (!allCategories.includes(category)) {
		throw error(404, 'Not found');
	}

	return {
		category
	};
}
