#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug  5 11:50:19 2020

@author: Sarah
"""

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
import os

is_heroku = False
if 'IS_HEROKU' in os.environ:
    is_heroku = True

def scrape_all():
    if is_heroku == False:
        executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    else:
        executable_path = {"executable_path": os.environ.get('CHROME_DRIVER_BIN')}
    browser = Browser('chrome', **executable_path, headless=True)

    url = "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html/"
    browser.visit(url)
    html = browser.html

    cdc_soup = BeautifulSoup(html, 'html.parser')
    cdc_soup = cdc_soup.select_one('div.callouts-container')
    cdc_callouts = cdc_soup.find_all("span", class_='count')

    cdc_confirmed = cdc_callouts[0].text
    cdc_deaths = cdc_callouts[1].text

    # cdc_confirmed = cdc_confirmed.replace(',',"")
    # cdc_confirmed = int(cdc_confirmed)

    # cdc_deaths = cdc_deaths.replace(',',"")
    # cdc_deaths = int(cdc_deaths)

    url = 'https://coronavirus.jhu.edu/'
    browser.visit(url)

    html = browser.html
    jhu_soup = BeautifulSoup(html, 'html.parser')

    cdc_callouts = jhu_soup.find_all("li", class_='FeaturedStats_stat__1MPv_')
    cdc = cdc_callouts[2].text

    jhu_confirmed = cdc[14:]
    # jhu_confirmed = jhu_confirmed.replace(',',"")
    # jhu_confirmed = int(jhu_confirmed)

    cdc = cdc_callouts[3].text
    jhu_deaths = cdc[11:]
    # jhu_deaths = jhu_deaths.replace(',',"")
    # jhu_deaths = int(jhu_deaths)
  
    url = 'https://covidtracking.com/'
    browser.visit(url)

    html = browser.html

    news_soup = BeautifulSoup(html, 'html.parser')

    atlantic_confirmed = news_soup.find_all('div', class_="total-module--number--2XxWt")
    atlantic_confirmed = atlantic_confirmed[1].text
    # atlantic_confirmed = atlantic_confirmed.replace(',',"")
    # atlantic_confirmed = int(atlantic_confirmed)

    atlantic_death = news_soup.find_all('div', class_="total-module--number--2XxWt")
    atlantic_death = atlantic_death[2].text
    # atlantic_death = atlantic_death.replace(',',"")
    # atlantic_death = int(atlantic_death)

    mongo_push = {"cdc_confirmed":cdc_confirmed,
              "cdc_deaths":cdc_deaths,
              "jhu_confirmed":jhu_confirmed,
              "jhu_deaths":jhu_deaths,
              "atlantic_confirmed":atlantic_confirmed,
              "atlantic_death":atlantic_death
            }

    return mongo_push

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

