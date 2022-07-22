import type { NextPage } from "next";
import Head from "next/head";
import Features from "../components/About/Features";
import WhatIsQysqa from "../components/About/WhatIsQysqa";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About | Qysqa</title>
      </Head>
      <WhatIsQysqa />
      <Features />
    </Layout>
  );
};

export default About;
