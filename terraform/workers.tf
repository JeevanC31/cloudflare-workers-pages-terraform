resource "cloudflare_workers_script" "backend" {
  account_id = var.account_id
  script_name = var.worker_name

  content {
    text = file("${path.module}/../backend/index.js")
  }
}