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
        {
            resolve: 'gatsby-plugin-page-transitions',
            options: {
                transitionTime: 500
            }
        }
    ],

}