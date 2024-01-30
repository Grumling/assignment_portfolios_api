'use client'
import { useEffect, useState } from 'react'
import styles from './GalleryImages.module.css'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

const GalleryImages = ({}) => {
  const [galleriesImages, setGalleriesImages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/images`)

      const result = await response.json()
      setGalleriesImages(result[0].data)
    }

    fetchData()
  }, [])

  return (
    <Swiper spaceBetween={1} slidesPerView={1} className={styles.slider}>
      {galleriesImages.map((images, index) => (
        <SwiperSlide key={index}>
          <p>{images.author}</p>
          <Image
            src={images.path}
            alt={images.author}
            width={500}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default GalleryImages
