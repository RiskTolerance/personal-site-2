<script>
	import BlogGrid from '$lib/components/BlogGrid.svelte';
	import { onMount } from 'svelte';
	let posts = $$props.posts;
	onMount(() => console.log(posts[1].image));
</script>

<svelte:head>
	<title>Isaac Druin | Blog</title>
	<meta name="Blog" content="Meta description goes here!" />
	<html lang="en" />
</svelte:head>

<BlogGrid {posts} />
