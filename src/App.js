import { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {

  const [theme, set_theme] = useState('light')
  
  return (
    <>
      <Navbar theme={theme} set_theme={set_theme}/>
      <Content theme={theme} />
    </>
  );
}

export default App;
