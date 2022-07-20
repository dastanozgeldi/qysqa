import type { NextPage } from "next";
import Layout from "../components/Layout";
import CreateLink from "../components/CreateLink";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <CreateLink />
    </Layout>
  );
};

export default Home;
