import client from '$lib/sanityClient';

// Gets a specific blog post from its slug.current value
// but aside from the body, we should already have the rest of the data?
export async function GET({ params: { slug } }) {
	const post = await client.fetch(`*[_type == "post" && slug.current == "${slug}"][0]{
      title,
      author -> {
        name
      },
      publishedAt,
      body}`);
	if (post) {
		return {
			status: 200,
			body: {
				post
			}
		};
	}

	return {
		status: 404
	};
}
