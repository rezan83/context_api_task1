import { useContext } from "react";
import "./Navbar.css";
import sun from "../../sun.png";
import moon from "../../moon.png";
import ThemeContext from "../../store";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <h2>Context API</h2>
      <img
        onClick={toggleTheme}
        src={theme === "light" ? sun : moon}
        alt="sun moon icon"
      />
    </nav>
  );
}
