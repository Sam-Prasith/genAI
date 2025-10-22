from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"status": "Server is running!"})

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    topic = data.get('topic', 'motivation')
    style = data.get('style', 'modern')
    
    # Simple quotes
    quotes = [
        f"Believe in your {topic} and achieve greatness!",
        f"Your {topic} journey starts with a single step.",
        f"Success in {topic} comes to those who dare to begin.",
        f"Make your {topic} dreams a reality today!"
    ]
    
    quote = random.choice(quotes)
    image_url = f"https://picsum.photos/800/600?random={random.randint(1, 1000)}"
    
    return jsonify({
        "quote": quote,
        "image_url": image_url
    })

if __name__ == '__main__':
    print("Starting simple Flask server...")
    app.run(host='127.0.0.1', port=5000, debug=True)