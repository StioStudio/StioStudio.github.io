<script>
	import favicon from '$lib/assets/favicon.png';
	import preview from "$lib/assets/preview.png"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:image" content={preview}>
</svelte:head>

{@render children?.()}
