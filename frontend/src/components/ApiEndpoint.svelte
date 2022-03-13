<script lang="ts">
	import { GoRestClient } from "$lib/api/simpleApi";
	import { onMount } from "svelte";
	import { variables } from "$lib/variables";
	import type { Cipher } from "$lib/interfaces";
	import testData from "$lib/data/cipher.test.json";

	export const endpoint: string = "api/cipher";
	export let apiData: Cipher[] = [];
	export let localState: boolean = false;
	export let reqHttpMethod: string = "GET";
	export let reqIndex: number = 0;
	export let payload: Cipher;
	// const httpMethod: string[] = ["GET", "POST", "DELETE", "PATCH"];
	let api: GoRestClient = new GoRestClient(endpoint);
	let apiDB: GoRestClient = new GoRestClient("api/db");
	onMount(async () => {
		if (variables.currentState === "dev") {
			//drop db
			await apiDB.delete(reqIndex);
			const res = await httpMethodSwitch(apiData, reqHttpMethod, reqIndex, payload);
			// const resNew: Cipher = await api.post(testData);
			// if (resNew) {
			// 	apiData = [...apiData, resNew];
			// }
			// const resAll: Cipher[] = await api.get();
			// if (resAll) {
			// 	apiData = [...resAll];
			// console.log(res);
			// } else {
			// 	console.warn("error");
			// }
		}
	});
	//make it unherit the type
	async function httpMethodSwitch(apiData: any, method: string, index?: number, payload?: object) {
		let res: any;
		switch (method) {
			case "GET":
				res = await api.get(index);
				apiData = [...res];
				break;
			case "POST":
				res = await api.post(payload ? payload : testData);
				apiData = [...apiData, res];
				break;
			case "DELETE":
				res = await api.delete(reqIndex);
				apiData = apiData.filter((v) => v.ID !== index);
				break;
			case "PATCH":
				res = await api.patch(index, payload ? payload : testData);
				apiData = [...apiData, res];
				break;
		}
		if (!res) {
			console.warn("error");
		} else {
			return apiData;
		}
	}
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
