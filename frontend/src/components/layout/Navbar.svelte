<script lang="ts">

	// import Toggle from "./ui/Toggle.svelte";
	// import { uiState } from "$stores/ui";
	// import Heroicon from "$icons/Heroicon.svelte";
	// import { sun as outlineSun } from "$icons/outline";
	// import { moon as outlineMoon } from "$icons/outline";
	// import { variables } from "$lib/variables";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { sleep } from "$libs/internal/sleep";
	// import { goto } from "$app/navigation";
	// import { routes } from "$stores/routes";

	// const unwantedRoutes: string[] = ["/philosophy", "/testbench"];

	let toggleState: boolean = false;
	// let { darkMode } = uiState;
	let message: string = "Today Ukraine, tomorrow Europe. Stop Putin!";
	let visible: boolean = false;

	// let filteredNav = $routes.filter((i) => !unwantedRoutes.includes(i.url));
	// $: uiState.darkMode.set(!toggleState);

	onMount(async () => {
		await sleep(1500);
		visible = true;
	});
</script>

<template class="">
	<div class="inline-flex w-full">
		<div class="grow" />
		{#if visible}
			<span class="m-4 justify-items-center" in:fade={{ duration: 1000 }}> {message} </span>
		{/if}
		<a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" target="_blank">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/9/95/Lesser_Coat_of_Arms_of_Ukraine.svg"
				alt="glory to the heroes"
				width="32"
				height="32"
				class="m-2"
			/>
		</a>
	</div>
</template>

<style lang="postcss">
</style>
