# importing necessary libraries
import pandas as pd
import json
import scraping_project
import scraping_project2
import os

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

is_heroku = False
if 'IS_HEROKU' in os.environ:
    is_heroku = True

# Import your config file(s) and variable(s)
if is_heroku == False:
    from config import mongoURL
    API_Key = "Hello!"
else:
    mongoURL = os.environ.get('mongoURL')
    API_Key = os.enviorn.get('API_Key')
    # consumer_key = os.environ.get('consumer_key')
    # consumer_secret = os.environ.get('consumer_secret')
    # access_token = os.environ.get('access_token')
    # access_token_secret = os.environ.get('access_token_secret')
    # weather_api_key = os.environ.get('weather_api_key')

from flask_pymongo import PyMongo
#from config import mongoURL 
from pymongo import MongoClient
from flask_caching import Cache

cache_config = {
    "DEBUG": True,          # some Flask specific configs
    "CACHE_TYPE": "simple", # Flask-Caching related configs
    "CACHE_DEFAULT_TIMEOUT": 18000
}

app = Flask(__name__)

# tell Flask to use the above defined config
app.config.from_mapping(cache_config)
cache = Cache(app)

# client = MongoClient('localhost', 27017)
client = MongoClient(mongoURL)

app.config['MONGO_URI'] = mongoURL
mongo = PyMongo(app)


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

#nyt_db = client['nyt_covid_db']
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

# unemp_db = client['unemp_db']
# collection_unemp = unemp_db['st_unemp']
# # Inserting state data
# with open('st_unemp_json.json') as f:
#     st_unemp_file_data = json.load(f)
# collection_unemp.insert_many(set(st_unemp_file_data))

# unemp_db = client['unemp_db']
# collection_unemp = unemp_db['county_unemp']
# # Inserting state data
# with open('county_unemp_json.json') as f:
#     county_unemp_file_data = json.load(f)
# set(collection_unemp.insert_many(county_unemp_file_data))




from pymongo import MongoClient

@app.route("/")
def home():
    scraped_stats = mongo.db.scraped_stats.find_one()
    scraped_news = mongo.db.scraped_news.find_one()
    return render_template("index.html", scraped_stats=scraped_stats, scraped_news=scraped_news)
    
@app.route('/honey_index/')
def honey_index():
    scraped_stats = mongo.db.scraped_stats.find_one()
    return render_template("honey_index.html", scraped_stats=scraped_stats)

@app.route('/integrity_index/')
def integrity_index():
    return render_template("integrity_index.html")
    
@app.route('/about_index/')
def about_index():
    return render_template("about_index.html")

@app.route("/api/state_population")
@cache.cached()
def state_population():

    db=client['population_db']
    collection=db['state_population']
    documents=collection.find()
    df =  pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')
    
    client.close()

    return df_json

@app.route("/api/county_population")
@cache.cached()
def county_population():

    db=client['population_db']
    collection=db['county_population']
    documents=collection.find()
    df =  pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')
    
    client.close()

    return df_json

@app.route("/nyt_covid_state_latest")
@cache.cached()
def nytcovid_st_latest():
    nyt_db = client['nyt_covid_db']
    collection_state_nyt = nyt_db['NYT_state_covid_latest']
    documents=collection_state_nyt.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/nyt_covid_state_daily")
@cache.cached()
def nytcovid_st_daily():
    nyt_db = client['nyt_covid_db']
    collection_state_nyt = nyt_db['NYT_state_covid_daily']
    documents=collection_state_nyt.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/nyt_covid_county")
@cache.cached()
def nytcovidcounty():
    nyt_db = client['nyt_covid_db']
    collection_county_nyt = nyt_db['nyt_county_covid']
    documents=collection_county_nyt.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/nyt_covid_county_latest")
@cache.cached()
def nytcovidcountylatest():
    nyt_db = client['nyt_covid_db']
    collection_county_nyt = nyt_db['NYT_county_json_latest']
    documents=collection_county_nyt.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/timeseries_atlantic")
@cache.cached()
def atlanticcovid():
    Atlantic_db = client['Atlantic_db']
    collection_state_atlantic = Atlantic_db['Atlantic_covid_daily']
    documents=collection_state_atlantic.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/atlantic_covid_latest")
@cache.cached()
def atlantic_covid_latest():
    
    Atlantic_db = client['Atlantic_db']
    collection_state_atlantic = Atlantic_db['Atlantic_covid_latest']
    documents=collection_state_atlantic.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records') 
    
    client.close()
    
    return df_json

@app.route("/unemployment_by_state")
@cache.cached()
def stateUnemp():
    st_unemp_db = client['unemp_db']
    collection_st_unemp = st_unemp_db['unemp_by_state']
    documents=collection_st_unemp.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')

    client.close()

    return df_json

@app.route("/unemployment_by_county")
@cache.cached()
def countyUnemp():
    county_unemp_db = client['unemp_db']
    collection_county_unemp = county_unemp_db['unemp_by_county']
    documents=collection_county_unemp.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')

    client.close()

    return df_json

@app.route("/timeseries_nyt")
@cache.cached()
def timeseries():
    timeseries_db = client['timeseries_db']
    collection_timeseries = timeseries_db['timeseries_covid']
    documents=collection_timeseries.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')

    client.close()

    return df_json

@app.route("/active_scrape")
@cache.cached(timeout = 300)
def scrape_now(): 
    scraped_stats = mongo.db.scraped_stats
    files = scraping_project.scrape_all()
    scraped_stats.update({}, files, upsert=True)

    client.close()

    return redirect("/", code=302)

@app.route("/comparison_scrape")
@cache.cached(timeout = 300)
def scrape_now2(): 
    scraped_stats = mongo.db.scraped_stats
    files = scraping_project.scrape_all()
    scraped_stats.update({}, files, upsert=True)

    client.close()

    return redirect("/honey_index/", code=302)

@app.route("/pull_mongo")
@cache.cached(timeout = 300)
def scrape_it():
    
    scraped_stats = client["scraped_stats"]
    collection_scraped = scraped_stats["source_scrape"]
    documents=collection_scraped.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')
    
    client.close()

    return df_json 

@app.route("/scrape_the_news")
@cache.cached(timeout = 300)
def scrape_news():
    scraped_news = mongo.db.scraped_news
    files = scraping_project2.google_scrape()
    scraped_news.update({}, files, upsert=True)

    client.close()

    return files
    
@app.route("/pull_news")
@cache.cached(timeout = 300)
def scrape_it_real_good():
    
    scraped_news = client["scraped_news"]
    collection_news_scrape = scraped_news["google_scrape"]
    documents=collection_news_scrape.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')
    
    client.close()

    return df_json

@app.route("/county_geojson")
@cache.cached()
def lots_o_geo():
    
    geojson = client["geojson"]
    collection_county_geo = geojson["county_geojson"]
    documents=collection_county_geo.find()
    df = pd.DataFrame(list(documents))
    df_json = df.to_json(default_handler=str,orient='records')
    
    client.close()

    return df_json

@app.route("/api_get_key")
@cache.cached()
def key():

    return json.dumps({"key":API_Key})


if __name__ == "__main__":
    app.run(debug=True)