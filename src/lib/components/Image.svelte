<script>
	import { onMount } from 'svelte';

	export let portableText;
	onMount(() => console.log(portableText['value'].asset._ref));
</script>
