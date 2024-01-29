import GalleriesCollection from '@/components/Galleries/GalleriesCollection/GalleriesCollection'
import styles from './page.module.css'

const Page = async () => {
  return (
    <main className={styles.page}>
      <GalleriesCollection />
    </main>
  )
}

export default Page
