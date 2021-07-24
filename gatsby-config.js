/* eslint-disable global-require */
require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Nicholas Adamou',
    description:
      'Nicholas Adamou - He is a IBM senior software engineer and an open source contributor.',
    author: 'Nicholas Adamou',
    siteUrl: 'https://nicholasadamou.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          assets: 'src/assets',
          images: 'src/assets/images',
          components: 'src/components',
		  contexts: 'src/contexts',
		  providers: 'src/providers',
          sections: 'src/sections',
          hooks: 'src/hooks',
          sass: 'src/sass',
          utilities: 'src/utilities',
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ]
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        },
      },
    },
  ],
};
