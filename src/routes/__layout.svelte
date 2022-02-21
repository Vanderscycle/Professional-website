<script lang="ts">
  // Tailwind.css general config
  import "../app.css";
  import NavBar from "$components/NavBar.svelte"
  import Footer from "$components/Footer.svelte"
</script>

<header>
  <title>SSR and SvelteKit</title>
</header>

<div class="h-full">

  <nav class="bg-terminalDarkGui">
    <NavBar/>
  </nav>
  <main>
    <slot></slot>
  </main>
  <footer>
    <Footer/>
  </footer>

  </div>
