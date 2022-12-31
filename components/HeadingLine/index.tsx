import Image from 'next/image'
import styles from './index.module.scss'

export default function HeadingLine({
  Line,
  SubLine,
  SubLinePos
}: {
  Line: React.ReactNode
  SubLine?: React.ReactNode
  SubLinePos?: boolean
}) {

	if (SubLine) {
		return (
	  	<span class="relative">
	      <span>
	        {Line}
	      </span>
	      <span className={styles.annotation + ' ' + (SubLinePos === 'static' ? styles.annotation_static : '') + ' font-xs font-cursive'}>
	        <Image src="/arrow.svg" height={10} width={31} className={styles.annotation_arrow + ' ' + (SubLinePos === 'static' ? styles.annotation_arrow_inline : '')} />
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