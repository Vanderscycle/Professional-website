<script lang="ts">
	import { uiState } from "$stores/ui";
	let { darkMode } = uiState;

	export let message: string = "Hi";
	export let url: string = "";
	let hoverState: string = "";

	hoverState = $darkMode
		? "hover:text-terminalLightWhite hover:bg-terminalLightBg hover:decoration-terminalLightRed"
		: "hover:text-terminalDarkWhite hover:bg-terminalDarkBg hover:decoration-terminalDarkRed";
</script>

<p
	class={`text-center dark:text-terminalDarkText text-terminalLightText dark:bg-terminalDarkBg bg-terminalLightBg p-4 underline decoration ${hoverState}`}
>
	<a href={url} target="_blank">{message}</a>
</p>

<style lang="postcss">
</style>
