import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";

const ShortLink = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    res.statusCode = 404;
    res.json({ message: "Give a proper slug" });
    return;
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;
    res.json({ message: "Slug not found" });
    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=2592000, stale-while-revalidate");
  return res.json(data);
};

export default ShortLink;
