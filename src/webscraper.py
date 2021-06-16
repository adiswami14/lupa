import requests
import re
import pandas as pd
import yfinance as yf
import numpy as np

def get_single_year_returns(stock_name):
    single_year_df = yf.Ticker(stock_name).history('1y')
    return single_year_df

df = get_single_year_returns("AAPL")
print(df)