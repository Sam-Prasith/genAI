import os
from dotenv import load_dotenv, find_dotenv
import google.generativeai as genai

# Load .env from project root
load_dotenv(find_dotenv())

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise Exception("❌ GEMINI_API_KEY is not set in the .env file!")

genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-1.5-flash")

def generate_art_prompt(topic: str, style: str):
    prompt = f"""
    Generate a short but detailed and creative AI art prompt.
    Theme: {topic}
    Art Style: {style}
    The output should describe:
    - Scene, environment, and atmosphere.
    - Lighting, tone, and artistic feel.
    - Use vivid, imaginative language.
    Keep it under 60 words.
    """
    response = model.generate_content(prompt)
    if response and hasattr(response, "text"):
        return response.text.strip()
    return "Failed to generate art prompt. Please try again."

def generate_quote(topic: str):
    prompt = f"""
    Generate an inspiring and motivational quote about {topic}.
    The quote should be:
    - Short and memorable (under 20 words)
    - Positive and uplifting
    - Suitable for a poster
    - Original and creative
    Return only the quote text, no extra formatting or quotation marks.
    """
    response = model.generate_content(prompt)
    if response and hasattr(response, "text"):
        return response.text.strip()
    return "Believe in yourself and achieve greatness."
