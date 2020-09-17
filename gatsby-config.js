require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `John Koht`,
    description: `I'm a full-stack product builder from Chicago with experience building impactful products and teams.`,
    author: `@johnkoht`,
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
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        icon: `src/images/jk-logo.svg`,
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
            roles: [String],
            client: client
          `,
          client: `
            company: String
            logo: String
            industry: String
          `
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `${process.env.API_URL}/photos`,
        rootKey: "photos",
        schemas: {
          photo: `
            id: String
            description: String
            url: String
            image: String
          `
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `${process.env.API_URL}/about`,
        rootKey: "about",
        schemas: {
          about: `
            name: String
            first_name: String
            last_name: String
            birthdate: String
            avatar: String
            biography: String
            short_bio: String
            employment: employment
            education: education
            family: family
            links: [links]
            location: location
          `,
          employment: `
            company: String
            position: String
          `,
          education: `
            institution: String
            degree: String
            major: String
          `,
          family: `
            spouse: spouse
            children: [children]
          `,
          spouse: `
            name: String
            first_name: String
            last_name: String
          `,
          children: `
            name: String
            first_name: String
            last_name: String
            birthdate: String
          `,
          links: `
            site: String
            icon: String
            url: String
          `,
          location: `
            latitude: String
            longitude: String
            city: String
            state: String
            zip_code: String
          `
        }
      }
    }
  ],
}
