<script lang="ts">
	import { GoRestClient } from "$lib/api/simpleApi";
	import { onMount } from "svelte";
	import { variables } from "$lib/variables";
	import type { Cipher } from "$lib/interfaces";

	export const endpoint: string = "api/cipher";
	export let apiData: Cipher[] = [];
	export let localState: boolean = false;
	let api: GoRestClient = new GoRestClient(endpoint);
	onMount(async () => {
		if (variables.currentState === "dev") {
			const res: Cipher[] = await api.get();
			if (res) {
				apiData = res;
				// console.log(res);
			} else {
				console.warn("error");
			}
		}
	});
</script>

<template>
	{#if variables.currentState === "dev" && localState}
		<div>
			<pre><code>{JSON.stringify(apiData, null, 4)}</code></pre>
		</div>
	{:else}<span title="Cipher"><slot /></span>{/if}
</template>

<style lang="postcss">
	/* your styles go here */
</style>
