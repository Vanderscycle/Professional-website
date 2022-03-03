<script lang="ts">
export let callbackFn: () => void;

</script>

<template>
  <button 
  on:click={callbackFn}
  class="inline-flex items-center justify-evenly p-2
    shadow-sm rounded-md
    hover:bg-terminalDarkWhite hover:text-terminalDarkBg 
    border-double border-4 border-white"
  >
    <slot />
</button>
  </template>

<style lang="postcss"></style>
