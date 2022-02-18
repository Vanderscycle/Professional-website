<script context="module" lang="ts">
//The fetch function exposed on the server to fetch data to prerender the template
  // export async function load({fetch}){
  // }

</script>

<script lang="ts">
  import Terminal from "$components/ui/Terminal.svelte"

</script>

<template >

<div class="bg-sky-500/75">
  <h1 class="text-3xl font-bold underline text-green-100">
  Henri Vandersleyen
</h1>
      <Terminal 
      terminalData="Hello World"
      terminalName="Mining results"
      terminalCommand="neofetch" 
    />
</div>
</template>
