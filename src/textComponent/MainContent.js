import React, { useState } from "react";

const MainContent = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const clearText = () => {
    if (text) {
      const confirmation = window.confirm("Are you sure you want to clear the text?");
      if (confirmation) {
        setText("");
        setWordCount(0);
        setCharCount(0);
        setSentenceCount(0);
      }
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    // Calculate word count, character count, and sentence count
    const words = newText.trim().split(/\s+/);
    setWordCount(words.length);
    setCharCount(newText.length);
    const sentences = newText.split(/[.!?]+/);
    setSentenceCount(sentences.length - 1);
  };

  const previewText = text.split("\n").map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return (
    <div className="container mt-4">
      <h1>Enter the Text To Analyze Below</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="6"
          placeholder="Type your text here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <p>
          Word Count: {wordCount} | Character Count: {charCount} | Sentence Count: {sentenceCount}
        </p>
      </div>
      <div className="mb-3">
        <button className="btn btn-secondary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button
          className="btn btn-secondary mx-1"
          onClick={() => setText(text.toUpperCase())}
        >
          Uppercase
        </button>
        <button
          className="btn btn-secondary mx-1"
          onClick={() => setText(text.toLowerCase())}
        >
          Lowercase
        </button>
        <button
          className="btn btn-secondary mx-1"
          onClick={() =>
            setText(text.replace(/(^\w|\s\w)/g, (match) => match.toUpperCase()))
          }
        >
          Sentence Case
        </button>
      </div>
      <div className="mb-3">
        <h2>Preview</h2>
        <div className="preview">{previewText}</div>
      </div>
    </div>
  );
};

export default MainContent;
