const sitemap = require("nextjs-sitemap-generator");

sitemap({
	alternateUrls: {
		en: "http://lesnaya-gavan.ru/"
	},
	baseUrl: "http://lesnaya-gavan.ru/",
	ignoredPaths: ["admin"],
	extraPaths: ["/extraPath"],
	pagesDirectory: __dirname + "\\pages",
	targetDirectory: "static/",
	nextConfigPath: __dirname + "\\next.config.js",
	ignoredExtensions: ["png", "jpg"],
	pagesConfig: {
		"/login": {
			priority: "0.5",
			changefreq: "daily"
		}
	},
	sitemapStylesheet: [
		{
			type: "text/css",
			styleFile: "/styles/index.css"
		},
		{
			type: "text/xsl",
			styleFile: "test/test/styles.xls"
		}
	]
});

console.log(`✅ sitemap.xml generated!`);
