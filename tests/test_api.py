import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio AVD Onboarding Accelerator
# Integration Tests for Rapid Workforce Provisioning

client = TestClient(app)

def test_health_check_operational():
    """Verify that the onboarding platform gateway is healthy and ready for requests."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["workflow_engine_ready"] is True

def test_template_catalog_listing():
    """Ensure the platform can retrieve the configured workspace blueprints."""
    response = client.get("/templates")
    assert response.status_code == 200
    assert len(response.json()) > 0
    assert "Engineering Premium" in [t["name"] for t in response.json()]

def test_onboarding_request_submission():
    """Verify that a business unit onboarding request is correctly accepted and queued."""
    payload = {
        "requester_name": "Sales Ops Leader",
        "department": "Global Sales - EMEA",
        "user_count": 250,
        "region": "UK South",
        "template_type": "Standard"
    }
    response = client.post("/onboarding/request", json=payload)
    assert response.status_code == 202
    assert "request_id" in response.json()
    assert response.json()["status"] == "Pending Approval"

def test_single_user_provisioning_trigger():
    """Check that an individual user can be provisioned through the accelerator API."""
    payload = {
        "email": "dev-01@devopstrio.com",
        "display_name": "Developer 01",
        "template_id": "tpl-02"
    }
    response = client.post("/users/provision", json=payload)
    assert response.status_code == 201
    assert response.json()["sync_queued"] is True

def test_onboarding_analytics_summary():
    """Ensure the platform reports accurate throughput and SLA metrics."""
    response = client.get("/analytics/summary")
    assert response.status_code == 200
    assert "total_users_accelerated" in response.json()

def test_governance_score_integrity():
    """Verify that the governance engine reports on onboarding compliance."""
    response = client.get("/governance/score")
    assert response.status_code == 200
    assert response.json()["compliance_score"] >= 90
