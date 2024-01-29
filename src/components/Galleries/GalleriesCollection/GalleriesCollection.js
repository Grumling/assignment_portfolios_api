'use client'
import GalleryImages from '../GalleryImages/GalleryImages'
import styles from './GalleriesCollection.module.css'
import { useEffect, useState } from 'react'

const GalleriesCollection = () => {
  const [Galleries, setGalleries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/galleries`)

      const result = await response.json()

      setGalleries(result)
    }

    fetchData()
  }, [])

  return (
    <main className={styles.page}>
      {Galleries.map((gallery, index) => (
        <button key={index}>{gallery.name}</button>
      ))}
      <GalleryImages gallery={'obscura'}></GalleryImages>
    </main>
  )
}

export default GalleriesCollection
