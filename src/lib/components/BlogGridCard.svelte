<script>
	import { urlFor } from '../sanityClient';
	export let post;
</script>

<a href={`/blog/${post.slug.current}`} class="w-full"
	><div class="flex w-full aspect-w-1 aspect-h-1 overflow-clip">
		{#if post.image}
			{#await urlFor(post.image).height(500).url()}
				<p>loading</p>
			{:then value}
				<div
					style="transform-style: preserve-3d; transform: perspective(1000px)"
					class="flex items-center justify-center p-12 absolute tilt-item w-full h-full"
				>
					<img
						style="transform: translateZ(-100px);"
						class="absolute h-[135%] min-w-[135%] w-[135%] object-cover -z-10 "
						loading="lazy"
						src={value}
						alt=""
					/>
					<h2 class="text-white font-black" style="transform: translateZ(20px);">{post.title}</h2>
				</div>
			{:catch error}
				<p>image failed to load</p>
			{/await}
		{:else}
			<div class="absolute h-full w-full bg-appOrange -z-10" />
		{/if}
	</div></a
>
