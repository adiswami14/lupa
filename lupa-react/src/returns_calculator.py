import pandas as pd
import yfinance as yf
import numpy as np
import webscraper
import sys

def get_year_returns(stock_name):
    single_year_df = yf.Ticker(stock_name).history('1y')
    return single_year_df

def get_month_returns(stock_name):
    month_df = yf.Ticker(stock_name).history('1mo')
    return month_df

def get_week_returns(stock_name):
    week_df = yf.Ticker(stock_name).history('1wk')
    return week_df

def get_daily_returns(stock_name):
    day_df = yf.Ticker(stock_name).history('1d')
    return day_df

company_arg = ' '.join([str(elem) for elem in sys.argv[1: len(sys.argv)]])
df = get_month_returns(webscraper.convert_to_stock_symbol(company_arg))
df.to_csv("lupa-react/public/stocks.csv")