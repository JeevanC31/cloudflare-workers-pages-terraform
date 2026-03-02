variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
  type        = string
  sensitive   = true
}

variable "account_id" {
  description = "Cloudflare Account ID"
  type        = string
}

variable "worker_name" {
  description = "Worker script name"
  type        = string
  default     = "backend-worker"
}

variable "pages_project_name" {
  description = "Pages project name"
  type        = string
  default     = "frontend-pages-project"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}