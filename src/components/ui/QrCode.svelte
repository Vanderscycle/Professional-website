<script lang="ts">
	// let testdata = {
	// 	id: 1,
	// 	name: "User",
	// 	email: "user@gmail.com"
	// };
	// console.log(JSON.stringify(testdata));
	//lib from https://github.com/soldair/node-qrcode
	import { variables } from "$lib/variables";
	import QRCode from "qrcode";
	import { onMount } from "svelte";
	export let data: string = "";

	let canvas: HTMLCanvasElement;
	onMount(() => {
		QRCode.toCanvas(canvas, data, { errorCorrectionLevel: "H" }, (error) => {
			if (error) {
				console.error(error);
			} else {
				console.log("success!");
			}
		});
	});
</script>

<template>
	<div
		class="text-center flex flex-col justify-center items-center dark:text-terminalDarkText text-terminalLightText"
	>
		<canvas class="rounded-xl" bind:this={canvas} />
		{#if variables.currentState === "dev"}
			{data}
		{/if}
	</div>
</template>

<style lang="postcss"></style>
