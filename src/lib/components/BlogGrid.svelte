<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../../node_modules/vanilla-tilt/src/vanilla-tilt';
	import { urlFor } from '../sanityClient';
	export let posts;

	onMount(async () => {
		console.log(posts);
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
		class=" w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  auto-rows-auto gap-8"
	>
		{#each posts as post}
			<a href={`/blog/${post.slug.current}`} class="w-full"
				><div class="flex w-full  aspect-w-1 aspect-h-1">
					<div
						style="transform-style: preserve-3d; transform: perspective(1000px)"
						class="flex items-center justify-center p-12 blog-block bg-black"
					>
						{#if post.image}
							{#await urlFor(post.image).height(500).url()}
								<p>loading</p>
							{:then value}
								<!-- <img src={value} alt="" /> -->
								<img
									class="absolute h-full object-cover -z-20 overflow-clip"
									loading="lazy"
									src={value}
									alt=""
								/>
							{:catch error}
								<p>no 2</p>
							{/await}
						{/if}
						<h2 class="text-white font-black" style="transform: translateZ(20px);">{post.title}</h2>
					</div>
				</div></a
			>
		{/each}
	</div>
{:else}
	<p>No posts found.</p>
{/if}
