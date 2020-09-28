// Initialize dotenv
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`, // or '.env'
// })

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
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        // url: `${process.env.URL}/graphql`,
        url: `http://phoenixkarate.net/graphql`,
      },
    },
  ],
}
