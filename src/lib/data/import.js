// this is temporary

import blobOfLife_bg from "./import/blob-of-life/bg.png";
import blobOfLife_short from "./import/blob-of-life/short.png";
import blobOfLife_title from "./import/blob-of-life/title.svg";
export let projects = {
	"blob-of-life": {
		name: "Blob of Life",
		filterCategory: ["projects"],
		type: "project v1",
		playLink: "/blob-of-life",
		title: "BLOB OF LIFE",
		title_image: blobOfLife_title,
		description: "Mesmerizing simulation of blob gravity. Inspired by Convey of Life.",
		background: blobOfLife_bg,
		shortcut_image: blobOfLife_short,
	},
	store: {
		name: "Store",
		filterCategory: ["showcase"],
		preview: {
			type: "app-v1",
			"bg-image": "",
		},
	},
	"all-apps": {
		name: "All apps",
		filterCategory: ["showcase"],
	},
};
