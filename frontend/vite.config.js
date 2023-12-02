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
		// $api: path.resolve("./src/api"),
		$routes: path.resolve('./src/routes'),
		$stores: path.resolve('./src/stores')
	}
};

export default config;
