<script>
	import BlogGrid from '$lib/components/BlogGrid.svelte';
	import { blogPosts } from '../../stores';
	export let posts;
	blogPosts.set(posts);
</script>

<svelte:head>
	<title>Isaac Druin | Blog</title>
	<meta name="Blog" content="Meta description goes here!" />
	<html lang="en" />
</svelte:head>

<BlogGrid {posts} />
