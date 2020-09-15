import React from "react"
import { Link } from "gatsby"

import "./footer.scss"

const Footer = () => (
  <footer class="footer p-5">
    &copy; {new Date().getFullYear()}
  </footer>
)

export default Footer
