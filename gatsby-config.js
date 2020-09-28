/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Phoenix Karate`,
    description: `Karate With Purpose.`,
    author: `Ciaran McCullough`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#e3cce2`,
    //     theme_color: `#123052`,
    //     display: `minimal-ui`,
    //     icon: `${__dirname}/src/images/favicon.png`,
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `${process.env.URL}/graphql`,
      },
    },
  ],
}
