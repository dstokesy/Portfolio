import cx from "classnames";
import { useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";

export default function PopInSection({
  disablePadding,
  children,
}: {
  disablePadding?: boolean;
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
      className={cx(
        styles.section,
        isVisible ? styles.section_visible : "",
        disablePadding == false ? "pt-12 pb-12" : ""
      )}
      ref={ref}
    >
      {children}
    </div>
  );
}
