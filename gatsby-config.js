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
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/locales`,
                name: `locales`,
            },
        }
        
    ],

}