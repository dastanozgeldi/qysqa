import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    { label: "About", href: "/about" },
    { label: "Lookup", href: "/lookup" },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Qysqa is a URL shortener app created to keep your links short."
        />
        <meta name="author" content="Dastan Ozgeldi" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Qysqa - Short Links Rule" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@dastanozgeldi" />
        <meta name="twitter:image" content="https://qysqa.dosek.xyz/card.png" />
        <meta property="og:site_name" content="Qysqa" />
        <meta name="og:title" content="Qysqa - Short Links Rule" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://qysqa.dosek.xyz/card.png" />
        <title>Qysqa - Short Links Rule</title>
      </Head>
      <Header links={links} />
      <main>{children}</main>
      <Footer links={links} />
    </>
  );
};

export default Layout;
