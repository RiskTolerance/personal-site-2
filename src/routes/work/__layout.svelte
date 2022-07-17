<script>
	import PageTitle from '$lib/components/PageTitle.svelte';

	let subLinks = [
		{
			title: 'Graphic Design',
			path: 'graphic-design'
		},
		{
			title: 'Web Development',
			path: 'web-development'
		},
		{
			title: 'Photography',
			path: 'photography'
		}
	];
</script>

<svelte:head>
	<title>Isaac Druin | Work</title>
	<meta name="Work" content="Meta description goes here!" />
	<html lang="en" />
</svelte:head>

<PageTitle title="Work" subtitles={subLinks} />

<div class="mt-20 mx-40">
	<slot><!-- optional fallback --></slot>
</div>
