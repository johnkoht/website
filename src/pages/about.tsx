import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/seo"
import CloudinaryImage from "components/cloudinary-image"

import backgroundImage from "images/chicago-bridge.jpg"
import strategyIcon from "images/product-strategy.svg"
import PMIcon from "images/pm-4.svg"
import designIcon from "images/design.svg"
import devIcon from "images/dev.svg"
import babyIcon from "images/icons/baby.svg"
import heartIcon from "images/icons/heart.svg"
import locationIcon from "images/icons/location.svg"
import schoolIcon from "images/icons/school.svg"
import workIcon from "images/icons/work.svg"


import "./about.scss"

export const query = graphql`
  query AboutQuery {
    about {
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
`

const AboutPage = ({data}) => {
  let kidsString;
  if (data.about.family.kids.length) {
    let kids = data.about.family.kids;
    let lastName = kids[0].last_name;
    console.log(data.about.family.kids);
    let firstNames = kids.map(kid => kid.first_name);
    kidsString = `${firstNames.join(", ")} ${lastName}`;
  }

  return(
    <Layout invertHeader="true">
      <SEO title="About Me" />

      <div className="hero about-hero hero-background-image flex items-center justify-center" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="hero-content text-center">
          <h1 className="hero-title text-white">About Me</h1>
          <h2 className="hero-display text-white">Dad. Husband. Creator</h2>
        </div>
      </div>

      <div className="container services-list mx-auto">
        <div className="flex grid grid-cols-4 gap-5">
          <div className="service-item service-strategy">
            <div className="service-item-content">
              <img src={strategyIcon} alt="Product Strategy Icon" />
              <h3>Product Strategy</h3>
            </div>
          </div>

          <div className="service-item service-pm">
            <div className="service-item-content">
              <img src={PMIcon} alt="Product Management Icon" />
              <h3>Product Management</h3>
            </div>
          </div>

          <div className="service-item service-design">
            <div className="service-item-content">
              <img src={designIcon} alt="UX/Design Icon" />
              <h3>UX/Design</h3>
            </div>
          </div>

          <div className="service-item service-dev">
            <div className="service-item-content">
              <img src={devIcon} alt="Development Icon" />
              <h3>Development</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto md:mt-40">
        <div className="about-overview flex">
          <div className="about-avatar">
            <CloudinaryImage url={data.about.avatar} width="200" height="200" crop="fit" alt="Headshot of John Koht smoking a cigar" />
          </div>

          <div className="about-details ml-10">
            <h2>John Koht</h2>
            <ul>
              <li>
                <span className="ab-icon">
                  <img src={workIcon} alt="Arrow Icon" />
                </span>

                {data.about.employment.position}, {data.about.employment.company}
              </li>

              <li>
                <span className="ab-icon">
                  <img src={schoolIcon} alt="Arrow Icon" />
                </span>

                {data.about.education.major}, {data.about.education.institution}
              </li>

              <li>
                <span className="ab-icon">
                  <img src={locationIcon} alt="Arrow Icon" />
                </span>

                {data.about.location.city}, {data.about.location.state}
              </li>

              <li>
                <span className="ab-icon">
                  <img src={heartIcon} alt="Arrow Icon" />
                </span>

                {data.about.family.spouse.name}
              </li>

              <li>
                <span className="ab-icon">
                  <img src={babyIcon} alt="Arrow Icon" />
                </span>

                {kidsString}
              </li>
            </ul>
          </div>
        </div>

        <div className="about-bio" dangerouslySetInnerHTML={{__html: data.about.biography}}>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
