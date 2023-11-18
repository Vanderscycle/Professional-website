<script lang="ts">
	// Tailwind.css general config
	import "../app.css";
	import NavBar from "$components/NavBar.svelte";
	import Footer from "$components/Footer.svelte";
	import { uiState } from "$stores/ui";
	let { darkMode } = uiState;
	import Modal from "svelte-simple-modal";
	import { SEOIndex } from "$components/SEO";

</script>

<header>
	<SEOIndex />
</header>

<div class={$darkMode === true ? "dark h-full" : "h-full"}>
	<nav class="dark:bg-darkGui bg-Gui">
		<NavBar />
	</nav>
	<main class="dark:bg-darkBg bg-Bg h-screen">
		<Modal>
			<slot />
		</Modal>
	</main>
	<footer>
		<Footer />
	</footer>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
</style>
