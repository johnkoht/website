import React from "react"
import { Link } from "gatsby"
import logo from "images/jk-logo.svg"

import Navigation from "components/navigation-modal"
import "./header.scss"

const Header = () => (
  <header class="header">
    <div class="stripe"></div>

    <div class="header-inner flex items-center px-10 py-6">
      <div class="header-spacer"></div>

      <Link to="/" className="ml-auto header-brand">
        <img src={logo} alt="John Koht Logo" />
      </Link>

      <Navigation />
    </div>
  </header>
)

export default Header
