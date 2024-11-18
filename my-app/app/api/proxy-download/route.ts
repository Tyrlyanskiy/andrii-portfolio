import type { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const url = req.url?.split("url=").pop();

  if (!url) {
    return new Response("Download Url is not provided.", { status: 400 });
  }

  try {
    const response = await fetch(url);
    return response;
  } catch (error) {
    throw error;
  }
}
