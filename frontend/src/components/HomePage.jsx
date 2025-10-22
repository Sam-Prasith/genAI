export default function HomePage({ onGetStarted }) {
  return (
    <div className="home-page">
      {/* Professional Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">PosterAI</a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Create Professional
            <span className="gradient-text"> AI Posters</span>
          </h1>
          <p className="hero-subtitle">
            Transform your ideas into stunning inspirational posters with AI-powered quotes, professional typography, and beautiful visuals. Perfect for social media, presentations, and marketing.
          </p>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Content</h3>
              <p>Generate inspiring quotes tailored to your specific topic using advanced AI technology</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Professional Design</h3>
              <p>Beautiful typography and layouts with customizable styles for any brand or purpose</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Create and download high-quality posters in seconds, ready for immediate use</p>
            </div>
          </div>

          <button className="cta-button" onClick={onGetStarted}>
            <span className="button-text">Start Creating</span>
            <span className="button-icon">→</span>
          </button>

          <div className="sample-topics">
            <p>Popular Categories</p>
            <div className="topic-tags">
              <span className="topic-tag">Batman</span>
              <span className="topic-tag">Superman</span>
              <span className="topic-tag">Spider-Man</span>
              <span className="topic-tag">Iron Man</span>
              <span className="topic-tag">Wonder Woman</span>
              <span className="topic-tag">Thor</span>
              <span className="topic-tag">Captain America</span>
              <span className="topic-tag">Superhero</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="sample-poster">
            <img 
              src="https://picsum.photos/480/360?random=999" 
              alt="Professional Poster Sample" 
              className="sample-image"
            />
            <div className="sample-overlay">
              <h3 className="sample-quote">
                "Innovation distinguishes between a leader and a follower."
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <p className="subtitle">Create professional posters in three simple steps</p>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Define Your Message</h3>
            <p>Enter your topic, theme, or keyword. Our AI will understand the context and generate relevant, inspiring content.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Choose Your Style</h3>
            <p>Select from professionally designed templates including minimal, modern, vintage, or artistic styles to match your brand.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Download & Share</h3>
            <p>Get your high-resolution poster instantly. Perfect for social media, presentations, or print materials.</p>
          </div>
        </div>
      </div>
    </div>
  );
}