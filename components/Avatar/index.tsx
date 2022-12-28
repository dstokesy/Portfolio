import Image from 'next/image'
import styles from './index.module.scss'

export default function Avatar() {

	return (
		<div className={styles.wrapper}>
			<Image src="/avatar.svg" height={250} width={250} className={styles.avatar} />
		</div>
	)
}