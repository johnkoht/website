import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/seo"
import LinkArrow from "components/link-arrow"
import BookCard from "components/book-card"

export const query = graphql`
  {
    allBooks {
      edges {
        node {
          author
          subtitle
          title
          edition
          read
          recommend
          links {
            url
            site
            icon
          }
        }
      }
      totalCount
    }
  }
`

const Bookshelf = ({data}) => {
  return (
    <Layout className="layout-blog">
      <SEO title="Blog" />

      <div class="container mx-auto pb-16 md:pb-32">
        <div className="mb-10 lg:mb-20 max-w-3xl mx-auto text-center">
          <h2 className="mb-2">
            My bookshelf. What I've read, want to read, or started and abandoned.
          </h2>
        </div>

        <div className="m-5 text-gray-700">
          <div className="mr-8 inline-block">
            <span className="book-legend book-legend-read mr-2"></span>Books I've read
          </div>

          <div className="inline-block">
            <span className="book-legend book-legend-unread mr-2"></span>Books I have not read
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8">
          {data.allBooks.edges.map(({ node }) => (
            <BookCard
              title={node.title}
              subtitle={node.subtitle}
              author={node.author}
              edition={node.edition}
              read={node.read}
              recommend={node.recommend}
              links={node.links}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Bookshelf
