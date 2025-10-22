from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import os

app = Flask(__name__)
CORS(app)

# Predefined quotes for different topics
QUOTES = {
    "success": [
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only impossible journey is the one you never begin.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "Don't be afraid to give up the good to go for the great.",
        "The way to get started is to quit talking and begin doing."
    ],
    "friendship": [
        "A real friend is one who walks in when the rest of the world walks out.",
        "Friendship is the only cement that will ever hold the world together.",
        "True friendship comes when the silence between two people is comfortable.",
        "A friend is someone who knows all about you and still loves you.",
        "Friendship is born at that moment when one person says to another, 'What! You too?'"
    ],
    "motivation": [
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there.",
        "Don't watch the clock; do what it does. Keep going.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It is during our darkest moments that we must focus to see the light."
    ],
    "dreams": [
        "All our dreams can come true if we have the courage to pursue them.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Dream big and dare to fail.",
        "A dream doesn't become reality through magic; it takes sweat, determination and hard work.",
        "The biggest adventure you can take is to live the life of your dreams."
    ],
    "love": [
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "The best thing to hold onto in life is each other.",
        "Love is not about how much you say 'I love you', but how much you prove that it's true.",
        "Where there is love there is life.",
        "Love is composed of a single soul inhabiting two bodies."
    ],
    "life": [
        "Life is what happens to you while you're busy making other plans.",
        "The purpose of our lives is to be happy.",
        "Life is really simple, but we insist on making it complicated.",
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "Life is 10% what happens to you and 90% how you react to it."
    ]
}

@app.route('/')
def home():
    return jsonify({
        "message": "AI Poster Generator API is running!",
        "endpoints": ["/generate", "/health"],
        "status": "active"
    })

@app.route('/health')
def health():
    return jsonify({"status": "healthy", "service": "poster-generator"})

@app.route('/generate', methods=['POST'])
def generate_poster():
    try:
        # Get request data
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        topic = data.get('topic', '').lower().strip()
        style = data.get('style', 'modern')
        
        print(f"Generating poster - Topic: {topic}, Style: {style}")
        
        # Generate quote based on topic
        if topic in QUOTES:
            quote = random.choice(QUOTES[topic])
        else:
            # Fallback for unknown topics
            quote = f"Believe in your {topic} and make it happen!"
        
        # Generate random image URL
        image_id = random.randint(100, 999)
        image_url = f"https://picsum.photos/800/600?random={image_id}"
        
        response_data = {
            "quote": quote,
            "image_url": image_url,
            "topic": topic,
            "style": style
        }
        
        print(f"Response: {response_data}")
        return jsonify(response_data)
        
    except Exception as e:
        error_msg = f"Error generating poster: {str(e)}"
        print(error_msg)
        return jsonify({"error": error_msg}), 500

if __name__ == '__main__':
    print("🚀 Starting AI Poster Generator Server...")
    print("📍 Server will be available at: http://localhost:5000")
    app.run(host='0.0.0.0', port=5000, debug=True)