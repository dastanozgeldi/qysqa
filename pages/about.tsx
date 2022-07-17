import type { NextPage } from "next";
import Features from "../components/About/Features";
import WhatIsQysqa from "../components/About/WhatIsQysqa";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout title="About">
      <WhatIsQysqa />
      <Features />
    </Layout>
  );
};

export default About;
