import React from "react"
import { Link } from "gatsby"
import logo from "images/jk-logo.svg"

import Navigation from "components/navigation-modal"
import "./header.scss"

const Header = () => (
  <header className="header">
    <div className="stripe"></div>

    <div className="header-inner flex items-center px-4 sm:px-10 py-4 sm:py-6">
      <div className="header-spacer"></div>

      <Link to="/" className="ml-auto header-brand">
        <img src={logo} alt="John Koht Logo" />
      </Link>

      <Navigation />
    </div>
  </header>
)

export default Header
