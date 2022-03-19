<script lang="ts">
	import { Highlight } from "svelte-highlight";
	import { uiState } from "$stores/ui";
	import typescript from "svelte-highlight/src/languages/typescript";
	import tokyoNightDark from "$themes/tokyo-night-dark.css";
	import tokyoNightLight from "$themes/tokyo-night-light.css";

	export let terminalData: Object[] = []; //usually a listy of objects
	export let terminalName: string;
	export let terminalCommand: boolean = false;
	export let terminalFileLocation: string = "~";
	export let terminalRootName: string = "Linux";
	let extraClass: string = "";
	export { extraClass as class };

	let { darkMode } = uiState;
	// :$ $darkMode
	$: $darkMode ? tokyoNightDark : tokyoNightLight;
</script>

<svelte:head>
	<!-- {@html tokyoNightDark} -->
</svelte:head>

<template>
	<small class=""> (I am aware of the issue with dark/light mode)*</small>
	<div
		class="dark:bg-darkGui bg-Gui
    rounded-xl top-0 border-2 border-gui m-6 "
	>
		<!-- sticky? -->
		<div class="flex pt-1 pr-1">
			<img src="favicon.png" alt="x" class="ml-2 mt-1 h-8" />
			<div class="grow invisible" />
			<h2
				class="mt-1 p-1 ml-6 dark:text-darkText text-Text 
        dark:bg-darkBg bg-Bg rounded-xl
        "
			>
				<!-- outline-none ring-2 ring-offset-2 ring-darkBlack -->
				{terminalName}
			</h2>
			<div class="grow invisible" />
			<div class="rounded-full h-4 w-4 flex items-center justify-center bg-green-400 mt-2 mr-2" />
			<div class="rounded-full h-4 w-4 flex items-center justify-center bg-yellow-400 mt-2 mr-2" />
			<div class="rounded-full h-4 w-4 flex items-center justify-center bg-red-400 mt-2 mr-2" />
		</div>
		<!--TODO: add maximum height -->
		<div
			class="dark:text-darkText dark:bg-darkBg text-Text bg-Bg 
      max-h-96 m-2 overflow-y-auto break-normal py-2 text-left"
		>
			{#if terminalData.length !== 0}
				{#each terminalData as msg}
					<li class="pl-2 list-none">
						{#if terminalCommand}
							[{terminalRootName}@Henri {terminalFileLocation}]$
						{/if}
						<pre><code
								><Highlight
									language={typescript}
									class=""
									code={JSON.stringify(msg, null, 4)}
								/></code
							></pre>
						<!-- </span> -->
					</li>
				{/each}
			{:else}
				<pre>
          <code>
            <Highlight class="h-24" language={typescript} code="//waiting" />
          </code>
        </pre>
			{/if}
		</div>
	</div>
</template>

<style lang="postcss">
	pre[data-language="css"] {
		--hljs-background: linear-gradient(135deg, #2996cf, 80%, white);
		--hljs-foreground: #fff;
		--hljs-radius: 8px;
	}
</style>
