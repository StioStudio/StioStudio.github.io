<script>
	let { app, apps, data } = $props();
	let _app = apps[app];
	import Css from "./css.svelte";
</script>

<div class="app-preview app-preview-{app}" style="background: radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url({_app.background}), var(--a);">
	<Css
		css={`#${app}:target ~ .app-previews .app-preview-${app} {display: block;}`}
	/>
	<img src="{_app.title_image}" alt="">
	<!-- <div class="title">{_app.title}</div> -->
	<div class="description">{_app.description}</div>
	<a class="play" href="{_app.playLink}">Play</a>
</div>
