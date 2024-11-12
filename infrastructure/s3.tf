resource "aws_s3_bucket" "andrii-d-code-site" {
  bucket = var.andrii-d-code-site-bucket-name
  tags = {
    Environment = "Prod"
  }
}

resource "aws_s3_bucket_ownership_controls" "public_access" {
  bucket = aws_s3_bucket.andrii-d-code-site.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "andrii-d-code-site" {
  bucket = aws_s3_bucket.andrii-d-code-site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_policy" {
  bucket = aws_s3_bucket.andrii-d-code-site.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.andrii-d-code-site.arn}/*"
      }
    ]
  })
}
