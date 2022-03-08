<script lang="ts">
	// add neofetch style to show my competences
	import Terminal from "$components/ui/Terminal.svelte";
	import skills from "$lib/data/skillsCompetences.json";
	import whoami from "$lib/data/whoami.json";
	let message: string = "Hello There";

	// https://flowbite.com/docs/components/timeline/
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<div class="p-2 flex-grow h-screen dark:text-terminalDarkText text-terminalLightText">
	<div class="text-center">
		<h1 class="relative text-3xl">Henri Vandersleyen</h1>
		<p class="underline decoration-terminalDarkYellow">Software developer</p>
		<small class=""> (I am aware of the issue with dark/light mode)*</small>
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
</div>
