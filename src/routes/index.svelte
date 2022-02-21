<script context="module" lang="ts">
//The fetch function exposed on the server to fetch data to prerender the template
  // export async function load({fetch}){
  // }
</script>

<script lang="ts">

  import Terminal from "$components/ui/Terminal.svelte"
  const terminalMsg :object[] =  [
    { "msg":"Hello World"}
      ]
</script>
  <div class="dark:bg-terminalDarkBg bg-terminalLightBg p-2 flex-grow h-screen">
    <h1 class="text-3xl dark:text-terminalDarkText text-terminalLightText">
    Henri Vandersleyen
    </h1>
    <div class="w-5/6 ">
      <Terminal 
        terminalData={terminalMsg}
        terminalName="Mining results"
        terminalCommand="neofetch" />
    </div>
  </div>
