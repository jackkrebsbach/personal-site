import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Header } from "../components/reusables/header/Header";
import { Content } from "../components/home/content/Content";
import { Footer } from "../components/reusables/footer/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Krebsbach</title>
        <meta name="description" content="Portfolio for Jack Krebsbach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Content />

        <Footer />
      </main>
    </div>
  );
};

export default Home;
