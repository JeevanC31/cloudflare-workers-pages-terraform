export default {
  async fetch(request) {

    const allowedOrigin = "https://cloudflare-workers-pages-terraform.pages.dev";

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Main response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Production-ready Worker deployed 🚀"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      }
    );
  }
};