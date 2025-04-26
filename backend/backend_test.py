import requests
import unittest
from datetime import datetime

class CraftedCodeJoyAPITest(unittest.TestCase):
    def setUp(self):
        self.base_url = "https://fbc65539-a17d-49cd-a11c-c40dc99a05ca.preview.emergentagent.com/api"
        self.test_client_name = f"test_client_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

    def test_1_root_endpoint(self):
        """Test the root endpoint"""
        print("\nTesting root endpoint...")
        response = requests.get(f"{self.base_url}/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "Hello World"})
        print("✅ Root endpoint test passed")

    def test_2_create_status_check(self):
        """Test creating a status check"""
        print("\nTesting status check creation...")
        data = {"client_name": self.test_client_name}
        response = requests.post(f"{self.base_url}/status", json=data)
        self.assertEqual(response.status_code, 200)
        response_data = response.json()
        self.assertEqual(response_data["client_name"], self.test_client_name)
        self.assertIn("id", response_data)
        print("✅ Status check creation test passed")

    def test_3_get_status_checks(self):
        """Test getting status checks"""
        print("\nTesting get status checks...")
        response = requests.get(f"{self.base_url}/status")
        self.assertEqual(response.status_code, 200)
        status_checks = response.json()
        self.assertIsInstance(status_checks, list)
        # Verify our test client exists in the list
        client_names = [check["client_name"] for check in status_checks]
        self.assertIn(self.test_client_name, client_names)
        print("✅ Get status checks test passed")

if __name__ == '__main__':
    unittest.main(verbosity=2)
