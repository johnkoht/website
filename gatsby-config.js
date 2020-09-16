require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const workSchema = {
//   work: `
//     id: String
//     type: String
//     title: String
//     description: String
//     image: String
//     url: String
//     roles: Array
//   `,
//   client: `
//     company: String
//     logo: String
//     industry: String
//   `
// }

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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merriweather\:400`,
          `Open Sans\:300,400,700,800,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          images: `src/images`
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `${process.env.API_URL}/work`,
        rootKey: "work",
        schemas: {
          work: `
            id: String
            type: String
            title: String
            description: String
            image: String
            url: String
            roles: [String]
          `,
          client: `
            company: String
            logo: String
            industry: String
          `
        }
      }
    }
  ],
}
