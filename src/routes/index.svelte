<script context="module" lang="ts">
	//The fetch function exposed on the server to fetch data to prerender the template
	// export async function load({fetch}){
	// }
</script>

<script lang="ts">
	import { variables } from "$lib/variables";
	import { slide } from "svelte/transition";
	import { fade } from "svelte/transition";
	const fillValue: string[] = ["why I do what I do", "how I apply my skills"];
	const paraValues: string[] = ["Purpose", "Skills"];
	let hoveringToggleArray: boolean[] = [false, false];
	let expandInfoArray: boolean[] = [false, false];
</script>

<svelte:head>
	<title>Bienvenue</title>
</svelte:head>

<div class="p-2 flex-grow h-screen dark:text-terminalDarkText text-terminalLightText">
	<div class="text-center">
		<h1 class="relative text-3xl">Henri Vandersleyen</h1>
		<p class="underline decoration-terminalDarkYellow">Software developer</p>
		<!-- AS per the docs the reason why Svetle want an on:blur and on:focus is to accomodate for keebs -->
		{#if variables.currentState === "dev"}
			Toggle status: {hoveringToggleArray}
			Opened status: {expandInfoArray}
		{/if}
		{#each paraValues as val, i}
			<div
				class="m-4"
				on:mouseover={() => (hoveringToggleArray[i] = !hoveringToggleArray[i])}
				on:mouseout={() => (hoveringToggleArray[i] = !hoveringToggleArray[i])}
				on:click={() => console.log("cick")}
			>
				<h1
					class="text-2xl cursor-pointer"
					in:fade
					out:fade
					on:click={() => (expandInfoArray[i] = !expandInfoArray[i])}
				>
					{#if !hoveringToggleArray[i]}
						{val}
					{:else}
						{fillValue[i]}
					{/if}
				</h1>
			</div>
			{#if expandInfoArray[i]}<div class="" transition:slide>Opened</div>{/if}
		{/each}
	</div>
</div>
