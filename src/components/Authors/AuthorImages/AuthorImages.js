'use client'
import DebugJson from '../../dev/debugJson/debugJson'
import styles from './AuthorImages.module.css'
import { useEffect, useState } from 'react'

const AuthorImages = ({ name }) => {
  const [author, setAuthor] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/images?author=${name}`
      )

      const result = await response.json()
      setAuthor(result)
    }

    fetchData()
  }, [name])

  return (
    <main className={styles.page}>
      <DebugJson content={author} />
    </main>
  )
}

export default AuthorImages
