from bs4 import BeautifulSoup
import re
import requests
from googlesearch import search

def convert_to_stock_name(company_name):
    '''
    converts a given company name to its "stock name", or essentially
    what it's name is on the NASDAQ/S&P markets
    '''

    search_results = []

    results = search(company_name) # Iterate through search results, get result in SearchResponse object
    for result in results:
        print(result)

    # request = requests.get("http://"+str(result)).content
    # print(request)

    return search_results

convert_to_stock_name("Apple")
