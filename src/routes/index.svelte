<script context="module" lang="ts">
	//The fetch function exposed on the server to fetch data to prerender the template
	// export async function load({fetch}){
	// }
</script>

<script lang="ts">
	// add neofetch style to show my competences
	import Terminal from "$components/ui/Terminal.svelte";
	import skills from "$lib/data/skillsCompetences.json";
	import whoami from "$lib/data/whoami.json";
	let message: string = "Hello There";

	// https://flowbite.com/docs/components/timeline/
</script>

<div class="dark:bg-terminalDarkBg bg-terminalLightBg p-2 flex-grow h-screen">
	<div class="text-center">
		<h1 class="relative text-3xl dark:text-terminalDarkText text-terminalLightText">
			Henri Vandersleyen
		</h1>
		<span class="dark:text-terminalDarkText text-terminalLightText"> Software developer</span>
	</div>
	<div class="grid">
		<div class="w-5/6 ">
			<Terminal terminalData={whoami} terminalName="Welcome" terminalCommand="greet" />
		</div>
		<div />
		<div class="inline-flex">
			<div class="w-1/6" />
			<div class="w-5/6">
				<Terminal terminalData={skills} terminalName="Skills " terminalCommand="whoami" />
			</div>
		</div>
	</div>
	<!-- <Cowsay {message} /> -->
</div>
