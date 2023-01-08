import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  Title,
  Categories,
  ImagePath,
  Id
}: {
  Title: String,
  Categories: String,
  ImagePath: String,
  Id: String
}) {
	return (
		<Link href={`/projects/${Id}`} className="block mb-4 text-center">
			<Image src={ImagePath} height={250} width={250} alt="Daniel Stokes" className={styles.img} />
			<div>{Title}</div>
			<div className="text-xs">{Categories}</div>
		</Link>
	);
}