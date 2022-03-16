import { variables } from "$lib/variables";

const website = {
	author: "Henri Vandersleyen",
	ogLanguage: "en_CA",
	siteLanguage: "en_CA",
	keywords: "Web Software Developer Github Vandersleyen typescript golang",
	metadescription: "a website to show my portfolio and compencies",
	siteTitle: "software developer: Henri Vandersleyen",
	siteShortTitle: "Vandersleyen",
	siteUrl: variables.siteUrl ? variables.siteUrl : "",
	icon: "static/favicon.png",
	backgroundColor: "#1a1b26",
	contactEmail: variables.contactEmail ? variables.contactEmail : "hvandersleyen@duck.com",
	githubPage: variables.githubPage ? variables.githubPage : ""
};

export { website as default };
