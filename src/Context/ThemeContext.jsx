import React from 'react'
export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ul: "#DDD", bg: "#eee" },
    dark: { syntax: "#ddd", ul: "#333", bg: "#555" }
  }
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() {
    return <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
      {this.props.children}
    </ThemeContext.Provider>;
  }
}

export default ThemeContextProvider;
