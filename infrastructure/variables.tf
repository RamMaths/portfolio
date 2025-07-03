variable "aws_region" {
  default = "us-east-1"
}

variable "aws_profile" {
  description = "AWS Profile Credentials"
}

variable "bucket_name" {
  description = "Existing S3 bucket for portfolio"
}

variable "domain_name" {
  description = "Domain name for the website (e.g., www.example.com)"
}

variable "hosted_zone_name" {
  description = "Route 53 hosted zone domain (e.g., example.com)"
}

variable "certificate_arn" {
  description = "Existing ACM Certificate ARN"
}
