import React from "react"
import { Link } from "gatsby"
import LinkArrow from "components/link-arrow"

import "./blog-card.scss"

interface BlogCardProps {
  id: string,
  url: string,
  title: string,
  summary: string
}

const BlogCard = ({
  id,
  url,
  title,
  summary
}: BlogCardProps) => {
  return (
    <div className="blog-card bg-white shadow-md rounded py-8 lg:py-16 px-4 lg:px-8 flex flex-col" id={id}>
      <div className="blog-card-stripe" />

      <div className="blog-card-content mb-12 lg:mb-24">
        <h3 className="font-serif text-2xl antialiased font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-700">{summary}</p>
      </div>

      <div className="blog-card-footer mt-auto">
        <LinkArrow url={url} text="Read the blog post" />
      </div>
    </div>
  )
}

export default BlogCard
