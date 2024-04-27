<script lang="ts">
export let callbackFn: () => void;
export let hoverToggle: boolean = true;

let extraClass: string;
export { extraClass as class };

</script>

<button
	on:click={callbackFn}
	class={`inline-flex items-center justify-evenly m-2 px-1 shadow-sm rounded-md border-2 underline decoration-1 border-white  transition ease-in-out delay-100 hover:-translate-y-1`}
>
	<slot />
</button>

<style lang="postcss">
</style>
