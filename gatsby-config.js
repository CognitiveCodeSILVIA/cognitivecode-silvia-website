/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `cognitivecode-silvia-website`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      { name: "Home", link: "/" },
      { name: "Technology", link: "/technology" },
      { name: "Features", link: "/features" },
      { name: "Integrations", link: "/integrations" },
      { name: "Solutions", link: "/solutions" },
      { name: "Contact", link: "/contact" },
    ],
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
