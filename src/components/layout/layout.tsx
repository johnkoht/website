import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/header"
import Footer from "components/footer"

import "./layout.scss"

interface LayoutProps {
  children: node,
  invertHeader?: string
}

const Layout = ({ children, invertHeader }: LayoutProps) => {
  return (
    <>
      <Header invert={invertHeader}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
