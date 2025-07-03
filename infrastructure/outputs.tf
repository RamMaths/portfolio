output "cloudfront_url" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "website_domain" {
  value = var.domain_name
}
