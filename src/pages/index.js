import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/styles.module.css'
import Image from 'next/image'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <Head>
        <title> Fat Burgers | Home </title>
        <meta name='title' content='Fat-Burgers' />
      </Head>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Home</h1>
      <div className={styles.mainImage}>
        <Image src='/images/fatburger.jpg' width={400} height={300} alt='Fat-Burger'/>
      </div>
      <p className={styles.text}>What is the perfect burger? Fresh lettuce, soft buns, juicy meat. You can argue about other components of the filling, because this is a matter of taste.</p>
        <p className={styles.text}>There are a couple of other factors that affect appetite: prices, quality of service, the right atmosphere of the establishment.</p>
      <Link href='/Burgers/Burgers' className={styles.btn}>Burgers</Link>
    </div>
  )
}
