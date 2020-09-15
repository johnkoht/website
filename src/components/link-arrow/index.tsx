import React from "react"
import { Link } from "gatsby"
import ArrowRight from "images/arrow-right.svg"
import ArrowRightInvert from "images/arrow-right-white.svg"

import "./link-arrow.scss"

interface LinkArrowProps {
  text: string,
  url: string,
  id?: string,
  invert?: boolean
}

const LinkArrow = ({
  text,
  url,
  id,
  invert
}: LinkArrowProps) => {

  let classes = "link-arrow";
  let icon    = ArrowRight;

  if (invert) {
    classes  = "link-arrow inverted";
    icon = ArrowRightInvert;
  }

  return (
    <Link id={id} className={classes} to={url}>
      <img src={icon} alt="Arrow Icon" />
      {text}
    </Link>
  )
}

export default LinkArrow
