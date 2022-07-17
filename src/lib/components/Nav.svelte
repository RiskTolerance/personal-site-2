<script>
	import Logo from './Logo.svelte';

	import { page } from '$app/stores';
	let path;
	$: path = $page.url.pathname;
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 1024}
	<!-- mobile nav -->
	<nav class="flex fixed w-full justify-between pt-8 px-14">
		<a href="/">
			<Logo />
		</a>
		<button class="space-y-2">
			<div class="w-[45px] h-[4px] bg-white rounded-lg" />
			<div class="w-[45px] h-[4px] bg-white rounded-lg" />
			<div class="w-[45px] h-[4px] bg-white rounded-lg" />
		</button>
	</nav>
{:else}
	<!-- fullscreen nav -->
	<nav class="flex fixed w-full px-20 py-8 justify-between">
		<a href="/">
			<Logo />
		</a>
		<ul
			class="flex space-x-40 items-center text-xl decoration-2 underline-offset-4 transition-all duration-100"
		>
			<a
				class="{/^\/about/.test(path)
					? 'text-appOrange underline '
					: 'text-white'} hover:text-appOrange"
				href="/about">About</a
			>
			<a
				sveltekit:prefetch
				class="{/^\/work/.test(path)
					? 'text-appOrange underline'
					: 'text-white'} hover:text-appOrange"
				href="/work/graphic-design">Work</a
			>
			<a
				sveltekit:prefetch
				class="{/^\/blog/.test(path)
					? 'text-appOrange underline'
					: 'text-white'} hover:text-appOrange"
				href="/blog">Blog</a
			>
			<a
				class="{/^\/contact/.test(path)
					? 'text-appOrange underline'
					: 'text-white'} hover:text-appOrange"
				href="/contact">Contact</a
			>
		</ul>
	</nav>
{/if}
