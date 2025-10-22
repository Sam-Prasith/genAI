import axios from "axios";

const API_BASE = "http://localhost:5001"; // Change if backend port is different

export const generateQuotePoster = async (topic, style) => {
  try {
    console.log(`🚀 Sending request to ${API_BASE}/generate with:`, { topic, style });
    
    // Validate inputs
    if (!topic || topic.trim() === "") {
      throw new Error("Topic is required");
    }
    
    const requestData = { 
      topic: topic.trim(), 
      style: style || "modern" 
    };
    
    console.log("📤 Request data:", requestData);
    
    const response = await axios.post(`${API_BASE}/generate`, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000 // 10 second timeout
    });
    
    console.log("📥 Response received:", response.data);
    
    if (!response.data || !response.data.quote || !response.data.image_url) {
      throw new Error("Invalid response format from server");
    }
    
    return response.data;
  } catch (error) {
    console.error("❌ API Error:", error);
    
    if (error.code === 'ECONNREFUSED') {
      throw new Error("Cannot connect to server. Please make sure the backend is running.");
    }
    
    if (error.response) {
      console.error("Server error response:", error.response.data);
      throw new Error(error.response.data?.error || `Server error: ${error.response.status}`);
    }
    
    if (error.request) {
      throw new Error("No response from server. Please check your connection.");
    }
    
    throw new Error(error.message || "Failed to generate poster");
  }
};
