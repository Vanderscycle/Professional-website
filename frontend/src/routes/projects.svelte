<script lang="ts">
	import ProjectCard from "$components/ProjectCard.svelte";
	import { GoRestClient } from "$lib/api/simpleApi";
	import { onMount } from "svelte";
	import { variables } from "$lib/variables";
	import projects from "$lib/data/projects.json";
	import type { Cipher } from "$lib/interfaces";
	import { httpMethodSwitch } from "$lib/helper";

	const hidden: boolean = true;
	let imgSrc: Cipher[] = [];

	export let apiData: Cipher[] = [];

	let api = new GoRestClient("https://avatars.dicebear.com/api/identicon", true);

	$: imgSrc;
	onMount(async () => {
		const filteredArr = projects.map((v) => v.imgSrcCall);

		for (const address of filteredArr) {
			const res = await httpMethodSwitch(api, apiData, "GET", address);
			if (res) {
				imgSrc = [...imgSrc, res];
				// console.log(imgSrc);
			} else {
				console.warn("error");
			}
		}
	});
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<template>
	<div
		class="text-center flex flex-col justify-center items-center dark:text-terminalDarkText text-terminalLightText"
	>
		<h1 class="relative text-3xl  py-4 underline">Projects</h1>
		{#each projects as project, i}
			{#if !project.hidden}
				<div class="py-2">
					<ProjectCard url={project[i]} badges={project.badges}>
						<span slot="img">
							{#if imgSrc[i]}
								<svg
									class="h-24 w-24 m-2 border-4 dark:border-terminalDarkWhite border-terminalLightWhite rounded-full"
									alt="doots">{@html imgSrc[i]}</svg
								>
							{/if}
						</span>
						<span
							slot="title"
							class="text-xl underline  dark:decoration-terminalDarkMagenta decoration-terminalLightMagenta decoration-2"
						>
							{project.title}</span
						>
						<span slot="description"> {project.description}</span>
						<!-- <span slot="badges" /> -->
					</ProjectCard>
				</div>
			{/if}
		{/each}
		<p
			class="underline decoration-4 underline-offset-8 mt-4 dark:decoration-terminalDarkYellow decoration-terminalLightYellow"
		>
			This is only the beginning
		</p>
	</div>
</template>

<style lang="postcss"></style>
