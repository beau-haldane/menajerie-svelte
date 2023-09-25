import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		},
		adapter: adapter({
			fallback: '200.html' // may differ from host to host
		})
	}
};

export default config;