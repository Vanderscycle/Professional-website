import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
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
});

