<script>
export let title = 'title',
  subtitles = ['subtitles'];
</script>

<div class="-ml-44 flex flex-row items-baseline space-x-8 pr-20 mt-32">
    <h1 class="font-serif text-8xl">{title}</h1>
    {#each subtitles as subtitle}
        <div class="w-16 h-3 bg-white"></div>
        <h3 class="text-2xl whitespace-nowrap">{subtitle}</h3>
    {/each}
    <div class="w-full h-3 bg-white"></div>
</div>
