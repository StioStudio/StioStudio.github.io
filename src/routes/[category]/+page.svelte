<script>
	// @ts-nocheck

	// Vars:
	import "$lib/css/var/color.css";
	import "$lib/css/var/font.css";

	// CSS:
	import "$lib/css/nav-app-preview.css";
	import "$lib/css/main.css";
	import "$lib/css/top-bar.css";
	import "$lib/css/category.css";
	import "$lib/css/system-menu.css";
	import "$lib/css/app-picker.css";
	import "$lib/css/app-preview.css"

	// Info
	import { categories, systemMenu, apps } from "$lib/data";

	// Component
	import AppPreview from "$lib/component/app-preview.svelte";
	import Css from "$lib/component/css.svelte";

	export let data;
</script>

<svelte:head>
	<title>{data.category} - My Site</title>
</svelte:head>

<main>
	<div class="top-bar">
		<div class="categories">
			{#each Object.keys(categories) as category}
				<a
					class="category {category == data.category ? 'active' : ''}"
					href="/{category}">{categories[category].name}</a
				>
			{/each}
		</div>
		<div class="system-menu">
			{#each Object.keys(systemMenu) as menuButton}
				<a
					class="system-menu-button {systemMenu[menuButton].full ? 'full' : ''}"
					href="/{menuButton}"
				>
					<img src={systemMenu[menuButton].image} alt="" />
				</a>
			{/each}
		</div>
	</div>
	{#each Object.keys(apps) as app}
		{#if apps[app].filterCategory.includes(data.category)}
			<Css css={`#${app}:target ~ .picked-app-${app} {display: block}`} />
			<style>
			</style>
			<div class="app-picked-nav" id={app}></div>
		{/if}
	{/each}
	<div class="app-picker">
		{#each Object.keys(apps) as app}
			{#if apps[app].filterCategory.includes(data.category)}
				<Css
					css={`#${app}:target ~ .app-picker .picked-app-${app} {border: 7px solid var(--c-50);}`}
				/>
				<a class="picked-app picked-app-{app}" href="#{app}"><img src="{apps[app].shortcut_image}" alt=""></a
				>
			{/if}
		{/each}
	</div>
	<div class="app-previews">
		{#each Object.keys(apps) as app}
			{#if apps[app].filterCategory.includes(data.category)}
				<AppPreview {app} {apps} {data} />
			{/if}
		{/each}
	</div>
</main>
