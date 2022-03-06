<script lang="ts">
	//lib from https://github.com/soldair/node-qrcode
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
	<div class="text-center flex flex-col justify-center items-center">
		<canvas bind:this={canvas} />
		{data}
	</div>
</template>

<style lang="postcss"></style>
