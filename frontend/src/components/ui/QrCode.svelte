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
	import CopyToClipboard from "svelte-copy-to-clipboard";
	import { onMount } from "svelte";
	import { getContext } from "svelte";
	import Popup from "$components/ui/Popup.svelte";
	import Button from "$components/ui/Button.svelte";
	import Badge from "$components/ui/Badge.svelte";

	let canvas: HTMLCanvasElement;
	export let data: string = "";
	export let simpleModalMsg: string = "Follow link";
	export let hyperlink: boolean = false;
	const { open } = getContext("simple-modal");
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
		class="text-center flex flex-col justify-center items-center dark:text-darkText text-Text"
	>
		<canvas
			class="rounded-xl cursor-pointer"
			bind:this={canvas}
			on:click={() =>
				open(
					Popup,
					{ message: simpleModalMsg, url: data },
					{ closeButton: false },
					{
						open: () => {
							console.log("svelte allows you to do plenty of cool stuff, eh!");
						}
					}
				)}
		/>
		<CopyToClipboard text={data} let:copy>
			<Button class=" hidden border-0 no-underline" hoverToggle={false} callbackFn={() => copy}>
				<Badge
					msg="Copy to clipboard"
					badgeColor="dark:bg-darkBlue bg-Blue"
					badgeTextColor=" dark:text-darkBlack text-Black"
				/>
			</Button>
		</CopyToClipboard>
		{#if variables.currentState === "dev"}
			{data}
		{/if}
	</div>
</template>

<style lang="postcss"></style>
