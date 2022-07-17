<script>
	import Logo from './Logo.svelte';

	import { page } from '$app/stores';
	let path;
	$: path = $page.url.pathname;
	let innerWidth;

	let menuToggle = false;
	let handleClick = () => {
		menuToggle = !menuToggle;
	};
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 1024}<!-- mobile nav -->
	<div class="flex w-full fixed justify-end pt-8 px-10 z-20">
		<button on:click={handleClick} class="space-y-2">
			<div class="w-[40px] h-[3px] bg-white rounded-lg" />
			<div class="w-[40px] h-[3px] bg-white rounded-lg" />
			<div class="w-[40px] h-[3px] bg-white rounded-lg" />
		</button>
	</div>
	<div
		class="flex transition-all ease-in-out duration-300 fixed w-full h-screen items-center justify-center bg-appOrange {menuToggle
			? 'transform-none'
			: 'translate-x-full'}"
	>
		<nav class="flex items-center justify-center">
			<ul class="flex flex-col items-center space-y-6">
				<li>
					<a href="/">
						<Logo color="#272727" />
					</a>
				</li>
				<li>
					<a
						on:click={handleClick}
						class="{/^\/about/.test(path) ? 'text-appGrey' : 'text-white'} hover:text-appGrey"
						href="/about">About</a
					>
				</li>
				<li>
					<a
						on:click={handleClick}
						sveltekit:prefetch
						class="{/^\/work/.test(path) ? 'text-appGrey' : 'text-white'} hover:text-appGrey"
						href="/work/graphic-design">Work</a
					>
				</li>
				<li>
					<a
						on:click={handleClick}
						sveltekit:prefetch
						class="{/^\/blog/.test(path) ? 'text-appGrey' : 'text-white'} hover:text-appGrey"
						href="/blog">Blog</a
					>
				</li>
				<li>
					<a
						on:click={handleClick}
						class="{/^\/contact/.test(path) ? 'text-appGrey' : 'text-white'} hover:text-appGrey"
						href="/contact">Contact</a
					>
				</li>
			</ul>
		</nav>
	</div>
{:else}<!-- fullscreen nav -->
	<nav class="flex fixed w-full px-20 py-12 justify-between">
		<a href="/">
			<Logo />
		</a>
		<ul class="flex space-x-40 items-center text-xl transition-all duration-100">
			<li>
				<a
					class="{/^\/about/.test(path) ? 'text-appOrange' : 'text-white'} hover:text-appOrange"
					href="/about">About</a
				>
			</li>
			<li>
				<a
					sveltekit:prefetch
					class="{/^\/work/.test(path) ? 'text-appOrange' : 'text-white'} hover:text-appOrange"
					href="/work/graphic-design">Work</a
				>
			</li>
			<li>
				<a
					sveltekit:prefetch
					class="{/^\/blog/.test(path) ? 'text-appOrange' : 'text-white'} hover:text-appOrange"
					href="/blog">Blog</a
				>
			</li>
			<li>
				<a
					class="{/^\/contact/.test(path) ? 'text-appOrange' : 'text-white'} hover:text-appOrange"
					href="/contact">Contact</a
				>
			</li>
		</ul>
	</nav>
{/if}
