let tasks = [];
let idCounter = 1;

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {

  const allowedOrigin = "https://cloudflare-workers-pages-terraform.pages.dev";

  const corsHeaders = {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const url = new URL(request.url);

  // GET ALL TASKS
  if (request.method === "GET" && url.pathname === "/tasks") {
    return jsonResponse(tasks, corsHeaders);
  }

  // ADD TASK
  if (request.method === "POST" && url.pathname === "/tasks") {
    const body = await request.json();

    if (!body.title || !body.content) {
      return jsonResponse({ error: "Missing fields" }, corsHeaders, 400);
    }

    const newTask = {
      id: idCounter++,
      title: body.title,
      content: body.content
    };

    tasks.push(newTask);

    return jsonResponse({ message: "Task added", task: newTask }, corsHeaders);
  }

  // UPDATE TASK
  if (request.method === "PUT" && url.pathname.startsWith("/tasks/")) {
    const id = parseInt(url.pathname.split("/")[2]);
    const body = await request.json();

    const task = tasks.find(t => t.id === id);

    if (!task) {
      return jsonResponse({ error: "Task not found" }, corsHeaders, 404);
    }

    task.title = body.title || task.title;
    task.content = body.content || task.content;

    return jsonResponse({ message: "Task updated", task }, corsHeaders);
  }

  // DELETE TASK
  if (request.method === "DELETE" && url.pathname.startsWith("/tasks/")) {
    const id = parseInt(url.pathname.split("/")[2]);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
      return jsonResponse({ error: "Task not found" }, corsHeaders, 404);
    }

    tasks.splice(index, 1);

    return jsonResponse({ message: "Task deleted" }, corsHeaders);
  }

  return new Response("Not Found", { status: 404 });
}

function jsonResponse(data, headers, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  });
}