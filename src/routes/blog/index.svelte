<script>
	import BlogGrid from '$lib/components/BlogGrid.svelte';
	let posts = $$props.posts;
</script>

<svelte:head>
	<title>Isaac Druin | Blog</title>
	<meta name="Blog" content="Meta description goes here!" />
	<html lang="en" />
</svelte:head>

<BlogGrid {posts} />
