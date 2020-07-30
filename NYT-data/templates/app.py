#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jul 30 11:41:24 2020

@author: Sarah
"""
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import json
import pandas as pd
from pymongo import MongoClient

# Read in the csv
csv = pd.read_csv("../Resources/us-states.csv")
states_df = pd.DataFrame(csv)

# Called the .json records
records = states_df.to_json(orient="records")

app = Flask(__name__)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/nyt-data"
# mongo = PyMongo(app)

client = MongoClient('localhost', 27017)

# Use flask_pymongo to set up mongo connection
db = client['nyt_covid_db']
collection_state_nyt = db['nyt_state_covid']

with open('records.json','a+') as f:
    file_data = json.load(f)
    print(f.readlines())
    f.write("test")
collection_state_nyt.insert_many(file_data)

@app.route("/")
def index():
    
    return render_template("index.html")

@app.route("/nyt_covid_state")
def nytcovid():
    states = mongo.db.records
    
    
 
    
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


if __name__ == "__main__":
    app.run(debug=True)

