<script>
	import { onMount } from 'svelte';
	import { urlFor } from '../../sanityClient';
	export let portableText;
	let image = portableText.value.asset;
	let imageLoaded = false;

	onMount(() => {
		if (image) {
			image.onload = () => {
				console.log(image);
				imageLoaded = true;
			};
		}
	});
</script>

<div>
	<h1>this is an image</h1>
</div>
