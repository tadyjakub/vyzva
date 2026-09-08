import { getStore } from "@netlify/blobs";

const KEY = "vyzva-data";

export default async (req) => {
  const store = getStore("vyzva-tracker");

  if (req.method === "GET") {
    const value = await store.get(KEY);
    return new Response(value || JSON.stringify({ weeks: {} }), {
      headers: { "content-type": "application/json" }
    });
  }

  if (req.method === "POST") {
    const body = await req.text();
    try {
      JSON.parse(body);
    } catch (e) {
      return new Response(JSON.stringify({ error: "invalid json" }), {
        status: 400,
        headers: { "content-type": "application/json" }
      });
    }
    await store.set(KEY, body);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "content-type": "application/json" }
    });
  }

  return new Response("Method not allowed", { status: 405 });
};
