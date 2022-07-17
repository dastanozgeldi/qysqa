import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <Layout title="About">
      <div className={styles.about}>
        <div className={styles.card}>
          <Image
            src="/images/what-is-qysqa.png"
            alt="What is Qysqa"
            width={300}
            height={200}
          />
          <div className={styles.text}>
            <h2>
              What is <span className={styles.highlight}>Qysqa</span>?
            </h2>
            <p>
              Qysqa is an open-source URL shortener project. It was created
              using{" "}
              <span className={styles.highlight}>
                Flask + Jinja templating system.
              </span>{" "}
              Put URL → Shorten → Use
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/features.png"
            alt="What is Qysqa"
            width={300}
            height={170}
          />
          <div className={styles.text}>
            <h2>Features:</h2>
            <ul>
              <li>✨ Custom URL token</li>
              <li>🔎 URL Lookup</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/plans.png"
            alt="What is Qysqa"
            width={300}
            height={170}
          />
          <div className={styles.text}>
            <h2>Plans:</h2>
            <ul>
              <li>⌛️ Temporary Short URLs (w/ expiration date)</li>
              <li>👩 Profile Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
