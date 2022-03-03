<script lang="ts">
	export let callbackFn: () => void;
	import { uiState } from "$stores/ui";
	let { darkMode } = uiState;

	let hoverState: string = "";
	$: hoverState = $darkMode
		? "hover:bg-terminalLightWhite hover:text-terminalLightBg"
		: "hover:bg-terminalDarkWhite hover:text-terminalDarkBg";
</script>

<template>
	<button
		on:click={callbackFn}
		class={`inline-flex items-center justify-evenly m-2 px-1 shadow-sm rounded-md border-2 underline decoration-1 border-white ${hoverState}`}
	>
		<slot />
	</button>
</template>

<style lang="postcss"></style>
