import { useState } from "react";
import HomePage from "./components/HomePage.jsx";
import Header from "./components/Header.jsx";
import TopicInput from "./components/TopicInput.jsx";
import PosterCard from "./components/PosterCard.jsx";
import { generateQuotePoster } from "./api/api.js";
import "./styles/App.css"; 

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [quote, setQuote] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setCurrentPage("generator");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setQuote("");
    setImageUrl("");
  };

  const handleGenerate = async (topic, style) => {
    setLoading(true);
    try {
      console.log("🎯 Starting poster generation with:", { topic, style });
      
      if (!topic || topic.trim() === "") {
        throw new Error("Please enter a topic");
      }
      
      const data = await generateQuotePoster(topic, style);
      console.log("✅ Received data:", data);
      
      if (data && data.quote && data.image_url) {
        setQuote(data.quote);
        setImageUrl(data.image_url);
        console.log("🎨 Poster generated successfully!");
      } else {
        console.error("❌ Invalid response format:", data);
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("❌ Generation error:", error);
      alert(`Failed to generate poster: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (currentPage === "home") {
    return <HomePage onGetStarted={handleGetStarted} />;
  }

  return (
    <div>
      <Header onBackToHome={handleBackToHome} />
      <TopicInput onGenerate={handleGenerate} />
      {loading ? (
        <p className="loading-text">Generating poster...</p>
      ) : (
        <PosterCard quote={quote} imageUrl={imageUrl} />
      )}
    </div>
  );
}
