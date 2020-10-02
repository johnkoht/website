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
      <footer className="footer py-8 sm:py-12 bg-white">
        <div className="max-w-screen-xl px-4 md:px-0 mx-auto">
          <div className="flex flex-wrap flex-col sm:flex-row">
            <span className="copyright my-3 mx-auto sm:m-0 sm:mr-auto text-gray-500">
              &copy; {new Date().getFullYear()} John Koht
            </span>

            <div className="order-first sm:order-2 mx-auto mb-4 sm:mb-0 sm:ml-auto flex items-center">
              {data.allLinks.edges.map(({ node }) => (
                <a
                  className="contact-icon mx-3"
                  href={node.url}
                  key={node.site}
                >
                  <img src={node.icon} alt={node.site} />
                </a>
              ))}
            </div>

            <span className="open-source m-auto sm:ml-auto sm:order-3">
              <a
                href="https://github.com/johnkoht/website"
                target="_blank"
                title="View the source code for my website"
              >
                Source Code
              </a>
            </span>
          </div>
        </div>
      </footer>
    )}
  ></StaticQuery>
)

export default Footer
