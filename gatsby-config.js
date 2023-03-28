/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Cognitive Code | Silvia`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      { name: "Home", link: "/" },
      { name: "Technology", link: "/technology" },
      { name: "Features", link: "/features" },
      { name: "Integrations", link: "/integrations" },
      { name: "Solutions", link: "/solutions" },
      { name: "Contact", link: "/contact" },
    ],
    externalLinks: [
      { name: "Terms & Conditions", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "Documentation", link: "/" },
      { name: "GitHub", link: "/" },
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
  ],
};
