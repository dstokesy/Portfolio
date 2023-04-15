import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import ProjectType from "./../../types/Project";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link href={`/projects/${project.id}`} className="block mb-8 text-center">
      <Image
        src={project.thumb}
        height={166}
        width={174}
        alt="Daniel Stokes"
        className={styles.img}
      />
      <div className={styles.title}>{project.title}</div>
      <div className={styles.subtitle}>{project.categories}</div>
    </Link>
  );
}
