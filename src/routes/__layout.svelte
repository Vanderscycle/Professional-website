<script lang="ts">
  // Tailwind.css general config
  import "../app.css";
  import NavBar from "$components/NavBar.svelte"
  import Footer from "$components/Footer.svelte"
    import {uiState} from "$stores/ui"

    let { darkMode } = uiState;

</script>

<header>
  <title>SSR and SvelteKit</title>
</header>

<div class="{$darkMode === true ? "dark h-full" : "h-full"}">

  <nav class="dark:bg-terminalDarkGui bg-terminalLightGui">
    <NavBar/>
  </nav>
  <main>
    <slot></slot>
  </main>
  <footer>
    <Footer/>
  </footer>

  </div>
