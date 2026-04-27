-- Devopstrio AVD Onboarding Accelerator
-- Core Workflow & Provisioning Ledger Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    azure_tenant_id VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'User', -- Admin, Approver, User
    onboarded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Templates & Blueprints
CREATE TABLE IF NOT EXISTS templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    config JSONB NOT NULL, -- HostPool Spec, AppGroups, Region
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Onboarding Requests
CREATE TABLE IF NOT EXISTS requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    requester_email VARCHAR(255) NOT NULL,
    request_type VARCHAR(100) NOT NULL, -- NewEmployee, Department, M&A
    template_id UUID REFERENCES templates(id),
    details JSONB, -- User count, naming prefix, region
    status VARCHAR(50) DEFAULT 'PendingApproval', -- Approved, Provisioning, Complete, Failed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS approvals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    request_id UUID REFERENCES requests(id) ON DELETE CASCADE,
    approver_id UUID REFERENCES users(id),
    status VARCHAR(50) NOT NULL, -- Approved, Rejected
    comments TEXT,
    decided_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Infrastructure Mapping
CREATE TABLE IF NOT EXISTS host_pools (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    region VARCHAR(100) NOT NULL,
    current_users INT DEFAULT 0,
    max_capacity INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Analytics & Quality
CREATE TABLE IF NOT EXISTS metrics (
    id BIGSERIAL PRIMARY KEY,
    request_id UUID REFERENCES requests(id),
    task_name VARCHAR(255) NOT NULL, -- IdentitySync, InfraProvision, AppAssign
    duration_seconds INT,
    is_success BOOLEAN DEFAULT TRUE,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    action VARCHAR(255) NOT NULL,
    actor_email VARCHAR(255),
    resource_id VARCHAR(255),
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Optimization Indexes
CREATE INDEX idx_req_tenant ON requests(tenant_id);
CREATE INDEX idx_req_status ON requests(status);
CREATE INDEX idx_approval_request ON approvals(request_id);
CREATE INDEX idx_metric_task ON metrics(task_name);
CREATE INDEX idx_user_tenant ON users(tenant_id);
