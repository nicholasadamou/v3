/* eslint-disable global-require */
require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Nicholas Adamou',
    description:
      'Nicholas Adamou - He is a IBM Software Engineer and an open source contributor.',
    author: 'Nicholas Adamou',
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
          articles: 'src/assets/articles',
          components: 'src/components',
          sections: 'src/sections',
          hooks: 'src/hooks',
          sass: 'src/sass',
          utilities: 'src/utilities',
        },
      },
    },
    'gatsby-transformer-remark',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: './src/assets/articles',
      },
      __key: 'articles',
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
