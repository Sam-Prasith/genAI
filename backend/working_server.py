#!/usr/bin/env python3
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import random

class PosterHandler(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        self._set_headers()
        response = {"message": "AI Poster Generator is running!", "status": "active"}
        self.wfile.write(json.dumps(response).encode())

    def do_POST(self):
        if self.path == '/generate':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                topic = data.get('topic', 'motivation').lower()
                style = data.get('style', 'modern')
                
                quotes = {
                    'success': [
                        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                        "The only impossible journey is the one you never begin.",
                        "Success is walking from failure to failure with no loss of enthusiasm."
                    ],
                    'friendship': [
                        "A real friend is one who walks in when the rest of the world walks out.",
                        "Friendship is the only cement that will ever hold the world together.",
                        "True friendship comes when the silence between two people is comfortable."
                    ],
                    'motivation': [
                        "The only way to do great work is to love what you do.",
                        "Believe you can and you're halfway there.",
                        "Don't watch the clock; do what it does. Keep going."
                    ],
                    'dreams': [
                        "All our dreams can come true if we have the courage to pursue them.",
                        "The future belongs to those who believe in the beauty of their dreams.",
                        "Dream big and dare to fail."
                    ]
                }
                
                if topic in quotes:
                    quote = random.choice(quotes[topic])
                else:
                    quote = f"Believe in your {topic} and make it happen!"
                
                image_url = f"https://picsum.photos/800/600?random={random.randint(100, 999)}"
                
                response = {
                    "quote": quote,
                    "image_url": image_url,
                    "topic": topic,
                    "style": style
                }
                
                self._set_headers()
                self.wfile.write(json.dumps(response).encode())
                print(f"Generated poster: {topic} -> {quote[:50]}...")
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                error_response = {"error": str(e)}
                self.wfile.write(json.dumps(error_response).encode())
        else:
            self.send_response(404)
            self.end_headers()

def run_server():
    server_address = ('', 5001)
    httpd = HTTPServer(server_address, PosterHandler)
    print("🚀 AI Poster Generator Server starting...")
    print("📍 Server running at: http://localhost:5001")
    print("🎯 Ready to generate posters!")
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()