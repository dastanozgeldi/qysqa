import type { NextPage } from "next";
import Features from "../components/About/Features";
import WhatIsQysqa from "../components/About/WhatIsQysqa";
import Page from "../components/Layout/Page";

const About: NextPage = () => {
  return (
    <Page title="About" className="flex-col">
      <WhatIsQysqa />
      <Features />
    </Page>
  );
};

export default About;
