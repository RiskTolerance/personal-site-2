<script>
	import { PortableText } from '@portabletext/svelte';
	let post = $$props.post;
</script>

<h2>{post.title}</h2>
<h4>{post.author.name}</h4>
<h4>
	{new Date(post.publishedAt).toLocaleDateString('en', {
		month: 'long',
		day: '2-digit',
		year: 'numeric'
	})}
</h4>

<PortableText value={post.body} />
