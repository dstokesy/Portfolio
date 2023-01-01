import Head from 'next/head'
import Layout, { siteTitle } from '../layouts/default'
import Avatar from '../components/Avatar/index'
import HeadingLine from '../components/HeadingLine/index'
import styles from './index.module.scss'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="py-6">
        <div className="container">
          <div className="mb-6 text-center">
            <Avatar />
          </div>
          <h1 className={styles.heading + ' text-center'}>
            <strong><HeadingLine Line="Daniel Stokes" /></strong><br/>
            <HeadingLine Line="Full stack web developer" SubLine="based in Leeds" SubLinePos="left"/><br/>
            <HeadingLine Line="With 10 years experience"/><br/>
            <HeadingLine Line="Specialising in JavaScript, React,"/><br/>
            <HeadingLine Line="CSS & PHP" SubLine="plus CMS and E-commerce"/>
          </h1>
        </div>
      </header>
      <div className="container-fluid">
        
      </div>
    </Layout>
  )
}