import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
	title: string
	categories: string
	image: string
	content: string
	id: string
};

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link href={`/projects/${project.id}`} className="block mb-4 text-center">
			<Image src={project.image} height={166} width={174} alt="Daniel Stokes" className={styles.img} />
			<div className={styles.title}>{project.title}</div>
			<div className={`${styles.subtitle} font-cursive`}>{project.categories}</div>
		</Link>
	);
}