require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// And then you can use the config in gatsby-config.js
// const config = require("gatsby-plugin-config").default
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-fontawesome-css`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `${process.env.GATSBY_API_URL}/graphql`,
      },
    },
  ],
}
