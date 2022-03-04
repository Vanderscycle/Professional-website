<script lang="ts">
</script>

<template>
	<div class="border-2 border-white flex grow p-2 rounded-xl">
		<slot name="img">
			<span class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
				>Missing Image
			</span>
		</slot>
		<div class="text-center flex flex-col justify-center items-center">
			<slot name="title">
				<span
					class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
					>Missing Title
				</span>
			</slot>
			<slot name="Description">
				<span
					class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
					>Missing Description</span
				>
			</slot>
			<slot name="Badges">
				<span
					class="underline text-red-500 rounded-xl bg-yellow-400 p-2 m-2 border-2 border-blue-400"
					>Missing Badges</span
				>
			</slot>
		</div>
	</div>
</template>

<style lang="postcss"></style>
