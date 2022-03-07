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

		<div class="py-2">
			<ProjectCard url="https://github.com/Vanderscycle/dot-config">
				<span slot="img">
					<img
						class="h-24 w-24 m-2 border-4 dark:border-terminalDarkWhite border-terminalLightWhite rounded-full"
						src="https://avatars.dicebear.com/api/identicon/https%3A%2F%2Fgithub.com%2FVanderscycle%2Fdot-config.svg"
						alt="doots"
					/>
				</span>
				<span
					slot="title"
					class="text-xl underline  dark:decoration-terminalDarkMagenta decoration-terminalLightMagenta decoration-2"
				>
					Dotfiles</span
				>
				<span slot="description">My Linux configuration</span>
				<span slot="badges">
					<Badge
						msg="Production"
						badgeColor="dark:bg-terminalDarkGreen bg-terminalLightGreen"
						badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
					/>
					<Badge
						msg="Linux"
						badgeColor="dark:bg-terminalDarkBlue bg-terminalLightBlue"
						badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
					/>
				</span></ProjectCard
			>
		</div>
		<div class=" py-2">
			<ProjectCard url="https://github.com/Vanderscycle/Professional-website">
				<span slot="img">
					<img
						class="h-24 w-24 m-2 border-4 dark:border-terminalDarkWhite border-terminalLightWhite rounded-full"
						src="https://avatars.dicebear.com/api/identicon/https%3A%2F%2Fgithub.com%2FVanderscycle%2FProfessional-website.svg"
						alt="doots"
					/>
				</span>
				<span
					slot="title"
					class="text-xl underline  dark:decoration-terminalDarkMagenta decoration-terminalLightMagenta decoration-2"
					>Professional Website</span
				>
				<span slot="description">Repo of the website you are currently navigating</span>
				<span slot="badges">
					<Badge
						msg="UnderConstruction"
						badgeColor="dark:bg-terminalDarkYellow bg-terminalLightYellow"
						badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
					/>
					<Badge
						msg="Bugs"
						badgeColor="dark:bg-terminalDarkRed bg-terminalLightRed"
						badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
					/>
				</span>
			</ProjectCard>
			<p
				class="underline decoration-4 underline-offset-8 mt-4 dark:decoration-terminalDarkYellow decoration-terminalLightYellow"
			>
				This is only the beginning
			</p>
		</div>
	</div>
</template>

<style lang="postcss"></style>
