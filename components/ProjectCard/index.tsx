import styles from './index.module.scss'
import Image from 'next/image'

export default function ProjectCard({
  Title,
  Categories,
  ImagePath,
  Link
}: {
  Title: String,
  Categories: String,
  ImagePath: String,
  Link: String
}) {
	return (
		<a href={Link} className="block mb-4 text-center">
			<Image src={ImagePath} height={250} width={250} alt="Daniel Stokes" className={styles.img} />
			<div>{Title}</div>
			<div className="text-xs">{Categories}</div>
		</a>
	);
}