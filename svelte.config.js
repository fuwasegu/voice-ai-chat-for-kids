import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html',
			strict: true
		}),
		alias: {
			'styled-system': './styled-system/*'
		},
		typescript: {
			config: (config) => {
				config.include.push("./styled-system");
				return config;
			}
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
