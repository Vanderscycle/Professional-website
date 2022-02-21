<script lang="ts">
  // your script goes here

import Toggle from "./ui/Toggle.svelte";
import Heroicon from "$icons/Heroicon.svelte"
import {sun as outlineSun} from "$icons/outline"
import {moon as outlineMoon} from "$icons/outline"
let toggleState:boolean = false
</script>

<template class ="">    {toggleState}

  <div class="inline-flex w-full">
    <div class="m-2">
    {#if toggleState}
      <Heroicon icon={outlineSun}/>
    {:else }
      <Heroicon icon={outlineMoon}/>
    {/if}
        </div>
    <span class="m-2">
      <Toggle bind:toggleState={toggleState} class=""/>
    </span>
    <div class="grow"/>
  </div>
</template>

<style lang="postcss">
  /* your styles go here */
</style>
