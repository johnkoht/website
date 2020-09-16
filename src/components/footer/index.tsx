import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./footer.scss"

const Footer = () => (
  <StaticQuery
    query={graphql`
      {
        allLinks {
          edges {
            node {
              icon
              site
              url
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="footer p-12 bg-white">
        <div className="container mx-auto">
          <div className="flex">
            <span className="copyright text-sm font-thin text-gray-600">&copy; {new Date().getFullYear()} John Koht</span>

            <div className="ml-auto flex items-center">
              {data.allLinks.edges.map(({ node }) => (
                <a className="contact-icon mx-3" href={node.url}>
                  <img src={node.icon} alt={node.site} />
                </a>
              ))}
            </div>

            <span className="phantom ml-auto"></span>
          </div>
        </div>
      </footer>
    )}
  ></StaticQuery>
)

export default Footer
