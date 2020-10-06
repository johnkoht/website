import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/seo"
import LinkArrow from "components/link-arrow"
import BlogCard from "components/blog-card"

import "./blog.scss"

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date_published, order: DESC}) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          excerpt
          date_published(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout className="layout-blog">
      <SEO title="Blog" />

      <div class="container mx-auto pb-16 md:pb-32">
        <div className="mb-10 lg:mb-20 max-w-3xl mx-auto text-center">
          <h2 className="mb-2">
            Sometimes I write about building products &amp; custom software.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return(
              <BlogCard
                id={post.id}
                url={post.fields.slug}
                title={title}
                summary={post.frontmatter.excerpt || post.excerpt}
                date={post.frontmatter.date_published}
                key={post.id}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex
