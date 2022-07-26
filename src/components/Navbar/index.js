// import React from "react";
import "./Navbar.css";
import sun from "../../sun.png";
import moon from "../../moon.png";

export default function Navbar({ theme, toggleTheme }) {
 
  return (
    <nav>
      <h2>Context API</h2>
      <img onClick={toggleTheme} src={theme === "light" ? sun : moon} alt="sun moon icon" />
    </nav>
  );
}
