import cx from "classnames";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Avatar({
  path,
  title,
  shadow,
}: {
  path: string;
  title: string;
  shadow?: boolean;
}) {
  return (
    <div className={cx(styles.wrapper, shadow ? styles.wrapper_shadow : "")}>
      <Image
        src={path}
        height={250}
        width={250}
        alt={title}
        className={styles.avatar}
      />
    </div>
  );
}
