resource "cloudflare_workers_script" "backend" {
  account_id = var.account_id
  name       = var.worker_name
  content    = file("${path.module}/../backend/index.js")
  module     = true
}