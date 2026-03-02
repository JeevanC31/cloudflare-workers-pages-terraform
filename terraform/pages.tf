resource "cloudflare_pages_project" "frontend" {
  account_id        = var.account_id
  name              = var.pages_project_name
  production_branch = "main"

  source {
    type = "github"

    config {
      owner                         = "JeevanC31"
      repo_name                     = "cloudflare-workers-pages-terraform"
      production_branch             = "main"
      deployments_enabled           = true
      production_deployment_enabled = true
    }
  }

  build_config {
    build_command   = ""
    destination_dir = "frontend"
  }
}