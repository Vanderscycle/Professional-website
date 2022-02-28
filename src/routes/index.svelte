<script context="module" lang="ts">
	//The fetch function exposed on the server to fetch data to prerender the template
	// export async function load({fetch}){
	// }
</script>

<script lang="ts">
	import Terminal from "$components/ui/Terminal.svelte";
	const terminalMsg: object[] = [{ msg: "Hello World" }, { msg2: "Hello World2" }];
	// https://flowbite.com/docs/components/timeline/
</script>

<div class="dark:bg-terminalDarkBg bg-terminalLightBg p-2 flex-grow h-screen">
	<h1 class="relative text-3xl dark:text-terminalDarkText text-terminalLightText">
		Henri Vandersleyen
	</h1>

	Linux Loving, Terminal centric, Motivated Software devloper
	<div class="grid">
		<div class="w-5/6 ">
			<Terminal terminalData={terminalMsg} terminalName="Welcome" terminalCommand="greet" />
		</div>
		<div class="inline-flex">
			<div class="w-1/6" />
			<div class="w-5/6">
				<Terminal terminalData={terminalMsg} terminalName="WhoAmI" terminalCommand="whoami" />
			</div>
		</div>
	</div>
</div>
