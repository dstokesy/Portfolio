import Image from 'next/image'
import styles from './index.module.scss'
import cx from 'classnames';

export default function HeadingLine({
	children,
  subLine,
  subLinePos
}: {
  children: React.ReactNode
  subLine?: React.ReactNode
  subLinePos?: string
}) {

	if (subLine) {
		return (
	  	<span className="relative">
	      <span>
	        {children}
	      </span>
	      <span className={cx(styles.annotation, 'font-xs font-cursive', (subLinePos === 'left' ? styles.annotation_left : ''))}>
	        <Image src="/arrow.svg" height={10} width={31} alt="Arrow" className={styles.annotation_arrow + ' ' + (subLinePos === 'left' ? styles.annotation_arrow_left : '')} />
	        {subLine}
	      </span>
	    </span>
	  )
	} else {
		return (
			<span>{children}</span>
		);
	}
}