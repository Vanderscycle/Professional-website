<script lang="ts">
	// import "../app.css";
	import Navbar from "$components/layout/Navbar.svelte";
	// import Footer from "$components/Footer.svelte";
	// import { uiState } from "$stores/ui";
	// let { darkMode } = uiState;
	import Modal from "svelte-simple-modal";
	// import { SEOIndex } from "$components/SEO";

</script>


<div class="">
	<nav class="">
		<Navbar />
	</nav>
	<main class="">
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