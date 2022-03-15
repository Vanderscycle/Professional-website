<script lang="ts">
	//TODO: move it
	// import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';

	import website from "$lib/config/website";
	const { siteLanguage, siteTitle } = website;
	export let metadescription;
	export let title;
	// const pageTitle = `A;${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`A;;
</script>

<svelte:head>
	<!-- <title>{pageTitle}</title> -->
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang={siteLanguage} />
</svelte:head>
