'use client'
import { useEffect, useState } from 'react'

const GalleryImages = () => {
  const [GalleriesImages, setGalleriesImages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/images`)

      const result = await response.json()

      setGalleriesImages(result)
    }

    fetchData()
  }, [])

  return <></>
}

export default GalleryImages
