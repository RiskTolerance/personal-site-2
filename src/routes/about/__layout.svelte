<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle title="About" subtitles={['me!']} />

<div class="mt-20 mx-40">
	<slot><!-- optional fallback --></slot>
</div>
