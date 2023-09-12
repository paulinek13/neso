import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// see the 'Deployment configuration' section below
		})
	},
	preprocess: vitePreprocess()
};
export default config;