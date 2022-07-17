<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle title="Contact" subtitles={['Get in touch with me!']} />

<div class="mt-20 mx-40">
	<slot><!-- optional fallback --></slot>
</div>
