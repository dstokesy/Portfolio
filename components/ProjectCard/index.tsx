import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  Title,
  Categories,
  ImagePath,
  Id
}: {
  Title: string,
  Categories: string,
  ImagePath: string,
  Id: string
}) {
	return (
		<Link href={`/projects/${Id}`} className="block mb-4 text-center">
			<Image src={ImagePath} height={166} width={174} alt="Daniel Stokes" className={styles.img} />
			<div>{Title}</div>
			<div className="text-xs">{Categories}</div>
		</Link>
	);
}