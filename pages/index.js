import Head from "next/head";
import styles from "../styles/Start.module.css";
import Navigation from "../components/Navigation";

export default function Start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whitelabel Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
    </div>
  );
}
