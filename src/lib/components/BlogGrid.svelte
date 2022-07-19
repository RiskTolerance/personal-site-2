<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../../node_modules/vanilla-tilt/src/vanilla-tilt';
	export let posts;

	onMount(async () => {
		VanillaTilt.init(document.querySelectorAll('.blog-block'), {
			reverse: true,
			max: 10,
			speed: 400,
			glare: true,
			'max-glare': 0.2
		});
	});
</script>

{#if posts && posts.length}
	<div
		class=" w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  auto-rows-auto gap-8 bg-gray-700"
	>
		{#each posts as post}
			<a href={`/blog/${post.slug.current}`} class="w-full"
				><div class="flex w-full  aspect-w-1 aspect-h-1">
					<div
						style="transform-style: preserve-3d; transform: perspective(1000px)"
						class="flex items-center justify-center p-12 blog-block bg-white"
					>
						<p style="transform: translateZ(20px);">{post.title}</p>
					</div>
				</div></a
			>
		{/each}
	</div>
{:else}
	<p>No posts found.</p>
{/if}
