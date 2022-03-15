const website = {
	author: "Henri Vandersleyen",
	ogLanguage: "en_GB",
	siteLanguage: "en-GB",
	siteTitle: "Portfolio Henri Vandersleyen",
	siteShortTitle: "Portfolio",
	siteUrl: import.meta.env ? import.meta.env.VITE_SITE_URL : "",
	icon: "static/favicon.png",
	backgroundColor: "#1a1b26",
	contactEmail: import.meta.env ? import.meta.env.VITE_CONTACT_EMAIL : "hvandersleyen@gmail.com",
	githubPage: import.meta.env
		? import.meta.env.VITE_GITHUB_PAGE
		: "https://github.com/Vanderscycle/Professional-website"
};

export { website as default };
