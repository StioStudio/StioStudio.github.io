<script>
	import favicon from "$lib/assets/favicon.png";
	import preview from "$lib/assets/preview.png";

	let { children } = $props();

	import HeadMetaData from "$lib/component/head-meta-data.svelte";
</script>

<svelte:head>
	<HeadMetaData {favicon} {preview} />
</svelte:head>
