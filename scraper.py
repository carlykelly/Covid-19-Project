from splinter import Browser
from bs4 import BeautifulSoup


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"} # MAC USERS!
    #executable_path = {"executable_path": "chromedriver.exe"} # WINDOWS USERS!
    return Browser("chrome", **executable_path, headless=False)

def scrape():

    browser = init_browser()
    listings_list = []

    url = "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html"
    browser.visit(url)


        html = browser.html
        soup = BeautifulSoup(html, "html.parser")
    
        listings = soup.find_all('span', class_='count')
  
        record = {
                 listings[0]
            
                }
        listings_list.append(record)

        print(len(listings_list))
            

    return listings_list