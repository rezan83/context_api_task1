import { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import ThemeContext from "./store";

function App() {
  const [theme, set_theme] = useState("light");
  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    set_theme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
