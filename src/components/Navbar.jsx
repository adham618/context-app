import React from "react";
import { ThemeContext } from "./Context/ThemeContext";
class Navbar extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>{(themecontext) => {
        const { isLightTheme, light, dark } = themecontext;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{ background: theme.ul, color: theme.syntax }
          }>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>)
      }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;