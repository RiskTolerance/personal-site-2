/** @type {import('@sveltejs/kit').ParamMatcher} */

export function match(param) {
	return param === 'graphic-design' || param === 'photography' || param === 'web-development'
		? true
		: false;
}
