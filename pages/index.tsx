import Head from 'next/head'
import Layout, { siteTitle } from '../layouts/default'
import Avatar from '../components/Avatar/index'
import HeadingLine from '../components/HeadingLine/index'
import ProjectCard from '../components/ProjectCard/index'
import styles from './index.module.scss'
import { getSortedContentData } from '../lib/content'
import { getSortedProjectsData } from '../lib/projects'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function Index({
  allContent,
  allProjects
}: {
  allContent: {
    priority: number
    title: string
    content: string
    id: string
  },
  allProjects: {
    priority: number
    title: string
    categories: string
    image: string
    content: string
    id: string
  }[]
}) {
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
            <HeadingLine Line="Full stack web developer" SubLine="based in Leeds" SubLinePos="left" /><br/>
            <HeadingLine Line="With 10 years experience" /><br/>
            <HeadingLine Line="Specialising in JavaScript, React," /><br/>
            <HeadingLine Line="CSS & PHP" SubLine="plus CMS and E-commerce" />
          </h1>
        </div>
      </header>

      <section className="pt-12">
        <div className="container">

          <div className="pb-12">
            <h2 className={styles.heading_two}>Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {allProjects.map(({ id, priority, title, categories, image, content }) => (
                <div key={id} className="col">
                  <ProjectCard Title={title} Categories={categories} ImagePath={image} Id={id} />
                </div>
              ))}
            </div>
          </div>

          <hr/>

          {allContent.map(({ id, priority, title, content }, i) => (
            <div key={id}>
              <div className="pt-12 pb-12">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
                    <h2 className={styles.heading_two}>{title}</h2>
                  </div>
                  <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-13">
                    <p>{content}</p>
                  </div>
                </div>
              </div>

              {i + 1 < allContent.length ? <hr/> : ''}
            </div>
          ))}

        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allContent = getSortedContentData()
  const allProjects = getSortedProjectsData()
  return {
    props: {
      allContent,
      allProjects
    }
  }
}