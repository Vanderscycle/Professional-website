<script lang="ts">
	import { GoRestClient } from "$lib/api/simpleApi";
	import { onMount } from "svelte";
	import { variables } from "$lib/variables";
	import type { Cipher } from "$lib/interfaces";
	import testData from "$lib/data/cipher.test.json";

	export const endpoint: string = "api/cipher";
	export let apiData: Cipher[] = [];
	export let localState: boolean = false;
	let api: GoRestClient = new GoRestClient(endpoint);
	let apiDB: GoRestClient = new GoRestClient("api/db");
	onMount(async () => {
		if (variables.currentState === "dev") {
			//drop db
			await apiDB.delete();
			const resNew: Cipher = await api.post(testData);
			if (resNew) {
				apiData = [...apiData, resNew];
			}
			const resAll: Cipher[] = await api.get();
			if (resAll) {
				apiData = [...resAll];
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
