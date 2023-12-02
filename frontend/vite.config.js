import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	alias: {
		$libs: path.resolve('./src/libs'),
		$routes: path.resolve('./src/routes'),
		$stores: path.resolve('./src/stores'),
		$components: path.resolve('./src/components')
	}
};

export default config;
