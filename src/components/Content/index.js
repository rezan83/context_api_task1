import { useContext } from "react";
import ThemeContext from "../../store";
import "./Content.css";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`content ${theme === "light" ? "light" : "dark"}`}>
      <div className="textual">
        <h2>Content</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
    </div>
  );
};

export default Content;
