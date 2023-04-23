import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout, { siteTitle } from "../../layouts/default";
import HeadingLine from "../../components/HeadingLine/index";
import FadeSection from "../../components/FadeSection/index";
import PopInSection from "../../components/PopInSection/index";
import ContentSection from "../../components/ContentSection/index";
import ProjectLinks from "../../components/ProjectLinks/index";
import Image from "next/image";
import Avatar from "../../components/Avatar/index";
import styles from "../index.module.scss";
import projects from "../../content/projects";
import ProjectType from "./../../types/Project";

interface IPageData {
  project: ProjectType;
}

const Page: React.FC<IPageData> = (props) => {
  const project = props.project;
  return (
    <Layout>
      <Head>
        <title>
          {project.title} | {siteTitle}
        </title>
      </Head>
      <header className="py-6">
        <div className="container">
          <div className="mb-6 text-center">
            <PopInSection disablePadding>
              <Avatar path={project.logo} title={project.title} />
            </PopInSection>
          </div>

          <FadeSection>
            <h1 className={`${styles.heading} text-center`}>
              <strong>
                <HeadingLine subLine={project.categories} subLinePos="left">
                  {project.title}
                </HeadingLine>
              </strong>
            </h1>
          </FadeSection>

          <section>
            <div className="container">
              <FadeSection>
                <ProjectLinks project={project} />
              </FadeSection>

              <FadeSection>
                <ContentSection content={project.content} />
                <hr />
              </FadeSection>

              <FadeSection>
                <div className="pt-20 pb-20">
                  <div className="grid grid-cols-1 gap-4">
                    {project.images &&
                      project.images.map((image, key) => (
                        <div key={key} className="text-center mb-4">
                          <Image
                            src={image}
                            height={505}
                            width={716}
                            alt={project.title}
                            className={styles.avatar}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </FadeSection>
            </div>
          </section>
        </div>
      </header>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projects.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const id = params?.id as string,
    project = projects.filter((project) => project.id === id)[0];

  return {
    props: {
      project: project,
    },
  };
};

export default Page;
