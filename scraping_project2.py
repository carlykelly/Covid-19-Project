
import requests
import time
import pymongo 

from bs4 import BeautifulSoup
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from pymongo import MongoClient
from splinter import Browser

import feedparser
from pandas.io.json import json_normalize
import pandas as pd
import requests

def google_scrape():

    url='https://news.google.com/rss/search?q=covid'
    news_feed = feedparser.parse(url) 

    covid_scrape=pd.json_normalize(news_feed.entries)

    #Read articles links
    title =covid_scrape['title']
    title = title.to_list()

    link = covid_scrape['link']
    link = link.to_list()

    published = covid_scrape['published']
    published = published.to_list()

    google_search = {'Title':title,'Link':link,'Published':published}

    return google_search
