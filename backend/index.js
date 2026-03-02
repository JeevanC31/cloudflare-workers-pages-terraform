export default {
  async fetch(request, env, ctx) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Production-ready Worker deployed 🚀"
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
};