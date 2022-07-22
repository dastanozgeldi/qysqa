import Head from "next/head";
import Layout from "../components/Layout";
import LookupLink from "../components/Shortener/LookupLink";

const Lookup = () => {
  return (
    <Layout>
      <Head>
        <title>URL Lookup | Qysqa</title>
      </Head>
      <LookupLink />
    </Layout>
  );
};

export default Lookup;
