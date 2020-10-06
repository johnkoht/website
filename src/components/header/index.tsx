import React from "react"
import { Link } from "gatsby"
import Logo from "images/jk-logo.inline.svg"
import BackBtn from "images/icons/back-btn.inline.svg"

import Navigation from "components/navigation-modal"
import "./header.scss"

interface HeaderProps {
  invert?: boolean
  headerBackBtn?: string
}

const Header = ({ invert, headerBackBtn }: HeaderProps) => {
  let headerClass = invert ? "header invert" : "header"

  return (
    <header className={headerClass}>
      <div className="header-inner flex items-center px-4 md:px-10">
        {headerBackBtn && (
          <Link to={headerBackBtn} className="header-back-btn">
            <BackBtn alt="Back Button" />
          </Link>
        )}

        {!headerBackBtn && (
          <div className="header-spacer"></div>
        )}

        <Link to="/" className="ml-auto header-brand">
          <Logo alt="John Koht Logo" />
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
