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

    <div className="hero bg-gray-100 flex justify-center">
      <div className="hero-content max-w-6xl">
        <h1>Hi, I’m John Koht, a full-stack product builder<br/> from Chicago with experience building<br/> impactful products &amp; teams.</h1>
        <LinkArrow url="/about/" text="Learn more about me" />
      </div>
    </div>

    <div class="container mx-auto work-container pb-40">
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

    <div class="bg-gray-100 py-40">
      <div class="container mx-auto">
        <div class="mb-20">
          <h2 className="mb-2">I like taking photos–whether I'm at home,<br class="invisible lg:visible" /> walking around Chicago, or traveling.</h2>
          <LinkArrow url="/photos/" text="View my shots" />
        </div>

        <div class="photo-gallery">
          {data.allPhotos.edges.map(({ node }) => (
            <Photo
              id={node.id}
              description={node.description}
              image={node.image}
              url={node.url}>
            </Photo>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
