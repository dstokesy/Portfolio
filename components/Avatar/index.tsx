import Image from "next/image";
import styles from "./index.module.scss";

export default function Avatar({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <div className={styles.wrapper}>
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
