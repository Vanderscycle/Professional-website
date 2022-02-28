<script lang="ts">
	// your script goes here

	import Toggle from "./ui/Toggle.svelte";
	import { uiState } from "$stores/ui";
	import Heroicon from "$icons/Heroicon.svelte";
	import { sun as outlineSun } from "$icons/outline";
	import { moon as outlineMoon } from "$icons/outline";
	import { variables } from "$lib/variables";

	let toggleState: boolean = false;
	let { darkMode } = uiState;
	$: uiState.darkMode.set(!toggleState);
</script>

<template class="">
	{#if variables.currentState === "dev"}
		dark: {$darkMode}
	{/if}
	<div class="inline-flex w-full">
		<div class="mt-1.5 mx-2">
			{#if toggleState}
				<Heroicon icon={outlineSun} class={"text-terminalLightYellow"} />
			{:else}
				<Heroicon icon={outlineMoon} />
			{/if}
		</div>
		<span class="m-2">
			<Toggle bind:toggleState class="" />
		</span>
		<div class="grow" />
	</div>
</template>

<style lang="postcss">
	/* your styles go here */
</style>
