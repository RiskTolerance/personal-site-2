<script>
  import { page } from '$app/stores';
  import Logo from './Logo.svelte';
  let path;
  $: path = $page.url.pathname;
  let innerWidth; 
  
</script>

<svelte:window bind:innerWidth={innerWidth}/>

{#if innerWidth < 1024}
   <!-- mobile nav -->
   <nav class="flex fixed w-full justify-between pt-8 px-14">
    <a href="/">
      <Logo/>
    </a>
    <button class="space-y-2">
      <div class="w-[45px] h-[4px] bg-white rounded-lg"/>
      <div class="w-[45px] h-[4px] bg-white rounded-lg"/>
      <div class="w-[45px] h-[4px] bg-white rounded-lg"/>
    </button>
   </nav>
{:else}
   <!-- fullscreen nav -->
  <nav class="flex fixed w-full px-20 py-8 justify-between">
    <a href="/">
      <Logo/>
    </a>
    <ul class="flex space-x-40 items-center text-xl decoration-2 underline-offset-4 transition-all duration-100">
      <a class="{path === "/about" ? "text-appOrange underline " : "text-white"} hover:text-appOrange" href="/about">About</a>
      <a class="{path === "/work" ? "text-appOrange underline" : "text-white"} hover:text-appOrange" href="/work">Work</a>
      <a class="{path === "/blog" ? "text-appOrange underline" : "text-white"} hover:text-appOrange" href="/blog">Blog</a>
      <a class="{path === "/contact" ? "text-appOrange underline" : "text-white"} hover:text-appOrange" href="/contact">Contact</a>
    </ul>
  </nav>
{/if}

