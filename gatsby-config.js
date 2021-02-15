module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "qruoo0r7",
        dataset: "production",
        token:
          "sk8ydTOytCkM2UqemWOB9yQvDryXLoRDvOdsiFTvs54lLFuLM7yL0rKr4Q5YOtHWDHUKs8ZJhsG4Cgz3aWKvh8btOhTgJ1NMJOYKCltXXdVbxi1yVh8O6UTBw7Vj8dgc7OqSjYile2FslUfV7zJUCYsUJ4z8t0F8sE3eOySO7OcOJ0Vfzsas",
      },
    },
    // {
    //   resolve: "gatsby-source-sanity",
    //   options: {
    //     projectId: "hh2n880r",
    //     dataset: "production",
    //     token:
    //       "skiYYvMu8qHoketLXLxRYwsHnXKBYzdlSldRIfd8pUB50YSVYMPL2ut0bPFtDGGPsBQ4l3KvYf6YRXc3rDW1PLFD3ShUu6oR7tET4Y1Ed4HvlbOZYmZE5h2CxZ0qgV4lyzJo2Ljnw3mawy2Qtprv4dmNEjUW1YYdvEq4urwSdwUg4gZHpU3l",
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
