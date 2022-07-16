<script>
  import { page } from '$app/stores';
  import Logo from './Logo.svelte';
  let path;
  $: path = $page.url.pathname;
</script>

<nav class="flex fixed w-full px-20 py-8 justify-between">
  <a href="/">
    <Logo/>
  </a>
  <ul class="flex space-x-40 items-center text-xl decoration-4 underline-offset-4">
    <a class="{path === "/about" ? "text-orange-600 underline " : "text-white"}" href="/about">About</a>
    <a class="{path === "/blog" ? "text-orange-600 underline" : "text-white"}" href="/blog">Blog</a>
    <a class="{path === "/contact" ? "text-orange-600 underline" : "text-white"}" href="/contact">Contact</a>
    <a class="{path === "/work" ? "text-orange-600 underline" : "text-white"}" href="/work">Work</a>
  </ul>
</nav>