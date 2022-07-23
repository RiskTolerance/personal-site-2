<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import { page } from '$app/stores';
	let path;
	$: path = $page.url.pathname;
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

<Nav />

<div class="flex flex-col lg:flex-row width--transition">
	<!-- TODO: look into dbounce -->
	{#if innerWidth > 1024}
		<div
			class="{path === '/'
				? 'w-1/3'
				: 'w-1/5'} h-screen sticky top-0 -z-10 width--transition mainbg bg-cover"
		/>
		<div class="{path === '/' ? 'w-2/3' : 'w-4/5'} pt-20 width--transition">
			<slot />
		</div>
	{:else}
		<div class="{path === '/' ? 'h-96' : 'h-64'} -z-10 mainbg bg-cover" />
		<div>
			<slot />
		</div>
	{/if}
</div>

<style>
	.mainbg {
		background-image: url(../lib/bg/1.webp);
	}
</style>
