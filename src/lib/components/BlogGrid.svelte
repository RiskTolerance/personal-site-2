<script>
	export let posts;
</script>

{#if posts && posts.length}
	<div
		class=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-8 place-items-center bg-gray-700"
	>
		{#each posts as post}
			<a href={`/blog/${post.slug.current}`} class="w-full"
				><div
					data-tilt
					class="flex items-center justify-center place-self-center w-full h-64 bg-white"
				>
					<p>{post.title}</p>
				</div></a
			>
		{/each}
	</div>
{:else}
	<p>No posts found.</p>
{/if}
