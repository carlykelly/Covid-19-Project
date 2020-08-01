# importing necessary libraries
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_pymongo import PyMongo
from config import mongoURL 

app = Flask(__name__)


from pymongo import MongoClient
import json
# client = MongoClient('localhost', 27017)
client = MongoClient(mongoURL)



# db = client['population_db']
# collection_state = db['state_population']
# #Drop collection everytime app.py is run
# collection_state.remove({})
# # Inserting state data
# with open('state_pop.json') as f:
#     file_data = json.load(f)
# collection_state.insert_many(file_data)

# # Inserting county data
# collection_county = db['county_population']
# #Drop collection everytime app.py is run
# collection_county.remove({})
# with open('county_pop.json') as f:
#     file_data1 = json.load(f)
# collection_county.insert_many(file_data1)

# nyt_db = client['nyt_covid_db']
# #Drop collection everytime app.py is run

# collection_state_nyt= nyt_db['nyt_state_covid']
# collection_state_nyt.remove({})
# with open('state_covid_daily.json') as f:
#     file_data_nyt = json.load(f)
# collection_state_nyt.insert_many(file_data_nyt)

# collection_county_nyt= nyt_db['nyt_county_covid']
# collection_county_nyt.remove({})
# with open('county_nyt_daily.json') as f:
#     file_data_nyt_county = json.load(f)
# collection_county_nyt.insert_many(file_data_nyt_county)

# collection_state_atlantic= nyt_db['atlantic_covid']
# with open('atlantic_covid_daily.json') as f:
#     file_data_atlantic_state = json.load(f)
# collection_state_atlantic.insert_many(file_data_atlantic_state)


from pymongo import MongoClient

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/state_population")
def state_population():

    db=client['population_db']
    collection=db['state_population']
    documents=collection.find()
    df =  pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')
    
    client.close()

    return df_json

@app.route("/api/county_population")
def county_population():

    db=client['population_db']
    collection=db['county_population']
    documents=collection.find()
    df =  pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')
    
    client.close()

    return df_json

@app.route("/nyt_covid_state")
def nytcovid():
    nyt_db = client['nyt_covid_db']
    collection_state_nyt = nyt_db['nyt_state_covid']
    documents=collection_state_nyt.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/nyt_covid_county")
def nytcovidcounty():
    nyt_db = client['nyt_covid_db']
    collection_county_nyt = nyt_db['nyt_county_covid']
    documents=collection_county_nyt.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/atlantic_covid")
def atlanticcovid():
    nyt_db = client['nyt_covid_db']
    collection_state_atlantic = nyt_db['atlantic_state_covid']
    documents=collection_state_atlantic.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

if __name__ == "__main__":
    app.run(debug=True)