<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { PortableText } from '@portabletext/svelte';
	let posts = $$props.posts;
</script>

<PageTitle title="Blog" subtitles={['Thoughts and things.']} />

{#if posts && posts.length}
	<div
		class=" w-full px-32 pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 place-items-center bg-gray-700"
	>
		{#each posts as post}
			<a href={`/blog/${post.slug.current}`}
				><div class="flex items-center justify-center place-self-center w-96 h-64 bg-white">
					<p>{post.title}</p>
				</div></a
			>
		{/each}
	</div>
{:else}
	<p>No posts found.</p>
{/if}
