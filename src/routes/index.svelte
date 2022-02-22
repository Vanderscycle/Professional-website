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
</script>
<div class="m-2">
  <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
  </ol>
</div>
  <div class="dark:bg-terminalDarkBg bg-terminalLightBg p-2 flex-grow h-screen">
    <ol class="static left-10 border-l border-gray-200 dark:border-green-700">
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
