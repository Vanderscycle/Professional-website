<script lang="ts">

	import Toggle from "$components/ui/Toggle.svelte";
	import Button from "$components/ui/Button.svelte";
	import { uiState } from "$stores/ui";
	import Heroicon from "$icons/Heroicons.svelte";
	import { sun as outlineSun } from "$icons/outline";
	import { moon as outlineMoon } from "$icons/outline";
	import { variables } from "$libs/internal/variables";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { sleep } from "$libs/internal/sleep";
	import { goto } from "$app/navigation";
	import { routes } from "$stores/routes";

	const unwantedRoutes: string[] = ["/projects"];

	let toggleState: boolean = false;
	let { darkMode } = uiState;
	let message: string = "Today Ukraine, tomorrow Europe. Stop Putin!";
	let visible: boolean = false;
	let filteredNav = $routes.filter((i) => !unwantedRoutes.includes(i.url));

	$: uiState.darkMode.set(!toggleState);

	onMount(async () => {
		await sleep(1500);
		visible = true;
	});
</script>

<div class="inline-flex w-full">
	  {#if variables.currentState === "dev"}
		    dark: {$darkMode}
		    <!-- {window.location.pathname} -->
	  {/if}
		<div class="mt-3 mx-2">
			{#if toggleState}
				<Heroicon icon={outlineSun} class={"text-Yellow"} />
			{:else}
				<Heroicon icon={outlineMoon} />
			{/if}
		</div>	
		<span class="mt-4 mx-2">
			<Toggle bind:toggleState class="" />
		</span>
		{#each filteredNav as navBtn}
			  <Button callbackFn={() => goto(navBtn.url)}>{navBtn.name}</Button>
    {/each}
		<div class="grow" />
	  <!-- <span class="underline decoration-sky-500">| DarkMode: {$darkMode} |</span> -->
	{#if visible}
	    <span class="m-4 justify-items-center" in:fade={{ duration: 1000 }}> {message} </span>
	{/if}
	<a href="https://u24.gov.ua/" target="noreferrer">
	    <img
	    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Lesser_Coat_of_Arms_of_Ukraine.svg"
	    alt="glory to the heroes"
	    width="32"
	    height="32"
	    class="m-2"
	    />
	</a>
</div>

<style lang="postcss">
</style>
