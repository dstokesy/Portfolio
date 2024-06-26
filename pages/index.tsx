import Head from "next/head";
import Layout, { siteTitle } from "../layouts/default";
import Avatar from "../components/Avatar/index";
import HeadingLine from "../components/HeadingLine/index";
import PopInSection from "../components/PopInSection/index";
import FadeSection from "../components/FadeSection/index";
import ProjectCard from "../components/ProjectCard/index";
import ContentSection from "../components/ContentSection/index";
import styles from "./index.module.scss";
import projects from "../content/projects";
import allContent from "../content/home";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="py-6">
        <div className="container">
          <div className="mb-6 text-center">
            <PopInSection>
              <Avatar path="/avatar.svg" shadow title="Daniel Stokes" />
            </PopInSection>
          </div>
          <FadeSection>
            <h1 className={`${styles.heading} text-center`}>
              <strong>
                <HeadingLine>Daniel Stokes</HeadingLine>
              </strong>
              <br />
              <HeadingLine subLine="based in Leeds" subLinePos="left">
                Software Engineer
              </HeadingLine>
              <br />
              <HeadingLine>With 10+ years experience</HeadingLine>
              <br />
              <HeadingLine>Specialising in JavaScript, TypeScript, React, React Native, Redux,</HeadingLine>
              <br />
              <HeadingLine subLine="plus CMS and E-commerce">
                CSS & PHP
              </HeadingLine>
            </h1>
          </FadeSection>
        </div>
      </header>

      <section className="pt-12">
        <div className="container">
          <FadeSection>
            <div className="pb-12">
              <h2 className={styles.heading_two}>Projects</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="col">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            <hr />
          </FadeSection>

          {allContent.map((content, i) => (
            <FadeSection key={i}>
              <ContentSection content={content} />
              {i + 1 < allContent.length && <hr />}
            </FadeSection>
          ))}
        </div>
      </section>
    </Layout>
  );
}
