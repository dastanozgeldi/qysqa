import Head from "next/head";

const Page = ({
  children,
  className = "",
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) => {
  const t = `${title} | Qysqa`;
  return (
    <article className={`min-h-screen flex items-center ${className}`}>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta name="og:title" content={t} />
        </Head>
      )}
      {children}
    </article>
  );
};

export default Page;
