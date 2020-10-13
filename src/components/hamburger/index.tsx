import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import "./hamburger.scss"

interface HamburgerProps {
  id?: string
  classes?: string
  onClick: any
}

const Hamburger = ({ id, classes, onClick }: HamburgerProps) => {
  return (
    <button
      onClick={onClick}
      id={id}
      className={classNames("hamburger ", classes)}
      type="button"
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  )
}

export default Hamburger
