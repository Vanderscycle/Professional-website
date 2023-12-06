<script lang="ts">
	let classStr = "";

	export { classStr as class };
	export let defaultPositionBgColor: string = "bg-darkYellow";
	export let toggledPositionBgColor: string = "bg-darkBlack";
	export let toggleState: boolean = false;
	export let timesToggled: number = 0;
</script>

<button
	type="button"
	class={`${classStr} default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkBlack`}
	role="switch"
	aria-checked="false"
	on:click={() => {
		toggleState = !toggleState;
		timesToggled += 1;
	}}
>
	<span class="sr-only">Use setting</span>
	<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
	<span
		aria-hidden="true"
		class={toggleState
			? `translate-x-5 slideBall ${defaultPositionBgColor}`
			: `translate-x-0 slideBall ${toggledPositionBgColor}`}
	/>
</button>

<style lang="postcss">
	.default {
		@apply bg-darkBg relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200;
		/* @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500; */
	}
	.slideBall {
		@apply pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200;
	}
</style>