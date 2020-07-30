# importing necessary libraries
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_pymongo import PyMongo

app = Flask(__name__)


from pymongo import MongoClient
import json
client = MongoClient('localhost', 27017)

# Inserting state data
db = client['population_db']
collection_state = db['state_population']

with open('state_pop.json') as f:
    file_data = json.load(f)
collection_state.insert_many(file_data)

# Inserting county data
collection_county = db['county_population']
with open('state_county_pop.json') as f:
    file_data1 = json.load(f)
collection_county.insert_many(file_data1)
# Inserting into it's own MongoDB for now...
nyt_db = client['nyt_covid_db']
collection_state_nyt = nyt_db['nyt_state_covid']

with open('nyt_covid_states.json') as f:
    file_data_nyt = json.load(f)
collection_state_nyt.insert_many(file_data_nyt)

client.close()

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
    states = mongo.db.records
    
            

if __name__ == "__main__":
    app.run(debug=True)