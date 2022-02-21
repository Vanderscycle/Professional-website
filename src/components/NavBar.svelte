<script lang="ts">
  // your script goes here

import Toggle from "./ui/Toggle.svelte";
import Heroicon from "$icons/Heroicon.svelte"
import {sun as outlineSun} from "$icons/outline"
import {moon as outlineMoon} from "$icons/outline"
let toggleState:boolean = false
$: toggleState
</script>

<template class ="">
  <div class="inline-flex w-full">
    {#if toggleState}
      <Heroicon icon={outlineSun}/>
    {:else }
      <Heroicon icon={outlineMoon}/>
    {/if}
    <span class="m-2">
      <Toggle bind:value={toggleState} class=""/>
    </span>
    <div class="grow"/>
  </div>
</template>

<style lang="postcss">
  /* your styles go here */
</style>
