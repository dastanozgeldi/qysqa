import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import CreateLink from "../components/Shortener/CreateLink";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Qysqa</title>
      </Head>
      <CreateLink />
    </Layout>
  );
};

export default Home;
