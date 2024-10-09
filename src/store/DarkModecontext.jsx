import { createContext, useState, useEffect } from "react";

// Create contexts for LightMode and DarkMode
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // State to track the current theme
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Persist the theme
      return newTheme;
    });
  };

  // Apply the theme to the body class when it changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

