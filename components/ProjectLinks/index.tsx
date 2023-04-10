import Image from "next/image";
import FadeSection from "../../components/FadeSection/index";
import ProjectType from "./../../types/Project";

export default function ProjectLinks({ project }: { project: ProjectType }) {
  if (project.github || project.website) {
    return (
      <FadeSection>
        <div className="pt-20 pb-20 flex items-center justify-center gap-12">
          <a
            href={project.github}
            target="_blank"
            title="Github"
            rel="noreferrer"
          >
            <Image src="/github-icon.svg" height={60} width={60} alt="Github" />
          </a>

          <a
            href={project.website}
            target="_blank"
            title="Website"
            rel="noreferrer"
          >
            <Image src="/link-icon.svg" height={43} width={60} alt="Website" />
          </a>
        </div>
        <hr />
      </FadeSection>
    );
  }

  return <></>;
}
