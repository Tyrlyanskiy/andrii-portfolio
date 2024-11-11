terraform {
  backend "s3" {
    bucket  = "andrii.d.code-terraform-state"
    key     = "terraform.tfstate"
    region  = "eu-central-1"
    encrypt = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.75"
    }
  }
}


provider "aws" {
  region = "eu-central-1"
}
