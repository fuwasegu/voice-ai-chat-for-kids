import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html',
			strict: true,
			pages: 'build',
			assets: 'build'
		}),
		alias: {
			'styled-system': './styled-system/*'
		},
		typescript: {
			config: (config) => {
				config.include.push("../styled-system");
				return config;
			}
		},
	}
};

export default config;
