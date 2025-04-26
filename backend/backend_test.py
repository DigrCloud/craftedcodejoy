import requests
import pytest
import os
from datetime import datetime

# Get the backend URL from environment variable
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_URL = f"{BACKEND_URL}/api"

def test_root_endpoint():
    """Test the root endpoint"""
    try:
        response = requests.get(f"{API_URL}/")
        assert response.status_code == 200
        assert response.json() == {"message": "Hello World"}
        print("✅ Root endpoint test passed")
    except Exception as e:
        print(f"❌ Root endpoint test failed: {str(e)}")
        raise

def test_status_check_flow():
    """Test the status check creation and retrieval flow"""
    try:
        # Test creating a status check
        client_name = f"test_client_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        create_response = requests.post(
            f"{API_URL}/status",
            json={"client_name": client_name}
        )
        assert create_response.status_code == 200
        created_status = create_response.json()
        assert created_status["client_name"] == client_name
        print("✅ Status check creation test passed")

        # Test getting all status checks
        get_response = requests.get(f"{API_URL}/status")
        assert get_response.status_code == 200
        status_checks = get_response.json()
        assert isinstance(status_checks, list)
        assert any(check["client_name"] == client_name for check in status_checks)
        print("✅ Status check retrieval test passed")
    except Exception as e:
        print(f"❌ Status check flow test failed: {str(e)}")
        raise

if __name__ == "__main__":
    print("\n🔍 Starting backend API tests...")
    try:
        test_root_endpoint()
        test_status_check_flow()
        print("\n✨ All backend tests passed successfully!")
    except Exception as e:
        print(f"\n❌ Tests failed: {str(e)}")
