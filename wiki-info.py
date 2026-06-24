import requests
from bs4 import BeautifulSoup

def get_wiki_raw(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Target the 'mw-parser-output' class instead of the ID
    content_div = soup.find('div', class_='mw-parser-output')
    
    if content_div:
        # Find all paragraphs in this container
        paragraphs = content_div.find_all('p')
        
        # Look for the first paragraph that actually contains text
        for p in paragraphs:
            if p.text.strip():  # If the paragraph is not just whitespace
                return p.text.strip()
                
    return "No text content found."

url = "https://en.wikipedia.org/wiki/Odisha"
print(get_wiki_raw(url))