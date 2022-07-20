import { prisma } from "../../db/client";

type Params = {
  params: {
    slug: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  try {
    const { slug } = params;
    const data = await prisma.shortLink.findMany({ where: { slug } });

    if (data.length !== 0) {
      return {
        redirect: {
          destination: data[0].url,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const Link = () => {
  return <div>Link</div>;
};

export default Link;
