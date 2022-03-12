import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path from "path";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			optimizeDeps: {
				include: ["highlight.js/lib/core"]
			},
			resolve: {
				alias: {
					$components: path.resolve("./src/components"),
					$lib: path.resolve("./src/lib"),
					$api: path.resolve("./src/api"),
					$routes: path.resolve("./src/routes"),
					$stores: path.resolve("./src/stores"),
					$icons: path.resolve("./src/components/themes/icons"),
					$themes: path.resolve("./src/components/themes")
				}
			}
		}
	}
};

export default config;