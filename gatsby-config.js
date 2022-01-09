/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ivo Karadzhov`,
    siteUrl: `https://ivokaradzhov.com`,
    description: `Hi, I'm Ivo Karadzhov. I'm a full stack web developer from Bulgaria. I use WordPress, React and many more cool technologies to create beautiful website experiences.`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: "blurred"
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
  ],
}
