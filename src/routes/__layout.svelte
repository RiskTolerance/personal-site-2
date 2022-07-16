<script>
import "../app.css";
import Nav from '$lib/components/Nav.svelte'
</script>

<Nav/>

<div class="flex">
  <!-- left image -->
  <div class="w-1/3 h-screen sticky top-0 -z-10 bg-white">
  </div>
  <!-- right content -->
  <div class="w-2/3 pt-20">
    <slot />
  </div>
</div>