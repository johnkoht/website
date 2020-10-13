import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "../components/seo"
import LinkArrow from "components/link-arrow"

import "./posts.scss"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  return (
    <Layout className="layout-blog layout-post" headerBackBtn="/blog/">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt || post.excerpt}
      />

      <div className="container mx-auto">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date_published}</p>
          </header>

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>

        <nav className="blog-post-nav">
          <ul className="flex flex-wrap justify-between p-0">
            <li className="blog-post-previous">
              {previous && (
                <LinkArrow
                  url={previous.fields.slug}
                  text={previous.frontmatter.title}
                  rel="prev"
                />
              )}
            </li>
            <li>
              {next && (
                <LinkArrow
                  url={next.fields.slug}
                  text={next.frontmatter.title}
                  rel="next"
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date_published(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`
