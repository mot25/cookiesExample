
import Image from 'next/image'
import styles from './page.module.css'
import {redirect} from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'

const isAuth = () => false
export default function Home() {
  if (!isAuth()) {
    redirect('/sigIn', RedirectType.replace)
  }
  return (
    <main>
      <h1>Welcome </h1>
    </main>
  )
}
