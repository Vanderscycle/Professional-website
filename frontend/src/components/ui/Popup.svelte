<script lang="ts">
	import { uiState } from "$stores/ui";

	export let message: string = "Hi";
	export let url: string = "";

</script>

<p
	class={`text-center p-4 underline decoration`}
>
	<a href={url} target="_blank" rel="noopener noreferrer">{message}</a>
</p>

<style lang="postcss">
</style>
