import Head from 'next/head'
import Layout, { siteTitle } from '../layouts/default'
import Avatar from '../components/Avatar/index'
import HeadingLine from '../components/HeadingLine/index'
import ProjectCard from '../components/ProjectCard/index'
import styles from './index.module.scss'
import allProjects from '../content/projects'
import allContent from '../content/home'

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
          <h1 className={`${styles.heading} text-center`}>
            <strong><HeadingLine>Daniel Stokes</HeadingLine></strong><br/>
            <HeadingLine subLine="based in Leeds" subLinePos="left">Full stack web developer</HeadingLine><br/>
            <HeadingLine>With 10 years experience</HeadingLine><br/>
            <HeadingLine>Specialising in JavaScript, React,</HeadingLine><br/>
            <HeadingLine subLine="plus CMS and E-commerce">CSS & PHP</HeadingLine>
          </h1>
        </div>
      </header>

      <section className="pt-12">
        <div className="container">

          <div className="pb-12">
            <h2 className={styles.heading_two}>Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {allProjects.map((project) => (
                <div key={project.id} className="col">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <hr/>

          {allContent.map((content, i) => (
            <div key={i}>
              <div className="pt-12 pb-12">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
                    <h2 className={styles.heading_two}>{content.title}</h2>
                  </div>
                  <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-13">
                    <p>{content.content}</p>
                  </div>
                </div>
              </div>

              {i + 1 < allContent.length && <hr/>}
            </div>
          ))}

        </div>
      </section>
    </Layout>
  )
}
