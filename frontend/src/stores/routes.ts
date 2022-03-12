import type { NavigationButton } from "$lib/interfaces";
import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const routes: Writable<NavigationButton[]> = writable([
	{ url: "/", name: "/Home" },
	{ url: "/projects", name: "/Projects" },
	{ url: "/philosophy", name: "/Philosophy" },
	{ url: "/testbench", name: "/TestBench" },
	{ url: "/about", name: "/About" }
]);
