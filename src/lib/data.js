// src/lib/data.js

// categories menu
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

// System menu
import search_image from "$lib/assets/system-menu/search.svg";
import profile_image from "$lib/assets/system-menu/profile.png";
import settings_image from "$lib/assets/system-menu/settings.svg";

export const systemMenu = {
	search: { image: search_image },
	profile: { image: profile_image, full: true },
	settings: { image: settings_image },
};

let apps = {
	"blob-of-life": (await import("./data/blob-of-life/import")).app,
	"all-apps": (await import("./data/all-apps/import")).app,
	"store": (await import("./data/store/import")).app,
	"info": (await import("./data/info/import")).app,
	"discord": (await import("./data/discord/import")).app,
	"dolphin": (await import("./data/dolphin/import")).app,
};

export {apps}