import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
	projectId: 'czun42oa',
	dataset: 'production',
	apiVersion: '2022-03-24', // choose the API version you want
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};

export default client;
