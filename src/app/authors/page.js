import AuthorsCollection from '@/components/Authors/AuthorsCollection/AuthorsCollection'
import styles from './page.module.css'

const Page = async () => {
  return (
    <main className={styles.page}>
      <AuthorsCollection />
    </main>
  )
}

export default Page
