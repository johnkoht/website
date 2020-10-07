import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/header"
import Footer from "components/footer"

import "./layout.scss"

interface LayoutProps {
  children: node
  className: string
  invertHeader?: string
  headerBackBtn: string
}

const Layout = ({
  children,
  invertHeader,
  className,
  headerBackBtn,
}: LayoutProps) => {
  return (
    <>
      <Header invert={invertHeader} headerBackBtn={headerBackBtn} />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
