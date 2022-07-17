<script>
  export let title = 'title',
  subtitles = ['subtitles'];
</script>

    <div class="lg:-ml-44 flex lg:flex-row flex-col items-center lg:items-baseline space-y-8 lg:space-x-8 lg:pr-20 -mt-44 lg:mt-32">
        <h1 class="font-serif">{title}</h1>
        {#each subtitles as subtitle}
        <div class="w-16 min-w-[1rem] h-3 bg-white hidden lg:block"/>
        <h3 class="lg:whitespace-nowrap">{subtitle}</h3>
        {/each}
        <div class="w-full h-3 bg-white hidden lg:block"/>
    </div>
