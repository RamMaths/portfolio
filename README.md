# My Portfolio Website

## Deploying the infrastructure

Create the variables file under `infrastructure` directory and modify it with your data.

> You should already have a domain and a valid TLS certificate provided by AWS Certificates Manager.

```sh
cd infrastructure
cat >> terraform.tfvars << EOF
aws_profile      = ""
bucket_name      = ""
domain_name      = ""
hosted_zone_name = ""
certificate_arn  = ""
EOF
```

Deploy the infrastructure!

```sh
terraform init
# Watch what is going to be created
terraform plan
# Create the resources
terraform apply
```

## Architecture Diagram

![Diagram](./repo_assets/architecture.png)
