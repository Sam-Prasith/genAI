import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Simple quote generator without API dependency for testing
def generate_simple_quote(topic):
    quotes = {
        "success": [
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "The only impossible journey is the one you never begin.",
            "Success is walking from failure to failure with no loss of enthusiasm."
        ],
        "friendship": [
            "A real friend is one who walks in when the rest of the world walks out.",
            "Friendship is the only cement that will ever hold the world together.",
            "True friendship comes when the silence between two people is comfortable."
        ],
        "motivation": [
            "The only way to do great work is to love what you do.",
            "Believe you can and you're halfway there.",
            "Don't watch the clock; do what it does. Keep going."
        ],
        "dreams": [
            "All our dreams can come true if we have the courage to pursue them.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Dream big and dare to fail."
        ]
    }
    
    topic_lower = topic.lower()
    if topic_lower in quotes:
        return random.choice(quotes[topic_lower])
    else:
        return f"Chase your {topic} with passion and determination!"

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "AI Poster Generator API is running!"})

@app.route("/generate", methods=["POST"])
def generate_poster():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        topic = data.get("topic", "motivation")
        style = data.get("style", "modern")
        
        print(f"Generating poster for topic: {topic}, style: {style}")
        
        # Generate quote
        quote = generate_simple_quote(topic)
        
        # Generate image URL with better randomization
        random_num = random.randint(1, 1000)
        image_url = f"https://picsum.photos/800/600?random={random_num}"
        
        response = {
            "quote": quote,
            "image_url": image_url
        }
        
        print(f"Generated response: {response}")
        return jsonify(response)
        
    except Exception as e:
        print(f"Error generating poster: {str(e)}")
        return jsonify({"error": f"Failed to generate poster: {str(e)}"}), 500

@app.route("/api/prompt", methods=["POST"])
def prompt():
    try:
        data = request.get_json()
        topic = data.get("topic", "")
        style = data.get("style", "")
        
        prompt = f"Create a {style} style artwork about {topic} with beautiful lighting and atmosphere"
        return jsonify({"prompt": prompt})
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("Starting Flask server...")
    app.run(host='0.0.0.0', port=5000, debug=True)
