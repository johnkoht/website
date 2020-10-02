import React from "react"
import { Link } from "gatsby"

interface ImageProps {
  id: int
  classes: string
  url: string
  alt: string
  width: string
  height: string
  crop: string
  format: string
  quality: string
}

const CloudinaryImage = ({
  id,
  classes,
  url,
  alt,
  width,
  height,
  crop,
  format,
  quality,
}: ImageProps) => {
  let imageSettings = []
  let urlObject = new URL(url)
  let src

  // Combine all of the customized image settings
  // into an array
  if (width != undefined) {
    imageSettings.push(`w_${width}`)
  }

  if (height != undefined) {
    imageSettings.push(`h_${height}`)
  }

  if (crop != undefined) {
    imageSettings.push(`c_${crop}`)
  }

  if (format != undefined) {
    imageSettings.push(`f_${format}`)
  }

  if (quality != undefined) {
    imageSettings.push(`q_${quality}`)
  }

  // If there are any image settings defined, then we'll combine
  // them into the URL provided to create a valid Cloudinary URL
  // Otherwise, we'll just return the url.
  if (imageSettings.length) {
    let pathnameArray = urlObject.pathname.split("/")
    let uploadIndex = pathnameArray.indexOf("upload") + 1
    pathnameArray.splice(uploadIndex, 0, imageSettings.join(","))

    src = urlObject.origin + pathnameArray.join("/")
  } else {
    src = url
  }

  return <img src={src} alt={alt} className={classes} />
}

export default CloudinaryImage
