import React from "react"
import { Link } from "gatsby"
import LinkArrow from "components/link-arrow"

import "./blog-card.scss"

interface BlogCardProps {
  id: string
  url: string
  title: string
  summary: string
  date: string
}

const BlogCard = ({ id, url, title, summary, date }: BlogCardProps) => {
  return (
    <div className="blog-card py-8 lg:py-16 px-4 lg:px-8 flex flex-col" id={id}>
      <div className="blog-card-stripe" />

      <div className="blog-card-content mb-12 lg:mb-16">
        <span className="block mb-4 text-gray-500">{date}</span>

        <h3 className="font-serif text-2xl antialiased font-bold mb-4">
          <Link to={url}>{title}</Link>
        </h3>
        <p className="text-lg text-gray-700">{summary}</p>
      </div>

      <div className="blog-card-footer mt-auto">
        <LinkArrow url={url} text="Read the blog post" />
      </div>
    </div>
  )
}

export default BlogCard
