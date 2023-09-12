import React, { useState } from "react";
import "./App.css";
import Header from "./textComponent/Header";
import MainContent from "./textComponent/MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appStyle = darkMode
    ? { backgroundColor: "black", color: "white" }
    : { backgroundColor: "white", color: "black" }; // Change text color to black in light mode

  return (
    <div className="App" style={appStyle}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent />
    </div>
  );
}

export default App;
