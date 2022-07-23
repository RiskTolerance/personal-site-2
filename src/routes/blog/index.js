import client from '$lib/sanityClient';

export async function GET() {
	const data = await client.fetch(`*[_type == 'post']{
		title,
		slug,
		publishedAt,
		"image": mainImage.asset -> url,
		"blurHash": mainImage.asset -> metadata.blurHash,
		author -> {
			name
		}
	}`);
	console.log(data);
	if (data) {
		return {
			status: 200,
			body: {
				posts: data
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
