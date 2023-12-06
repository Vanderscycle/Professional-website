<script lang="ts">
	import { uiState } from "$stores/ui";
	let { darkMode } = uiState;
	let extraClass: string;
	let hoverState: string = "";

	export let callbackFn: () => void;
	export let hoverToggle: boolean = true;
	export { extraClass as class };

	$: if (hoverToggle) {
		hoverState = $darkMode
			? "hover:text-White hover:bg-Bg hover:decoration-Red"
			: "hover:text-darkWhite hover:bg-darkBg hover:decoration-darkRed";
	}
</script>

<button
	on:click={callbackFn}
	class={`${extraClass} inline-flex items-center justify-evenly m-2 px-1 shadow-sm rounded-md border-2 underline decoration-1 border-white ${hoverState} transition ease-in-out delay-100 hover:-translate-y-1`}
>
	<slot />
</button>

<style lang="postcss">
</style>