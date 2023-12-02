import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const routes: Writable<any[]> = writable([
    { url: "/", name: "/Home" },
    { url: "/projects", name: "/Projects" },
    { url: "/about", name: "/About" }
]);
