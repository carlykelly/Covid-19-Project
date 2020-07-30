#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jul 30 11:41:24 2020

@author: Sarah
"""
import pandas as pd
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_pymongo import PyMongo
import json
from pymongo import MongoClient

app = Flask(__name__)

# Read in the csv
csv = pd.read_csv("../Resources/us-states.csv")
states_df = pd.DataFrame(csv)

# Called the .json records
json_states = states_df.to_json(orient='records')

parsed = json.loads(json_states)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/nyt-data"
# mongo = PyMongo(app)

client = MongoClient('localhost', 27017)

# Use flask_pymongo to set up mongo connection
db = client['nyt_covid_db']
collection_state_nyt = db['nyt_state_covid']

with open('records.json') as f:
    file_data = json.load(f)
collection_state_nyt.insert_many(file_data)
client.close()

@app.route("/")
def index():
    
    return render_template("index.html")

@app.route("/nyt_covid_state")
def nytcovid():
    states = mongo.db.records
    
    

if __name__ == "__main__":
    app.run(debug=True)    
    
    
 
    
# @app.route("/scrape")
# def scraper():
#     listings = mongo.db.listings
#     listings.drop()
#     listings_data = scrape_craigslist.scrape()
    
#     '''
#     for l in listings_data:
#         try:
#             listings.insert_one(l)
#         except Exception as e:
#             print(f'error: {e}')
#     '''
        
#     listings.insert_many(listings_data)
    
#     print(len(listings_data))
            
#     return redirect("/", code=302)



