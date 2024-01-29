'use client'
import DebugJson from '../../dev/debugJson/debugJson'
import AuthorImages from '../AuthorImages/AuthorImages'
import styles from './AuthorsCollection.module.css'
import { useEffect, useState } from 'react'

const AuthorsCollection = () => {
  const [authors, setAuthors] = useState([]) // Vi sætter data state til at være et tomt array som udgangspunkt.

  // Hook der kaldes når "html"´en er klar.
  useEffect(() => {
    // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
    const fetchData = async () => {
      // Vi fetcher fra vores endpoint.
      const response = await fetch(`http://localhost:3000/api/authors`)

      // Vi omdanner vores response fra tekst til json.
      const result = await response.json()

      // Vi opdatere data state, ved hjælp af setData() useState hook´en.
      setAuthors(result)
    }

    // Vi kalder fetch data funktionen.
    fetchData()
  }, [])

  return (
    <main className={styles.page}>
      {authors.map((item, index) => (
        <AuthorImages key={index} name={item.author}></AuthorImages>
      ))}
    </main>
  )
}

export default AuthorsCollection
