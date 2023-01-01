import Image from 'next/image'
import styles from './index.module.scss'

export default function HeadingLine({
  Line,
  SubLine,
  SubLinePos
}: {
  Line: React.ReactNode
  SubLine?: React.ReactNode
  SubLinePos?: string
}) {

	if (SubLine) {
		return (
	  	<span className="relative">
	      <span>
	        {Line}
	      </span>
	      <span className={styles.annotation + ' ' + (SubLinePos === 'left' ? styles.annotation_left : '') + ' font-xs font-cursive'}>
	        <Image src="/arrow.svg" height={10} width={31} alt="Arrow" className={styles.annotation_arrow + ' ' + (SubLinePos === 'left' ? styles.annotation_arrow_left : '')} />
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