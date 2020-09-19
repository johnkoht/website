import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
// import Image from "components/image"
import SEO from "components/seo"
// import LinkArrow from "components/link-arrow"
// import WorkCard from "components/work-card"
// import Photo from "components/photo"
import backgroundImage from "images/chicago-bridge.jpg"

import strategyIcon from "images/product-strategy.svg"
import PMIcon from "images/pm-4.svg"
import designIcon from "images/design.svg"
import devIcon from "images/dev.svg"

import "./about.scss"

export const query = graphql`
  {
    allAbout {
      nodes {
        avatar
        biography
        birthdate
        education {
          major
          institution
          degree
        }
        employment {
          company
          position
        }
        family {
          spouse {
            first_name
            last_name
            name
          }
          kids {
            birthdate
            first_name
            last_name
            name
          }
        }
        first_name
        last_name
        links {
          site
          url
          icon
        }
        location {
          city
          latitude
          longitude
          state
          zip_code
        }
        name
        short_bio
      }
    }
  }
`

const AboutPage = ({data}) => (
  <Layout invertHeader="true">
    <SEO title="About Me" />

    <div className="hero about-hero hero-background-image flex items-center justify-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="hero-content text-center">
        <h1 className="hero-title text-white">About Me</h1>
        <h2 className="hero-display text-white">Dad. Husband. Creator</h2>
      </div>
    </div>

    <div className="container services-list mx-auto">
      <div class="flex grid grid-cols-4 gap-5">
        <div class="service-item service-strategy">
          <div class="service-item-content">
            <img src={strategyIcon} alt="Product Strategy Icon" />
            <h3>Product Strategy</h3>
          </div>
        </div>

        <div class="service-item service-pm">
          <div class="service-item-content">
            <img src={PMIcon} alt="Product Management Icon" />
            <h3>Product Management</h3>
          </div>
        </div>

        <div class="service-item service-design">
          <div class="service-item-content">
            <img src={designIcon} alt="UX/Design Icon" />
            <h3>UX/Design</h3>
          </div>
        </div>

        <div class="service-item service-dev">
          <div class="service-item-content">
            <img src={devIcon} alt="Development Icon" />
            <h3>Development</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
