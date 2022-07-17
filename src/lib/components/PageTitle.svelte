<script>
	import { page } from '$app/stores';
	let path;
	$: path = $page.params.type;
	export let title = 'title',
		subtitles = ['subtitles'];
</script>

<div
	class="lg:-ml-44 flex lg:flex-row flex-col items-center lg:items-baseline space-y-8 lg:space-x-8 lg:pr-20 -mt-44 lg:mt-32"
>
	<h1 class="font-serif">{title}</h1>
	{#each subtitles as subtitle}
		{#if subtitle.title !== undefined}
			<a href={`/${title.toLowerCase()}/${subtitle.path}`} class="flex lg:items-baseline space-x-8">
				<div class="w-16 min-w-[1rem] h-3 bg-white hidden lg:block" />
				<h3 class="lg:whitespace-nowrap {subtitle.path === path ? 'text-appOrange' : 'text-white'}">
					{subtitle.title}
				</h3>
			</a>
		{:else}
			<div class="w-16 min-w-[1rem] h-3 bg-white hidden lg:block" />
			<h3 class="lg:whitespace-nowrap">{subtitle}</h3>
		{/if}
	{/each}
	<div class="w-full h-3 bg-white hidden lg:block" />
</div>
