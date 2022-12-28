import Image from 'next/image'
import styles from './index.module.scss'

export default function HeadingLine({
  Line,
  SubLine
}: {
  Line: React.ReactNode
  SubLine?: React.ReactNode
}) {

	if (SubLine) {
		return (
	  	<span class="relative">
	      <span>
	        {Line}
	      </span>
	      <span className={styles.annotation + ' font-xs font-cursive'}>
	        <Image src="/arrow.svg" height={10} width={31} className={styles.annotation_arrow} />
	        {SubLine}
	      </span>
	    </span>
	  )
	} else {
		return (
			<span>{Line}</span>
		);
	}
}