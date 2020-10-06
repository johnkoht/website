import React from "react"
import { Link } from "gatsby"
import ArrowRight from "images/arrow-right.inline.svg"

import "./link-arrow.scss"

interface LinkArrowProps {
  text: string
  url: string
  id?: string
  invert?: boolean
  rel?: string
}

const LinkArrow = ({ text, url, id, invert, rel }: LinkArrowProps) => {
  let classes = "link-arrow"

  if (invert) {
    classes = "link-arrow inverted"
  }

  return (
    <Link id={id} className={classes} to={url} rel={rel}>
      <span className="arrow-icon">
        <ArrowRight alt="Arrow Icon" />
      </span>

      {text}
    </Link>
  )
}

export default LinkArrow
