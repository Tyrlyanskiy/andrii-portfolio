resource "aws_s3_bucket" "andrii-d-code-site" {
  bucket = "andrii.d.code-documents"

  tags = {
    Envirenment = "Prod"
  }

}
