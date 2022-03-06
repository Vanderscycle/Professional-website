<script lang="ts">
	import QRCode from "qrcode";
	import { onMount } from "svelte";
	export let data: string = "";
	let canvas;
	onMount(() => {
		QRCode.toCanvas(canvas, "sample text", { errorCorrectionLevel: "H" }, (error) => {
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
