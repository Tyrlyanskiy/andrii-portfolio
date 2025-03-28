export async function GET(req: Request) {
  const url = req.url?.split("url=").pop();

  if (!url) {
    return new Response("Download Url is not provided.", { status: 400 });
  }

  try {
    const response = await fetch(decodeURIComponent(url), {
      headers: {
        "Accept-Encoding": "identity",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
