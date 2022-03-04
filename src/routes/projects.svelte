<script lang="ts">
	import ProjectCard from "$components/ProjectCard.svelte";
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<template>
	<div
		class="text-center flex flex-col justify-center items-center dark:text-terminalDarkText text-terminalLightText"
	>
		<h1 class="relative text-3xl  py-4 underline">Projects</h1>
		<div class="py-2">
			<ProjectCard><span slot="title">Dotfiles</span></ProjectCard>
		</div>
		<div class=" py-2">
			<ProjectCard><span slot="title">Profeesional Website</span></ProjectCard>
		</div>
	</div>
</template>

<style lang="postcss"></style>
