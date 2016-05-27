# ConnectedCarsAPIC

All connection details to backend services have been removed, these must be replaced to run this code. These are:

1. Cloudant database (wug_demo) connection details in data sources
2. Watson Translate API connection details in data sources
3. Invoke URL for loopback application on bluemix (in gateway assembly)

The easiest way to re-create the Cloudant database used in this demo is to create a new database in Bluemix,  then create the API and then use the ‘POST cars’ operation to create entries in the database. Example JSON below:

{ 
  "description": "Put your hands on the wheel of a Mustang and you feel one thing above everything else: power", 
  "name": "Ford Mustang", 
  "price": 24000, 
  "img_url": “<URL to JPG>.jpg" 
} 

Please register for Bluemix to get your own connection details to the Watson Transate API
