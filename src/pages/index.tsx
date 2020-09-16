import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "components/layout/layout"
import Image from "components/image"
import SEO from "components/seo"
import LinkArrow from "components/link-arrow"

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
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <div className="hero bg-gray-100 flex justify-center">
      <div className="hero-content max-w-6xl">
        <h1>Hi, I’m John Koht, a full-stack product builder<br/> from Chicago with experience building<br/> impactful products &amp; teams.</h1>
        <LinkArrow url="/about/" text="Learn more about me" />

        <LinkArrow url="/about" text="Learn more about me" invert="true" />
      </div>
    </div>

    {JSON.stringify(data)}

    {data.allWork.edges.map(({ work }) => (
      <div>
        <strong>boom: </strong> {work.id}
      </div>
    ))}

  </Layout>
)

export default IndexPage
