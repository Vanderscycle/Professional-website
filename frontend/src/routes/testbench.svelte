<script lang="ts">
	import ApiEndpoint from "$components/ApiEndpoint.svelte";

	// add neofetch style to show my competences
	import Terminal from "$components/ui/Terminal.svelte";
	import skills from "$lib/data/skillsCompetences.json";
	import whoami from "$lib/data/whoami.json";
	import { variables } from "$lib/variables";
	let apiCipherData: Cipher[];

	// https://flowbite.com/docs/components/timeline/
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<div class="p-2 flex-grow h-screen dark:text-darkText text-Text">
	<div class="text-center">
		<h1 class="relative text-3xl">Henri Vandersleyen</h1>
		<p class="underline decoration-darkYellow">Software developer</p>
	</div>
	<div class="grid">
		<div class="w-5/6 ">
			<Terminal terminalData={whoami} terminalName="Welcome" terminalCommand={true} />
		</div>
		<div />
		<div class="inline-flex">
			<div class="w-1/6" />
			<div class="w-5/6">
				<Terminal terminalData={skills} terminalName="Skills " terminalCommand={false} />
			</div>
		</div>
		<ApiEndpoint bind:apiData={apiCipherData} endpoint="api/cipher" reqHttpMethod="GET" />
		{#if variables.currentState === "dev"}
			local
			<pre><code>{JSON.stringify(apiCipherData, null, 4)}</code></pre>
		{/if}
	</div>
</div>
