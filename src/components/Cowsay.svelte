<script lang="ts">
	import { say } from "cowsay";
	export let message: string = "moo";
	let output: string = say({ text: message });
	console.log(output);
</script>

<template> <!-- --> </template>
