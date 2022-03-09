<script lang="ts">
	import Badge from "$components/ui/Badge.svelte";
	import Button from "$components/ui/Button.svelte";
	import QrCode from "$components/ui/QrCode.svelte";
	import { fade } from "svelte/transition";

	const src: string = "theMountain.jpg";
	let viewResume: boolean = false;
	const resumeUrl: string =
		"https://github.com/Vanderscycle/dot-config/blob/main/resume/HenriVandersleyenResume.pdf";
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<template>
	<div
		class="text-center flex flex-col justify-center items-center dark:text-terminalDarkText text-terminalLightText"
	>
		<h1 class="relative text-3xl py-4 underline">The mountain</h1>
		<a href="https://github.com/Vanderscycle" target="_blank" in:fade>
			<img
				{src}
				alt="The mountain"
				class=" rounded-full h-96 w-96 border-4 ring-4 ring-offset-4 ring-terminalBlackYellow my-4"
			/>
		</a>
		<a href="https://angeladuckworth.com/grit-book/" target="_blank">
			<p class="dark:text-terminalDarkText text-terminalLightText py-2 text-xl w-96">
				"Without effort, your talent is nothing more than unmet potential. Without effort, your
				skill is nothing more than what you could have done but didn't."
			</p>
		</a>
		<p class="dark:text-terminalDarkText text-terminalLightText">
			― Angela Duckworth, Grit: The Power of Passion and Perseverance
		</p>
		{#if !viewResume}
			<Button
				class="border-0 no-underline"
				hoverToggle={false}
				callbackFn={() => (viewResume = !viewResume)}
			>
				<Badge
					msg="View Resume"
					badgeColor="dark:bg-terminalDarkGreen bg-terminalLightGreen"
					badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
				/>
			</Button>
		{:else}
			<Button
				class="border-0 no-underline"
				hoverToggle={false}
				callbackFn={() => (viewResume = !viewResume)}
			>
				<Badge
					msg="Close"
					badgeColor="dark:bg-terminalDarkRed bg-terminalLightRed"
					badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
				/>
			</Button>
			<QrCode data={resumeUrl} simpleModalMsg="View resume online" />
		{/if}
	</div>
</template>

<style lang="postcss"></style>
