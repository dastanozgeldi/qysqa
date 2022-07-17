import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <form className={styles.form}>
        <h1>&lt; URL Shortener &gt;</h1>
        <input className={styles.url} placeholder="https://dositan-links.vercel.app" />
        <div className={styles.token}>
          <h3>https://qysqa.xyz/</h3>
          <input type="text" placeholder="Custom token [optional]" />
        </div>
        <button>Shorten</button>
      </form>
    </Layout>
  );
};

export default Home;
