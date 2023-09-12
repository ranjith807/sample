import React from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  const headerStyle = darkMode
    ? { backgroundColor: "black", marginBottom: "20px" }
    : { backgroundColor: "lightgray", marginBottom: "20px" };
  
  const brandStyle = darkMode ? { color: "white" } : { color: "black" };

  return (
    <nav className={`navbar navbar-expand-lg`} style={headerStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={brandStyle}>
          My App
        </a>
        <div className="d-flex justify-content-end align-items-center">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
