import styles from "./index.module.scss";
import ContentType from "./../../types/Content";

export default function ContentSection({ content }: { content: ContentType }) {
  return (
    <div className="pt-20 pb-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
          <h2 className={styles.heading}>{content.title}</h2>
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-13">
          <p>{content.content}</p>
        </div>
      </div>
    </div>
  );
}
