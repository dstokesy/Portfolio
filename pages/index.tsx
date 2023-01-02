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

      <section className="pt-24">
        <div className="container">
          <div className="pb-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
                <h2 className={styles.heading_two}>Projects</h2>
              </div>
              <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-13">
                <p>Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            </div>
          </div>

          <hr/>

          <div className="pt-12 pb-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
                <h2 className={styles.heading_two}>About Me</h2>
              </div>
              <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-13">
                <p>Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            </div>
          </div>

          <hr/>

          <div className="pt-12 pb-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
                <h2 className={styles.heading_two}>Experience</h2>
              </div>
              <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-13">
                <p>Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            </div>
          </div>

          <hr/>

          <div className="pt-12 pb-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
                <h2 className={styles.heading_two}>Education</h2>
              </div>
              <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-13">
                <p>Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}