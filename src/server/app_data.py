import json
from io import StringIO

with open('data.txt') as json_file:
    data = json.load(json_file)
