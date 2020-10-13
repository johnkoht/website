import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { TransitionPortal } from "gatsby-plugin-transition-link";
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
    <TransitionPortal level="top" className="header-wrapper">
      <header className={headerClass}>
        <div className="header-inner flex items-center px-4 md:px-10">
          {headerBackBtn && (
            <AniLink
              cover
              direction="left"
              duration={.75}
              bg="#06D6A0"
              to={headerBackBtn}
              className="header-back-btn"
            >
              <BackBtn alt="Back Button" />
            </AniLink>
          )}

          {!headerBackBtn && <div className="header-spacer"></div>}

          <AniLink
            cover
            direction="up"
            duration={.75}
            bg="#59A5D8"
            to="/"
            className="ml-auto header-brand"
          >
            <Logo alt="John Koht Logo" />
          </AniLink>

          <Navigation />
        </div>
      </header>
    </TransitionPortal>
  )
}

export default Header
