<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle title="Blog" subtitles={['Thoughts and things.']} />

<div class="mt-20 mx-20 lg:mx-40">
	<slot><!-- optional fallback --></slot>
</div>
