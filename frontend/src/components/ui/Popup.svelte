<script lang="ts">
	import { uiState } from "$stores/ui";
	let { darkMode } = uiState;

	export let message: string = "Hi";
	export let url: string = "";
	let hoverState: string = "";

	hoverState = $darkMode
		? "hover:text-White hover:bg-Bg hover:decoration-Red"
		: "hover:text-darkWhite hover:bg-darkBg hover:decoration-darkRed";
</script>

<p
	class={`text-center dark:text-darkText text-Text dark:bg-darkBg bg-Bg p-4 underline decoration ${hoverState}`}
>
	<a href={url} target="_blank">{message}</a>
</p>

<style lang="postcss">
</style>
