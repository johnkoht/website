import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ArrowRight from "images/arrow-right.inline.svg"

import "./link-arrow.scss"

interface LinkArrowProps {
  text: string
  url: string
  id?: string
  invert?: boolean
  rel?: string
  aniDirection?: string
  aniDuration?: string
  aniBg?: string
}

const LinkArrow = ({ text, url, id, invert, rel, aniDirection, aniDuration, aniBg }: LinkArrowProps) => {
  let classes = "link-arrow"

  if (invert) {
    classes = "link-arrow inverted"
  }

  aniDirection = aniDirection || "down"
  aniDuration = aniDuration || .75
  aniBg = aniBg || "#133C55"

  return (
    <AniLink
      cover
      direction={aniDirection}
      duration={aniDuration}
      to={url}
      bg={aniBg}
      className={classes}
      rel={rel}
    >
      <span className="arrow-icon">
        <ArrowRight alt="Arrow Icon" />
      </span>

      {text}
    </AniLink>
  )
}

export default LinkArrow
