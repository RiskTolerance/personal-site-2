<script>
	import { page } from '$app/stores';
	let path;
	$: path = $page.params.type;
	export let title = 'title',
		subtitles = ['subtitles'];
</script>

<div
	class="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:items-baseline  lg:mr-20 -mt-44 lg:mt-32 lg:-ml-44"
>
	<h1 class="pageTitle">{title}</h1>
	<div class="flex space-x-8 justify-center">
		{#each subtitles as subtitle}
			{#if subtitle.title !== undefined}
				<a
					href={`/${title.toLowerCase()}/${subtitle.path}`}
					class="flex lg:items-baseline lg:space-x-8"
				>
					<div class="w-16 min-w-[1rem] h-3 bg-white hidden lg:block" />
					<h2
						class="pageSubtitle whitespace-nowrap {subtitle.path === path
							? 'text-appOrange'
							: 'text-white'}"
					>
						{subtitle.title}
					</h2>
				</a>
			{:else}
				<div class="flex lg:items-baseline lg:space-x-8">
					<div class="w-16 min-w-[1rem] h-3 bg-white hidden lg:block" />
					<h2 class="pageSubtitle whitespace-nowrap">{subtitle}</h2>
				</div>
			{/if}
		{/each}
	</div>
	<div class="w-full h-3 bg-white hidden lg:block " />
</div>
