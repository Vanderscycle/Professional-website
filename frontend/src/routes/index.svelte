<script context="module" lang="ts">
	//The fetch function exposed on the server to fetch data to prerender the template
	// export async function load({fetch}){
	// }
</script>

<script lang="ts">
	import { variables } from "$lib/variables";
	import { slide } from "svelte/transition";
	import { fade } from "svelte/transition";
	import skills from "$lib/data/skillsCompetences.json";
	import whoami from "$lib/data/whoami.json";
	import Terminal from "$components/ui/Terminal.svelte";
	import ApiEndpoint from "$components/ApiEndpoint.svelte";
	import type { Cipher } from "$lib/interfaces";

	const fillValue: string[] = [
		"Why I do what I do",
		"How I enact my vision",
		"What I am capable of"
	];
	const paraValues: string[] = ["Why?", "How?", "What?"];
	const textAboutMe: string[] = [whoami.why, whoami.how, skills];
	let hoveringToggleArray: boolean[] = [false, false];
	let expandInfoArray: boolean[] = [false, false];
	let apiCipherData: Cipher[];
	$: apiCipherData;
</script>

<svelte:head>
	<title>Bienvenue</title>
</svelte:head>

<div class="p-2 flex-grow h-screen dark:text-terminalDarkText text-terminalLightText">
	<div class="text-center flex flex-col justify-center items-center ">
		<h1 class="relative text-4xl">Henri Vandersleyen</h1>
		<p class="underline decoration-terminalDarkYellow text-xl">Software developer</p>
		<!-- AS per the docs the reason why Svetle want an on:blur and on:focus is to accomodate for keebs -->
		{#if variables.currentState === "dev"}
			Toggle status: {hoveringToggleArray}
			Opened status: {expandInfoArray}
		{/if}
		{#each paraValues as val, i}
			<div
				class="m-4 w-80 flex flex-col justify-center items-center border-2 border-white flex grow p-2 rounded-xl"
				on:mouseover={() => (hoveringToggleArray[i] = !hoveringToggleArray[i])}
				on:mouseout={() => (hoveringToggleArray[i] = !hoveringToggleArray[i])}
				on:click={() => console.log("cick")}
			>
				<h1
					class={`text-3xl cursor-pointer underline decoration-1`}
					in:fade
					out:fade
					on:click={() => (expandInfoArray[i] = !expandInfoArray[i])}
				>
					{#if !hoveringToggleArray[i] && !expandInfoArray[i]}
						{val}
					{:else}
						{fillValue[i]}
					{/if}
				</h1>
			</div>
			{#if expandInfoArray[i]}<div class="w-6/12" transition:slide>
					{#if i === 2}
						<Terminal
							terminalData={textAboutMe[i]}
							terminalName="Skills"
							terminalCommand={false}
						/>{:else}
						<p class="text-xl">{textAboutMe[i]}</p>{/if}
				</div>{/if}
		{/each}
		<ApiEndpoint bind:apiData={apiCipherData} endpoint="api/cipher" reqHttpMethod="POST" />
		{#if variables.currentState === "dev"}
			local
			<pre><code>{JSON.stringify(apiCipherData, null, 4)}</code></pre>
		{/if}
	</div>
</div>
