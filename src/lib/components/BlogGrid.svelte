<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../../node_modules/vanilla-tilt/src/vanilla-tilt';
	import BlogGridCard from './BlogGridCard.svelte';

	export let posts;

	onMount(async () => {
		VanillaTilt.init(document.querySelectorAll('.tilt-item'), {
			reverse: true,
			max: 10,
			speed: 400,
			glare: false
		});
	});
</script>

{#if posts && posts.length}
	<div
		class=" w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-8"
	>
		{#each posts as post}
			<BlogGridCard {post} />
		{/each}
	</div>
{/if}
