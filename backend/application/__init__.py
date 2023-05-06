from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)
app.config["SECRET_KEY"] = "ffa5538b7e176c8ddb4fe1fb39a2775dbe9e1643"
cluster = "mongodb+srv://mykola:Qw121213@methacksprojectdb.s3vynya.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(cluster)
user_db = client.MethacksApp


from application import routes