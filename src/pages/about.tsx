import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/seo"
import CloudinaryImage from "components/cloudinary-image"
import BlogCard from "components/blog-card"
import LinkArrow from "components/link-arrow"

import BackgroundImage from "images/chicago-bridge.jpg"

import StrategyIcon from "images/product-strategy.inline.svg"
import PMIcon from "images/product-management.inline.svg"
import DesignIcon from "images/design.inline.svg"
import DevIcon from "images/development.inline.svg"

import BabyIcon from "images/icons/baby.inline.svg"
import HeartIcon from "images/icons/heart.inline.svg"
import LocationIcon from "images/icons/location.inline.svg"
import SchoolIcon from "images/icons/school.inline.svg"
import WorkIcon from "images/icons/work.inline.svg"

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
    allBlogPosts(limit: 3) {
      edges {
        node {
          url
          title
          summary
          id__normalized
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  let kidsString
  if (data.about.family.kids.length) {
    let kids = data.about.family.kids
    let lastName = kids[0].last_name
    console.log(data.about.family.kids)
    let firstNames = kids.map(kid => kid.first_name)
    kidsString = `${firstNames.join(", ")} ${lastName}`
  }

  return (
    <Layout invertHeader="true">
      <SEO title="About Me" />

      <div
        className="hero about-hero hero-background-image flex items-center justify-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="hero-content text-center">
          <h1 className="hero-title text-white">About Me</h1>
          <h2 className="hero-display text-white">Dad. Husband. Creator</h2>
        </div>
      </div>

      <div className="max-w-screen-xl px-4 md:px-8 lg:px-0 services-list mx-auto">
        <div className="flex grid grid-cols-2 md:grid-cols-4 sm:gap-5">
          <div className="service-item service-strategy">
            <div className="service-item-content">
              <StrategyIcon alt="Product Strategy Icon" />
              <h3>Product Strategy</h3>
            </div>
          </div>

          <div className="service-item service-pm">
            <div className="service-item-content">
              <PMIcon alt="Product Management Icon" />
              <h3>Product Management</h3>
            </div>
          </div>

          <div className="service-item service-design">
            <div className="service-item-content">
              <DesignIcon alt="UX/Design Icon" />
              <h3>UX/Design</h3>
            </div>
          </div>

          <div className="service-item service-dev">
            <div className="service-item-content">
              <DevIcon alt="Development Icon" />
              <h3>Development</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-10 md:mt-40 px-4 md:px-8">
        <div className="about-overview flex flex-wrap">
          <div className="about-avatar">
            <CloudinaryImage
              url={data.about.avatar}
              width="400"
              height="400"
              crop="fit"
              alt="Headshot of John Koht smoking a cigar"
            />
          </div>

          <div className="about-details mt-6 sm:mt-0 sm:ml-10">
            <h2>John Koht</h2>
            <ul>
              <li>
                <span className="ab-icon">
                  <WorkIcon alt="Icon of a briefcase" />
                </span>
                {data.about.employment.position},{" "}
                {data.about.employment.company}
              </li>

              <li>
                <span className="ab-icon">
                  <SchoolIcon alt="Icon of a graduation cap" />
                </span>
                {data.about.education.major}, {data.about.education.institution}
              </li>

              <li>
                <span className="ab-icon">
                  <LocationIcon alt="Icon of a location pin" />
                </span>
                {data.about.location.city}, {data.about.location.state}
              </li>

              <li>
                <span className="ab-icon">
                  <HeartIcon alt="Icon of a heart" />
                </span>

                {data.about.family.spouse.name}
              </li>

              <li>
                <span className="ab-icon">
                  <BabyIcon alt="Icon of a baby" />
                </span>

                {kidsString}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="about-bio mt-6 sm:mt-12"
          dangerouslySetInnerHTML={{ __html: data.about.biography }}
        ></div>
      </div>

      <div className="about-blog mt-20 sm:mt-32 lg:mt-64 py-16 sm:py-24 lg:py-48 bg-gray-100">
        <div className="max-w-screen-xl px-4 md:px-8 lg:px-0 mx-auto">
          <div className="mb-10 lg:mb-20 max-w-6xl mx-auto">
            <h2 className="mb-2">
              Sometimes I write about product strategy,
              <br className="hidden lg:block" /> design, and development.
            </h2>
            <LinkArrow
              url="https://blog.kohactive.com/author/john-koht/"
              text="Read my posts"
            />
          </div>

          <div className="blog-posts grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8">
            {data.allBlogPosts.edges.map(({ node }) => (
              <BlogCard
                id={node.id__normalized}
                url={node.url}
                title={node.title}
                summary={node.summary}
                key={node.id__normalized}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
