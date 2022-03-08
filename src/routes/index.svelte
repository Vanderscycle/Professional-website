<script context="module" lang="ts">
	//The fetch function exposed on the server to fetch data to prerender the template
	// export async function load({fetch}){
	// }
</script>

<script lang="ts">
	const fillValue: string = "click me";
</script>

<svelte:head>
	<title>Bienvenue</title>
</svelte:head>

<div class="p-2 flex-grow h-screen dark:text-terminalDarkText text-terminalLightText">
	<div class="text-center">
		<h1 class="relative text-3xl">Henri Vandersleyen</h1>
		<p class="underline decoration-terminalDarkYellow">Software developer</p>
		<!-- AS per the docs the reason why there is -->
		<div on:mouseover={() => console.log("hovering")} on:mouseout={() => console.log("out")}>
			Purpose
		</div>
		<div>Skills</div>
	</div>
</div>
