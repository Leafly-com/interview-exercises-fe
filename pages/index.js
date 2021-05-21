import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Leafly's Frontend Interview!
        </h1>

        <p className={styles.description}>
          Your interviewer will ask you to complete any/some/all of the
          following exercises.
        </p>

        <div className={styles.grid}>
          <Link href="/strains">
            <a className={styles.card}>
              <h3>Strains List</h3>
              <p>Make this list look dank</p>
            </a>
          </Link>
          <Link href="/dispensaries">
            <a className={styles.card}>
              <h3>Dispensaries List</h3>
              <p>Check out LA's selection of dispensaries</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
