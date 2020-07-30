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

client.close()




# # Replace with our Mondgo
# app.config["MONGO_URI"] = "mongodb://localhost:27017/population_db"
# # mongo = PyMongo(app)

# # createing route that renders index.html template
# @app.route("/")
# def home():    
#     return render_template("index.html")

# # Query the database and send the jsonified results
# @app.route("/send", methods=["GET", "POST"])
# def send():
#     conn = engine.connect()

#     if request.method == "POST":
#         name = request.form["petName"]
#         pet_type = request.form["petType"]
#         age = request.form["petAge"]

#         pets_df = pd.DataFrame({
#             'name': [name],
#             'type': [pet_type],
#             'age': [age]
#         })

#         pets_df.to_sql('pets', con=conn, if_exists='append', index=False)

#         return redirect("/", code=302)

#     conn.close()

#     return render_template("form.html")

# @app.route("/api/pals-summary")
# def pals_summary():
#     conn = engine.connect()
    
#     query = '''
#         SELECT 
#             type,
#             COUNT(type) as count
#         FROM
#             pets
#         GROUP BY
#             type
#     ''' 

#     pets_df = pd.read_sql(query, con=conn)

#     pets_json = pets_df.to_json(orient='records')

#     conn.close()

#     return pets_json

# @app.route("/api/pals")
# def pals():
#     conn = engine.connect()
    
#     query = '''
#         SELECT 
#             *
#         FROM
#             pets
#     ''' 

#     pets_df = pd.read_sql(query, con=conn)

#     pets_json = pets_df.to_json(orient='records')

#     conn.close()

#     return pets_json

if __name__ == "__main__":
    app.run(debug=True)