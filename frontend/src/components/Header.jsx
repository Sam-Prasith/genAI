export default function Header({ onBackToHome }) {
  return (
    <header>
      {onBackToHome && (
        <button className="back-button" onClick={onBackToHome}>
          ← Back to Home
        </button>
      )}
      <h1>AI Quote & Poster Maker</h1>
      <p>Create inspiring quote posters instantly!</p>
    </header>
  );
}
