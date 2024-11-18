import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
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
