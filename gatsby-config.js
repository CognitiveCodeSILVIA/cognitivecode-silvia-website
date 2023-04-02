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
    homePageCopy: {
      hero: {
        header: "Conversational Intelligence.",
        paragraph:
          "SILVIA is an automated NLP natural language interface that allows content creators to produce next-level conversationally immersive engaging experiences. ",
      },
      about: {
        header: "What is SILVIA?",
        paragraph:
          "SILVIA is an automated NLP natural language interface that allows content creators to produce next-level conversationally immersive engaging experiences. Our AI developer’s platform represents the perfect interface that allows you to breathe life into your content so that you can create highly engaging conversational experiences for a myriad of uses in such fields as gaming, training, and education. With our patented technology, you can now transform and connect your content to entirely new mediums of conversational experiences.",
      },
    },
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
