export default {
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'postType',
			title: 'Post Type',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'postType' } }]
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' }
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }]
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime'
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent'
		},
		{
			name: 'additionalImages',
			type: 'array',
			title: 'Additional Images & Descriptions',
			of: [
				{
					name: 'image',
					type: 'image',
					title: 'Image',
					options: {
						hotspot: true
					},
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative Text'
						},
						{
							name: 'imageText',
							title: 'Image Text',
							type: 'blockContent'
						}
					]
				}
			]
		}
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage'
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`
			});
		}
	}
};
