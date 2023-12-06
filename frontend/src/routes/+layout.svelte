<script lang="ts">
	import "../app.css";
	import Navbar from "$components/layout/Navbar.svelte";
	import Footer from "$components/layout/Footer.svelte";
	import { uiState } from "$stores/ui";
  import Modal from "svelte-simple-modal";
// import { SEOIndex } from "$components/SEO";

  let { darkMode } = uiState;

</script>


<div class='class={$darkMode === true ? "dark h-full" : "h-full"}'>
	<nav class="dark:bg-darkGui bg-Gui">
		<Navbar />
	</nav>
	<main class="">
		<Modal>
			<slot />
		</Modal>
	</main>
	<Footer/>
</div>

<style lang="postcss">
	@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
</style>
