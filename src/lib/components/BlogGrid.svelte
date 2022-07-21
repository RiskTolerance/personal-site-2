<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../../node_modules/vanilla-tilt/src/vanilla-tilt';
	import client from '@sanity/client';
	import imgUrlBuilder from '@sanity/image-url';
	export let posts;

	const builder = imgUrlBuilder(client);

	function urlFor(source) {
		return builder.image(source);
	}

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
		class=" w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  auto-rows-auto gap-8 bg-gray-700"
	>
		{#each posts as post}
			<a href={`/blog/${post.slug.current}`} class="w-full"
				><div class="flex w-full  aspect-w-1 aspect-h-1">
					<div
						style="transform-style: preserve-3d; transform: perspective(1000px)"
						class="flex items-center justify-center p-12 blog-block"
					>
						{#if post.image && post.image.asset && post.image.asset._ref}
							{#await urlFor(post.image.asset._ref).url()}
								<p>loading</p>
							{:then value}
								<!-- <img src={value} alt="" /> -->
								<p>{value}</p>
							{:catch error}
								<p>no 2</p>
							{/await}
						{:else}
							<p>no</p>
						{/if}
						<p style="transform: translateZ(20px);">{post.title}</p>
					</div>
				</div></a
			>
		{/each}
	</div>
{:else}
	<p>No posts found.</p>
{/if}
