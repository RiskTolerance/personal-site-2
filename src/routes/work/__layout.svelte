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

<PageTitle title="Work" subtitles={subLinks} />
