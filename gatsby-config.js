/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `https://example-site.com/graphql`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
