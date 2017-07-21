import json, requests
from pprint import pprint

response = requests.get('https://openapi.etsy.com/v2/listings/active?api_key=byl1k0uc18ste5t3c6qhm6rd&tags=gooseberry, pyrex, 441')

data_raw = response.json()
prices = []

for item in data_raw['results']:
    
    prices.append(float(item['price']))

print(prices)

"""with open('data.txt', 'w+') as json_file:
    json.dumps(data_raw, json_file)"""
