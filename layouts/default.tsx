import Head from "next/head";
import styles from "./default.module.scss";

export const siteTitle = "Daniel Stokes Software Engineer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Daniel Stokes Software Engineer, Leeds"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.layout}>{children}</div>
    </div>
  );
}
