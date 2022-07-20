import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, slug } = req.body;
  const existUrl = await prisma.shortLink.findMany({ where: { url } });

  if (existUrl.length !== 0) {
    return res.status(201).json(existUrl[0].slug);
  }

  try {
    await prisma.shortLink.create({
      data: { url, slug },
    });

    res.status(201).json(slug);
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
}
