<script lang="ts">
  // your script goes here

import Toggle from "./ui/Toggle.svelte";
import Heroicon from "$icons/Heroicon.svelte"
import {heart as outlineHeart} from "$icons/outline"

  
</script>

<template class ="">
  <div class="inline-flex w-full">
    <Heroicon icon={outlineHeart}/>
    <span class="m-2">
      <Toggle class=""/>
    </span>
    <div class="grow"/>
  </div>
</template>

<style lang="postcss">
  /* your styles go here */
</style>
