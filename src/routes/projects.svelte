<script lang="ts">
	import ProjectCard from "$components/ProjectCard.svelte";
	import Badge from "$components/ui/Badge.svelte";
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<template>
	<div
		class="text-center flex flex-col justify-center items-center dark:text-terminalDarkText text-terminalLightText"
	>
		<h1 class="relative text-3xl  py-4 underline">Projects</h1>
		<small
			class="underline decoration-wavy dark:decoration-terminalDarkRed decoration-terminalLightRed"
		>
			(Under construction)*</small
		>
		<div class="py-2">
			<ProjectCard><span slot="title">Dotfiles</span></ProjectCard>
		</div>
		<div class=" py-2">
			<ProjectCard
				><span slot="title">Profesional Website</span><span slot="description"
					>Repo of the website you are currently navigating</span
				><span slot="badges">
					<Badge
						msg="UnderConstruction"
						badgeColor="dark:bg-terminalDarkYellow bg-terminalLightYellow"
						badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
					/>
					<Badge
						msg="Bug"
						badgeColor="dark:bg-terminalDarkRed bg-terminalLightRed"
						badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
					/></span
				>
			</ProjectCard>
		</div>
	</div>
</template>

<style lang="postcss"></style>
