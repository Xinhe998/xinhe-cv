module.exports = {
  siteMetadata: {
    title: "Xinhe Hsu",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Work",
        link: "/works",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    // "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/Assets`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-136489395-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "UA-136489395-1",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // // Setting this parameter is also optional
          // respectDNT: true,
          // // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-html-minifier",
      options: {
        caseSensitive: false,
        collapseBooleanAttributes: false,
        useShortDoctype: false,
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        develop: true, // Enable on `gatsby develop`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
