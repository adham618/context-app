import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './Context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './Context/AuthContext';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App