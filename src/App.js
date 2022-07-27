import { useReducer } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import ThemeContext from "./store";

const initialState = {
  theme: "light",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    default:
      return state;
  }
};

function App() {
  const [{ theme }, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
