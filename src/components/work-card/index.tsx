import React from "react"
import { Link } from "gatsby"
import { snakeCase } from "snake-case"
import LinkArrow from "components/link-arrow"

import "./work-card.scss"

interface WorkCardProps {
  id: string,
  title: string,
  description: string,
  client: {
    company: string,
    industry: string,
    logo: string
  },
  type: string,
  url: string,
  image: string,
  roles: Array
}

const WorkCard = ({
  id,
  title,
  description,
  client,
  type,
  url,
  image,
  roles
}: WorkCardProps) => {
  let workClass = snakeCase(client.company);

  return (
    <div className={"work-card " + workClass} id={id} key={id}>
      {image != null &&
        <div className="work-card-image" style={{backgroundImage: "url(" + image + ")"}} />
      }

      <div className="work-card-content">
        <div className="work-card-logo">
          <img src={client.logo} alt={`${client.company} logo`} />
        </div>

        <div className="work-card-details">
          <h3>{title}</h3>
          <p>{description}</p>

          {url != null &&
            <LinkArrow url={url} text="View cast study" invert="true" />
          }

        </div>

        <div className="work-card-roles">
          <h4>Roles</h4>
          <ul>
            {roles.map(role => (
              <li key={snakeCase(`workClass_${role}`)}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
