<script context="module" lang="ts">
//The fetch function exposed on the server to fetch data to prerender the template
  // export async function load({fetch}){
  // }
</script>

<script lang="ts">

  
  import Terminal from "$components/ui/Terminal.svelte"
  const terminalMsg :object[] =  [
    { "msg":"Hello World"},
    { "msg2":"Hello World2"}
      ]
  // https://flowbite.com/docs/components/timeline/
</script>
  <div class="dark:bg-terminalDarkBg bg-terminalLightBg p-2 flex-grow h-screen">
    <ol class="static left-10 border-l border-red-200 dark:border-green-700">
      <h1 class="relative text-3xl dark:text-terminalDarkText text-terminalLightText">
      Henri Vandersleyen
      </h1>
      <div class="grid">
      <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-red-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <div class="w-5/6 ">
          <Terminal 
            terminalData={terminalMsg}
            terminalName="Welcome"
            terminalCommand="greet" />
        </div>
      </li>
        <div class="inline-flex">
          <div class="w-1/6"/>
          <div class="w-5/6">
            <Terminal 
              terminalData={terminalMsg}
              terminalName="WhoAmI"
              terminalCommand="whoami" />
          </div>
        </div>
      </div>
      </ol>
  </div>
