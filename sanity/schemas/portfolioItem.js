export default {
	name: 'portfolioItem',
	title: 'Portfolio Item',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
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
			name: 'artist',
			title: 'Artist',
			type: 'reference',
			to: { type: 'author' }
		},
		{
			name: 'categorties',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }]
		},
		{
			name: 'createdOn',
			title: 'Date Created',
			type: 'datetime'
		},
		{
			name: 'primaryImage',
			title: 'Primary Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'body',
			title: 'Body Text',
			type: 'blockContent'
		},
		{
			name: 'images',
			type: 'array',
			title: 'Images & Descriptions',
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
	]
};
