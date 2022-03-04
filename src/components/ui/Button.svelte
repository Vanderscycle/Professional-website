<script lang="ts">
	import { uiState } from "$stores/ui";
	let extraClass: string;
	let { darkMode } = uiState;
	let hoverState: string = "";

	export let callbackFn: () => void;
	export { extraClass as class };

	$: hoverState = $darkMode
		? "hover:text-terminalLightWhite hover:bg-terminalLightBg hover:decoration-terminalLightRed"
		: "hover:text-terminalDarkWhite hover:bg-terminalDarkBg hover:decoration-terminalDarkRed";
</script>

<template>
	<button
		on:click={callbackFn}
		class={`inline-flex items-center justify-evenly m-2 px-1 shadow-sm rounded-md border-2 underline decoration-1 border-white ${hoverState} transition ease-in-out delay-100 hover:-translate-y-1`}
	>
		<slot />
	</button>
</template>

<style lang="postcss"></style>
