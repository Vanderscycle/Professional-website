<script lang="ts">
	import Badge from "$components/ui/Badge.svelte";

	export let url: string = "";
	export let badges: Badge[] = [];
	// console.log(badges);
</script>

<template>
	<div class="border-2 border-white flex grow p-2 rounded-xl">
		<a href={url} target="_blank">
			<slot name="img">
				<span
					class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
					>Missing Image
				</span>
			</slot>
		</a>
		<div class="text-center flex flex-col justify-center items-center">
			<slot name="title">
				<span
					class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
					>Missing title
				</span>
			</slot>
			<slot name="description">
				<span
					class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
					>Missing description</span
				>
			</slot>
			<slot name="badges">
				{#if badges.length !== 0}
					<div class="flex inline-flex">
						{#each badges as badge}
							<Badge
								msg={badge.msg}
								badgeColor={`dark:bg-dark${badge.color} bg-${badge.color}`}
								badgeTextColor={`dark:text-dark${badge.text}  text-${badge.text}`}
							/>
						{/each}
					</div>
				{:else}
					<span
						class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
						>Missing badges</span
					>
				{/if}
			</slot>
		</div>
	</div>
</template>

<style lang="postcss"></style>
