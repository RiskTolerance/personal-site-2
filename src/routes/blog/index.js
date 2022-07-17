import client from '../../lib/sanityClient';

export async function GET() {
	const data = await client.fetch(`*[_type == 'post']{title,slug,author,publishedAt,body}`);
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
