import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ul, color: theme.syntax }
    }>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuth ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;