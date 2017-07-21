import json
from io import StringIO

with open('data.txt') as json_file:
    data = json.load(json_file)

print(type(data))

"""io = StringIO()
json.dump(data, io, indent=4)

data_stream = io.getvalue()
print(data_stream"""