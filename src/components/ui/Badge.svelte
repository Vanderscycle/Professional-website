<script lang="ts">
	import { uiState } from "$stores/ui";
	let { darkMode } = uiState;
	let extraClass: string;
	export { extraClass as class };
	export let msg: string = "";
	export let badgeColor: string = "";
	export let badgeTextColor: string = "";
</script>

<template>
	<span
		class={`${extraClass} ${badgeColor} ${badgeTextColor} mx-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium`}
	>
		{msg}
	</span>
</template>
