require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `John Koht`,
    description: `I'm a full-stack product leader from Chicago with experience building impactful products and teams.`,
    author: `@johnkoht`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
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
        fonts: [`Merriweather\:300,400`, `Open Sans\:300,400,500,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          images: `src/images`,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://johnkoht.github.io/api/endpoints/work.json",
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
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://johnkoht.github.io/api/endpoints/photos.json",
        rootKey: "photos",
        schemas: {
          photo: `
            id: String
            description: String
            url: String
            image: String
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://johnkoht.github.io/api/endpoints/about.json",
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
            kids: [kids]
          `,
          spouse: `
            name: String
            first_name: String
            last_name: String
          `,
          kids: `
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
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://johnkoht.github.io/api/endpoints/books.json",
        rootKey: "books",
        schemas: {
          book: `
            title: String
            subtitle: String
            author: String
            edition: String
            read: String
            recommend: String
            links: [links]
          `,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-3980909-14"
      },
    },
  ],
}
