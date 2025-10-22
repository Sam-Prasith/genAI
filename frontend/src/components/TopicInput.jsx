import { useState } from "react";

export default function TopicInput({ onGenerate }) {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("minimal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() === "") return;
    onGenerate(topic, style);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter topic (e.g., Success, Friendship)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <select value={style} onChange={(e) => setStyle(e.target.value)}>
        <option value="minimal">Minimal</option>
        <option value="modern">Modern</option>
        <option value="vintage">Vintage</option>
        <option value="artistic">Artistic</option>
      </select>
      <button type="submit">Generate</button>
    </form>
  );
}
