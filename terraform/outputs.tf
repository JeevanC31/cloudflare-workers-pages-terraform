output "worker_name" {
  value = cloudflare_workers_script.backend.name
}

output "pages_project_name" {
  value = cloudflare_pages_project.frontend.name
}