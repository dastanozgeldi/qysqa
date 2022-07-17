import type { NextPage } from "next";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
  title: string;
}

const Layout: NextPage<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title} | Qysqa</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
