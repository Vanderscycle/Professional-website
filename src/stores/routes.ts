import type { navigationButton } from "$lib/interfaces";
import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const routes: Writable<navigationButton[]> = writable([
	{ url: "/", name: "/Home" },
	{ url: "/projects", name: "/Projects" },
	{ url: "/philosophy", name: "/Philosophy" },
	{ url: "/about", name: "/About" }
]);
