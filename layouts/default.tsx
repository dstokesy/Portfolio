import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './default.module.scss'

export const siteTitle = 'Daniel Stokes Full Stack Web Developer'

export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Daniel Stokes Full Stack Web Developer, Leeds"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.layout}>
        {children}
      </div>
    </div>
  )
}