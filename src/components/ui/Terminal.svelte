<style lang="postcss">
pre[data-language="css"] {
  --hljs-background: linear-gradient(135deg, #2996cf, 80%, white);
  --hljs-foreground: #fff;
  --hljs-radius: 8px;
}
</style>

<script lang="ts">
export let terminalData: Object[] = []; //usually a listy of objects
export let terminalName: string;
export let terminalCommand: string;
import { Highlight } from "svelte-highlight";
import typescript from "svelte-highlight/src/languages/typescript";
import tokyoNightDark from "./tokyo-night-dark.css";
$: code = `let bro:string = 'test'
const peace: Object = { test: 69, bro: "Broete" };`;
const peace: Object = { test: 69, bro: "Broete" };
// <pre>
//   <Highlight language="{typescript}" code="{code}" />
// </pre>;
</script>

<svelte:head>
  {@html tokyoNightDark}
</svelte:head>

<template>
  <div class="bg-terminalDarkGui rounded-xl top-0 border-2 border-gui m-6 ">
    <!-- sticky? -->
    <div class="flex">
      <img src="/favicon.ico" alt="test" class="ml-2 mt-1 h-8" />
      <h2 class="p-2 text-terminalDarkBlack">{terminalName}</h2>
      <div class="grow invisible"></div>
      <div
        class="rounded-full h-4 w-4 flex items-center justify-center bg-green-400 mt-2 mr-2">
      </div>
      <div
        class="rounded-full h-4 w-4 flex items-center justify-center bg-yellow-400 mt-2 mr-2">
      </div>
      <div
        class="rounded-full h-4 w-4 flex items-center justify-center bg-red-400 mt-2 mr-2">
      </div>
    </div>
    <div
      class="text-terminalDarkText bg-terminalDarkStorm max-h-96 m-2 overflow-y-auto overflow-x-clip JetBrainsMono py-2 ">
      {#if terminalData.length !== 0}
        {#each terminalData as msg, i}
          <li class="pl-2 ">
            [Aviary@User ~/{terminalName.replace(/ +/g, "")}]$
            <span class="text-terminalDarkGreen">{terminalCommand}</span><span
              class="text-terminalDarkBlack ">
              {`\t -o ${i}`}
              <pre><code
                  ><Highlight
                    language="{typescript}"
                    code="{JSON.stringify(msg, null, 4)}" /></code></pre>
            </span>
          </li>{/each}
      {:else}
        <pre><code
            ><Highlight
              class="text-terminalDarkBlack h-24"
              language="{typescript}"
              code="//waiting" /></code></pre>
      {/if}
    </div>
  </div></template>
