import React from "react"
import { Link } from "gatsby"

import "./photo.scss"

interface PhotoProps {
  id: string,
  description: string,
  url: string,
  image: string
}

const Photo = ({
  id,
  description,
  url,
  image
}: PhotoProps) => (
  <div className="photo-item" key={id}>
    <Link to={url} target="_blank" title="View image in Flickr">
      <img src={image} alt={description} />
    </Link>
  </div>
)

export default Photo


