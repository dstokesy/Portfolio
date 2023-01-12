import { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss'

export default function FadeSection({children}: {
  children: React.ReactNode
}) {
	const [isVisible, setVisible] = useState(false)
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
	    const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => setVisible(entry.isIntersecting))
	    })

	    const currentRef = ref?.current

	    if (currentRef) {
	    	observer.observe(currentRef);
	    }

	    return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
	}, []);

	return (
		<div className={`${styles.section} ${isVisible ? styles.section_visible : ''} pt-12 pb-12`} ref={ref}>
			{children}
		</div>
	);
}