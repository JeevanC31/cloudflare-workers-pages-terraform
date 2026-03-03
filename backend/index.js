let count = 0;

export default {
  async fetch(request) {

    const allowedOrigin = "https://cloudflare-workers-pages-terraform.pages.dev";

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    const url = new URL(request.url);

    // GET /count
    if (request.method === "GET" && url.pathname === "/count") {
      return new Response(JSON.stringify({ count }), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    // POST /add
    if (request.method === "POST" && url.pathname === "/add") {
      count++;
      return new Response(JSON.stringify({ count }), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  }
};