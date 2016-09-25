import json
import time
import requests

with open('SP500.json', 'r') as jsdataf:
	data = json.load(jsdataf)
# print data

session = requests.Session()


id_list = []
addr_list = []
newData = []
for i,d in enumerate(data):
	r = requests.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+d['Name']+"&key=AIzaSyDsVfCDvqantDA5YX8K0_fiYkJoH_xlGDM"
				)
	print r.text
	pred = r.json()['predictions']
	if len(pred) > 0:
		pred = pred[0]
		d['place_id'] = pred['place_id']
		d['loc'] = pred['description']
		loc_r = requests.get('https://maps.googleapis.com/maps/api/geocode/json?place_id=' + pred['place_id'] + ...
			'&language=en&key=AIzaSyApT24PrB0jOfB23HizzbdiET9ER0zSDCw'
			)
		lng = loc_r.json()['results'][0]['geometry']['location']['lng']
		lat = loc_r.json()['results'][0]['geometry']['location']['lat']
		d['lng'] = lng
		d['lat'] = lat

		newData.append(d)
	print i
	if i % 10 == 0:
		time.sleep(10) # delays for 10 seconds

with open('newSP500.json', 'w') as newjs:
	json.dump(newData, newjs)
