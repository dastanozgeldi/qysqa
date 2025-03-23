import { getLink } from "@/db/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [link] = await getLink(Number(id));

  return (
    <div className="min-h-screen">
      {link.originalUrl} - {link.clicks} clicks
    </div>
  );
}
