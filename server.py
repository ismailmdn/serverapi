import requests
import time

def fetch_data():
    url = "https://appupconfig.com/movies/data"  # Replace with your desired URL
    while True:
        try:
            response = requests.get(url, timeout=15)  # Timeout after 15 seconds
            if response.status_code == 200:
                print("Data fetched successfully:")
                print(response.text[:500])  # Print the first 500 characters of the response
            else:
                print(f"Failed to fetch data. Status code: {response.status_code}")
        except requests.RequestException as e:
            print(f"An error occurred: {e}")
        
        time.sleep(35)  # Wait for 35 seconds

if True:  # This condition is always True, so fetch_data() will run
    fetch_data()
