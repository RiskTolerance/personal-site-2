<script>
import PageTitle from '$lib/components/PageTitle.svelte';
import { PortableText } from '@portabletext/svelte';
let posts = $$props.posts
</script>

<PageTitle title="Home"/>

    <div class="px-20">
        <p>Hello</p>
        {#if posts && posts.length}
        <ul>
            {#each posts as post}
            <li>{post.title}</li>
            <PortableText value={post.body}/>
            {/each}
        </ul>
        {:else}
        <p>No animals found.</p>
        {/if}
    </div>
