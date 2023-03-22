import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import LinkArrow from "components/link-arrow"
import { Link } from "gatsby"

import "./book-card.scss"

interface BookCardProps {
  title: string
  subtitle: string
  author: string
  edition: string
  read: Boolean
  recommend: string
  links: Array
}

const BookCard = ({ title, subtitle, author, links, read, recommend, edition }: BookCardProps) => {
  return (
    <div className={`book-card py-8 lg:py-16 px-4 lg:px-8 flex flex-col book-read-${read}`}>
      <div className="book-card-stripe" />

      <div className="blog-card-content mb-12 lg:mb-16">
        <h3 className="font-serif text-2xl antialiased font-bold mb-2">
          {title}
        </h3>

        {subtitle != null && (
          <p className="text-lg mb-2 text-gray-700">{subtitle}</p>
        )}

        <span className="block text-gray-500">Author: {author}</span>
      </div>

      <div className="blog-card-footer mt-auto">
        {links.map(link => (
          <LinkArrow
            url={link.url}
            text="View book"
          />
        ))}
      </div>
    </div>
  )
}

export default BookCard
