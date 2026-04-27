# Devopstrio AVD Onboarding Accelerator
# Core Platform Infrastructure (Terraform)
# Target: Azure RM

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. Platform Resource Group
resource "azurerm_resource_group" "onboard_rg" {
  name     = "rg-avd-onboarding-prd"
  location = "uksouth"
  tags = {
    Automation = "Onboarding-Accelerator"
    Component  = "Platform-Core"
  }
}

# 2. Key Vault (Secrets Management for Graph API / ARM)
resource "azurerm_key_vault" "onboard_vault" {
  name                = "kv-avd-onboarding-prd"
  location            = azurerm_resource_group.onboard_rg.location
  resource_group_name = azurerm_resource_group.onboard_rg.name
  tenant_id           = "your-tenant-id"
  sku_name            = "premium"

  access_policy {
    tenant_id = "your-tenant-id"
    object_id = "automation-managed-identity-id"
    secret_permissions = ["Get", "List"]
  }
}

# 3. PostgreSQL Flexible Server (Database)
resource "azurerm_postgresql_flexible_server" "onboard_db" {
  name                   = "psql-avd-onboarding-prd"
  resource_group_name    = azurerm_resource_group.onboard_rg.name
  location               = azurerm_resource_group.onboard_rg.location
  version                = "13"
  administrator_login    = "onboard_admin"
  administrator_password = "secure-password-from-vault"
  storage_mb             = 32768
  sku_name               = "GP_Standard_D2s_v3"
}

# 4. Storage for Automation Scripts & Log Archives
resource "azurerm_storage_account" "onboard_storage" {
  name                     = "stavdonboardprd"
  resource_group_name      = azurerm_resource_group.onboard_rg.name
  location                 = azurerm_resource_group.onboard_rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
}

# 5. Log Analytics for Platform Observability
resource "azurerm_log_analytics_workspace" "onboard_law" {
  name                = "law-avd-onboarding-prd"
  location            = azurerm_resource_group.onboard_rg.location
  resource_group_name = azurerm_resource_group.onboard_rg.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# Outputs
output "onboarding_db_endpoint" {
  value = azurerm_postgresql_flexible_server.onboard_db.fqdn
}

output "storage_account_name" {
  value = azurerm_storage_account.onboard_storage.name
}
