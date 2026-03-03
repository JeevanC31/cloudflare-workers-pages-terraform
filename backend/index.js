let taskCount = 0;

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

    // Health check
    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({ status: "API Running 🚀" }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      );
    }

    // Get count
    if (url.pathname === "/count" && request.method === "GET") {
      return new Response(
        JSON.stringify({ taskCount }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      );
    }

    // Add task
    if (url.pathname === "/add" && request.method === "POST") {
      taskCount++;
      return new Response(
        JSON.stringify({
          message: "Task added successfully ✅",
          taskCount
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      );
    }

    return new Response("Not Found", { status: 404 });
  }
};