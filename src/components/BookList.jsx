import React from 'react'
import { ThemeContext } from './Context/ThemeContext';
class BookList extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        <li style={{ background: theme.ul }}>the way of kings</li>
        <li style={{ background: theme.ul }}>the name of the wind</li>
        <li style={{ background: theme.ul }}>the final empire</li>
      </ul>
    </div>;
  }
}

export default BookList;