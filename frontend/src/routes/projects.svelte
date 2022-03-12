<script lang="ts">
	import ProjectCard from "$components/ProjectCard.svelte";
	import Badge from "$components/ui/Badge.svelte";
	import { GoRestClient } from "$lib/api/simpleApi";
	import { onMount } from "svelte";
	import { variables } from "$lib/variables";
	import type { Cipher } from "$lib/interfaces";

	const hidden: boolean = true;
	//TODO: convert to an each loop
	let imgSrc: Cipher[] = [];
	let imgSrcCall: string[] = [
		"dot-config.svg",
		"Professional-website.svg",
		"BallOfNoodsWebsite.svg"
	];
	let api = new GoRestClient("https://avatars.dicebear.com/api/identicon", true);

	$: imgSrc;
	onMount(async () => {
		console.log(api);
		for (const address of imgSrcCall) {
			const res = await api.getSingle(address);
			if (res) {
				imgSrc = [...imgSrc, res];
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

		<div class="py-2">
			<ProjectCard url="https://github.com/Vanderscycle/dot-config">
				<span slot="img">
					{#if imgSrc[0]}
						<svg
							class="h-24 w-24 m-2 border-4 dark:border-terminalDarkWhite border-terminalLightWhite rounded-full"
							alt="doots">{@html imgSrc[0]}</svg
						>
					{/if}
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
					{#if imgSrc[1]}
						<svg
							class="h-24 w-24 m-2 border-4 dark:border-terminalDarkWhite border-terminalLightWhite rounded-full"
							alt="doots">{@html imgSrc[1]}</svg
						>
					{/if}
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
			<div />
			{#if !hidden}
				<div class=" py-2">
					<ProjectCard url="https://github.com/Vanderscycle/BallOfNoodsWebsite">
						<span slot="img">
							{#if imgSrc[2]}
								<svg
									class="h-24 w-24 m-2 border-4 dark:border-terminalDarkWhite border-terminalLightWhite rounded-full"
									alt="doots">{@html imgSrc[2]}</svg
								>
							{/if}
						</span>
						<span
							slot="title"
							class="text-xl underline  dark:decoration-terminalDarkMagenta decoration-terminalLightMagenta decoration-2"
							>Yarn Blog</span
						>
						<span slot="description">Blog made for a yarn enthusiast</span>
						<span slot="badges">
							<Badge
								msg="UnderConstruction"
								badgeColor="dark:bg-terminalDarkYellow bg-terminalLightYellow"
								badgeTextColor=" dark:text-terminalDarkBlack text-terminalLightBlack"
							/>
						</span>
					</ProjectCard>
				</div>
			{/if}
			<p
				class="underline decoration-4 underline-offset-8 mt-4 dark:decoration-terminalDarkYellow decoration-terminalLightYellow"
			>
				This is only the beginning
			</p>
		</div>
	</div>
</template>

<style lang="postcss"></style>
