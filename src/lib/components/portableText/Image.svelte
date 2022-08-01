<script>
	import { onMount } from 'svelte';
	import { urlFor } from '../../sanityClient';
	export let portableText;

	console.log(portableText.value);
	let image;
	let imageLoaded = false;

	onMount(() => {
		if (image) {
			image.onload = () => {
				imageLoaded = true;
			};
		}
	});
</script>

{#await urlFor(portableText.value.asset).height(1000).url()}
	<p>loading...</p>
{:then src}
	<img bind:this={image} {src} alt="" />
{:catch error}
	<p>image failed to load</p>
{/await}
