import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	alias: {
		$lib: path.resolve('./src/lib'),
		// $api: path.resolve("./src/api"),
		$routes: path.resolve('./src/routes'),
		$stores: path.resolve('./src/stores')
	}
};

export default config;
