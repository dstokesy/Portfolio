import Head from 'next/head'
import Layout, { siteTitle } from '../layouts/default'
import Avatar from '../components/Avatar/index'
import HeadingLine from '../components/HeadingLine/index'
import styles from './index.module.scss'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="pt-6">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="mb-6 text-center">
                <Avatar />
              </div>
              <h1 className={styles.heading + ' text-center'}>
                <HeadingLine Line="Full stack web developer" SubLine="form Leeds."/>
                &nbsp;<HeadingLine Line="with 10 years experience."/>
                &nbsp;<HeadingLine Line="Specialising in CSS, JavaScript, React & PHP" SubLine="along with cms and e-commerce"/>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <h2>test</h2>
      </div>
    </Layout>
  )
}