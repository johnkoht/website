import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
import Image from "components/image"
import SEO from "components/seo"
import LinkArrow from "components/link-arrow"
import WorkCard from "components/work-card"
import Photo from "components/photo"

import "./index.scss"

export const query = graphql`
  {
    allWork {
      edges {
        node {
          description
          client {
            company
            industry
            logo
          }
          id
          image
          roles
          title
          type
          url
        }
      }
    }
    allPhotos {
      edges {
        node {
          id
          image
          url
          description
        }
      }
    }
  },
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <div className="hero homepage-hero bg-gray-100 flex justify-center">
      <div className="max-w-6xl px-4 sm:px-8 lg:px-0 hero-content">
        <h1>Hi, I’m John Koht, a full-stack product builder<br className="hidden lg:block" /> from Chicago with experience building<br className="hidden lg:block" /> impactful products &amp; teams.</h1>
        <LinkArrow url="/about/" text="Learn more about me" />
      </div>
    </div>

    <div className="max-w-screen-xl px-4 sm:px-8 lg:px-0 mx-auto work-container pb-20 md:pb-30 lg:pb-40">
      {data.allWork.edges.map(({ node }) => (
        <WorkCard
          key={node.id}
          id={node.id}
          title={node.title}
          description={node.description}
          client={node.client}
          type={node.type}
          url={node.url}
          image={node.image}
          roles={node.roles}>
        </WorkCard>
      ))}
    </div>

    <div className="bg-gray-100 px-4 sm:px-0 py-20 md:py-30 lg:py-40">
      <div className="max-w-screen-xl sm:px-8 lg:px-0 mx-auto">
        <div className="mb-10 lg:mb-20 max-w-6xl mx-auto">
          <h2 className="mb-2">I like taking photos–whether I'm at home,<br className="hidden lg:block" /> walking around Chicago, or traveling.</h2>
          <LinkArrow url="https://www.flickr.com/photos/johnkoht/" text="View my shots" />
        </div>

        <div className="photo-gallery">
          {data.allPhotos.edges.map(({ node }) => (
            <Photo
              id={node.id}
              description={node.description}
              image={node.image}
              url={node.url}
              key={node.id}>
            </Photo>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
