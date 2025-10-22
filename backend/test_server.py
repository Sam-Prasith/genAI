from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Server is working!"})

@app.route('/generate', methods=['POST'])
def generate():
    return jsonify({
        "quote": "Success is not final, failure is not fatal!",
        "image_url": "https://picsum.photos/800/600?random=123"
    })

if __name__ == '__main__':
    app.run(port=5001, debug=True)