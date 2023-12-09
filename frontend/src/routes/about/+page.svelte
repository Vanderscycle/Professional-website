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

<div class="text-center flex flex-col justify-center items-center dark:text-darkText text-Text">
	<a href="https://github.com/Vanderscycle" target="_blank" rel="noopener noreferrer" in:fade>
		<img
			{src}
			alt="The mountain"
			class=" rounded-full h-96 w-96 border-4 ring-4 ring-offset-4 ring-terminalBlackYellow my-4"
		/>
	</a>

	<h1 class="relative text-4xl">Grit</h1>
	<h1 class="underline decoration-darkYellow text-xl">When quiting isn't an option</h1>
	<a href="https://angeladuckworth.com/grit-book/" target="_blank" rel="noopener noreferrer">
		  <p class="dark:text-darkText text-Text py-2 text-xl w-[120]">
			"Without effort, your talent is nothing more than unmet potential.<br/>Without effort, your
			skill is nothing more than what you could have done but didn't."
		</p>
	</a>
	<p class="dark:text-darkText text-Text">
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
				badgeColor="dark:bg-darkGreen bg-Green"
				badgeTextColor=" dark:text-darkBlack text-Black"
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
				badgeColor="dark:bg-darkRed bg-Red"
				badgeTextColor=" dark:text-darkBlack text-Black"
			/>
		</Button>
		<QrCode data={resumeUrl} simpleModalMsg="View resume online" />
	{/if}
</div>

<style lang="postcss"></style>
