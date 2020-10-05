import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/seo"
import LinkArrow from "components/link-arrow"

import "./blog.scss"

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
        }
      }
    }
  }
`

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Blog" />

      <div className="max-w-4xl mx-auto mt-10 md:mt-40">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return(
            <div key={post.fields.slug} class="w-100 p-6 md:p-16 bg-gradient-to-br from-blue to-blue-light text-white">
              <span class="block mb-3">{post.frontmatter.date}</span>

              <h2 class="text-5xl">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <p class="mt-2 mb-12 text-2xl font-light max-w-2xl">{post.frontmatter.description}</p>

              <LinkArrow
                url={post.fields.slug}
                text="View blog post"
                invert="true"
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex
