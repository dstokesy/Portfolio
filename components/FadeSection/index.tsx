import { useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

export default function FadeSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    const currentRef = ref?.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className={cx(styles.section, isVisible ? styles.section_visible : "")}
      ref={ref}
    >
      {children}
    </div>
  );
}
