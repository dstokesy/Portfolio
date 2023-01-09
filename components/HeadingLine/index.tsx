import Image from 'next/image'
import styles from './index.module.scss'
import cx from 'classnames';

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
		const stylesAl = (SubLinePos === 'left' ? styles.annotation_left : '');

		return (
	  	<span className="relative">
	      <span>
	        {Line}
	      </span>
	      <span className={cx(styles.annotation, 'font-xs font-cursive', (SubLinePos === 'left' ? styles.annotation_left : ''))}>
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