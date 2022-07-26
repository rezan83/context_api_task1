import { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {

  const [theme, set_theme] = useState('light')
  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    set_theme(newTheme);
  };
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Content theme={theme} />
    </>
  );
}

export default App;
