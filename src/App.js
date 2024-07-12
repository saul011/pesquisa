import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>Alternador de cores</h1>
      <button onClick={toggleTheme}>Alterne-os</button>
      <p>Tema atual: {theme}</p>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
