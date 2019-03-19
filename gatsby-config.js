module.exports = {
    siteMetadata: {
        title: 'Xinhe Hsu',
        menuLinks: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Work',
                link: '/works'
            },
            {
                name: 'About',
                link: '/about'
            }
        ]
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/locales`,
                name: `locales`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-136489395-1",
              // Puts tracking script in the head instead of the body
              head: true,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
            //   exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Enables Google Optimize using your container Id
            //   optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
              // Enables Google Optimize Experiment ID
            //   experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
              // Set Variation ID. 0 for original 1,2,3....
            //   variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
              // Any additional create only fields (optional)
              cookieDomain: "xinhehsu.com",
            },
          },
        
    ],

}