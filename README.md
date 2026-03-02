#  Cloudflare Workers + Pages Deployment using Terraform

This project demonstrates deploying a full-stack serverless application on **Cloudflare** using **Terraform (Infrastructure as Code)**.

It consists of:

-  **Frontend** → Cloudflare Pages
-  **Backend API** → Cloudflare Workers
-  **Infrastructure Provisioning** → Terraform

---

##  Project Overview

This project showcases:

- Deploying a static frontend using **Cloudflare Pages**
- Deploying a serverless backend using **Cloudflare Workers**
- Managing infrastructure using **Terraform**
- Enabling CORS for secure frontend-backend communication
- Production deployment using workers.dev domain

---

##  Architecture
```text
User Browser
↓
Cloudflare Pages (Frontend)
↓ fetch()
Cloudflare Worker (Backend API)
↓
JSON Response
```
---

### 🔹 Frontend
- Hosted on Cloudflare Pages
- Connected to GitHub repository
- Auto-deploy on push to `main`
- Public URL:
```bash
https://cloudflare-workers-pages-terraform.pages.dev
```
---
### 🔹 Backend
- Hosted on Cloudflare Workers
- Deployed via Terraform
- Exposed via workers.dev

- Public API endpoint:
```bash
https://backend-worker.<your-subdomain>.workers.dev
```
---
## 🛠 Tech Stack

- Terraform
- Cloudflare Workers
- Cloudflare Pages
- JavaScript (Module Worker)
- GitHub
- CORS configuration

---
##  Setup Instructions

### Prerequisites

- Terraform installed
- Cloudflare account
- Cloudflare API Token
- Account ID

---

### Configure Variables

Create a `terraform.tfvars` file:

```hcl
cloudflare_api_token = "your_api_token"
account_id           = "your_account_id"
worker_name          = "backend-worker"
pages_project_name   = "cloudflare-workers-pages-terraform"
production_branch    = "main"
```

- Initialize Terraform
```bash
terraform init
```
- Validate Configuration
```bash
terraform validate
```
- Deploy Infrastructure
```bash
terraform apply
```