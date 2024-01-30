'use client'
import GalleryImages from '../GalleryImages/GalleryImages'
import styles from './GalleriesCollection.module.css'
import { useEffect, useState } from 'react'

const GalleriesCollection = () => {
  const [galleries, setGalleries] = useState([])
  const [currentGallery, setCurrentGallery] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/galleries`)
      const result = await response.json()
      setGalleries(result)
    }

    fetchData()
  }, [])

  const handleButtonClickChangeGallery = (galleryName) => {
    setCurrentGallery(galleryName)
  }

  return (
    <main className={styles.page}>
      {galleries.map((gallery, index) => (
        <button
          key={index}
          onClick={() => handleButtonClickChangeGallery(gallery.name)}
        >
          {gallery.name}
        </button>
      ))}
      <GalleryImages gallery={currentGallery}></GalleryImages>
    </main>
  )
}

export default GalleriesCollection
