module.exports = {
  siteMetadata: {
    title: 'Software Engineering I (CS 361) - Fall 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
  ],
}
