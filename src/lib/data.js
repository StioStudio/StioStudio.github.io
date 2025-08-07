// src/lib/data.js
export const categories = {
	website: {
		name: "Website",
	},
	projects: {
		name: "Projects",
	},
	showcase: {
		name: "Showcase",
	},
};

import search_image from "$lib/assets/system-menu/search.svg";
import profile_image from "$lib/assets/system-menu/profile.png";
import settings_image from "$lib/assets/system-menu/settings.svg";

export const systemMenu = {
	search: { image: search_image },
	profile: { image: profile_image, full: true },
	settings: { image: settings_image },
};

import { projects } from "./data/import";

export const apps = {
	"blob-of-life": projects["blob-of-life"],
	store: projects.store,
	"all-apps": projects["all-apps"],
};
