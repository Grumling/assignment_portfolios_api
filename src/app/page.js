import AuthorImages from '@/components/Authors/AuthorImages/AuthorImages'
import styles from './page.module.css'
import ClientComponent from '@/components/dev/clientComponent/clientComponent'

export default async function Page() {
  return (
    <main className={styles.page}>
      <ClientComponent />
      <AuthorImages name={'Lena Riis'}></AuthorImages>
    </main>
  )
}
