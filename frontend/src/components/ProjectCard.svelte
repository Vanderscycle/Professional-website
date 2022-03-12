<script lang="ts">
	export let url: string = "";
	import { fade } from "svelte/transition";
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
				<span
					class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
					>Missing badges</span
				>
			</slot>
		</div>
	</div>
</template>

<style lang="postcss"></style>
