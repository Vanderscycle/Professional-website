 <script>
  // taken from
  //https://github.com/martinse/svelte-heroicons
  // will add a pr should I run into issues or find improvements
    export let icon;
    export let size = '1em';
   export {_class as class};

  let _class = ''
    let width = size || '1em'
    let height = size || '1em';
    let svgProps = icon['svg'];
    let paths = icon['paths'];
</script>


<svg class="{_class}" {...svgProps} {width} {height} xmlns="http://www.w3.org/2000/svg">
    {#each paths as pathProps}
      <path {...pathProps}/>
    {/each}
</svg>


<style>
    svg {
        position: relative;
        display: inline-block;
    }
</style>
