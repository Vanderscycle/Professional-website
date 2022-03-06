<script lang="ts">
	// Tailwind.css general config
	import "../app.css";
	import NavBar from "$components/NavBar.svelte";
	import Footer from "$components/Footer.svelte";
	import { uiState } from "$stores/ui";
	let { darkMode } = uiState;
	import Modal from "svelte-simple-modal";
</script>

<header>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</header>

<div class={$darkMode === true ? "dark h-full" : "h-full"}>
	<nav class="dark:bg-terminalDarkGui bg-terminalLightGui">
		<NavBar />
	</nav>
	<main class="dark:bg-terminalDarkBg bg-terminalLightBg  h-screen">
		<Modal>
			<slot />
		</Modal>
	</main>
	<footer>
		<Footer />
	</footer>
</div>
