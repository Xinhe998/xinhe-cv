module.exports = {
    pathPrefix: '/docs',
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
        //   {
        //     resolve: `gatsby-plugin-i18next`,
        //     options: {
        //       availableLngs: ['en', 'zh-tw'],
        //       fallbackLng: 'en',
        //       saveMissing: true,
        //       debug: true,
        //     },
        //   },
        //   {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //       path: `./src/locales`,
        //       name: `locale`,
        //     },
        //   },
    ],

}