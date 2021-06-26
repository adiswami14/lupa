from bs4 import BeautifulSoup
import re
import requests
from googlesearch import search
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

def convert_to_stock_symbol(company_name):
    '''
    converts a given company name to its "stock name", or essentially
    what it's name is on the NASDAQ/S&P markets
    '''

    driver = webdriver.Chrome(ChromeDriverManager().install())    
    driver.get("https://www.marketwatch.com/tools/quotes/lookup.asp?")
    input_fields(driver, company_name)
    stock_symbols = driver.find_elements_by_xpath('//td[@class="bottomborder"]')
    return stock_symbols[0].text

def input_fields(driver, company_name):
    '''
    Upon accessing the symbol lookup site, this method will be used
    to input the necessary details into the text input field(s), and 
    then click the search button
    '''

    company_input = driver.find_element_by_id("Lookup")
    company_input.send_keys(str(company_name))

    search_button = driver.find_element_by_xpath("//input[@type='submit']")
    search_button.click()
