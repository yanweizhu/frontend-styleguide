import { useState, useEffect } from 'react';
export const useThemeMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
  };

  const toggleTheme = () => {
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    setTheme(localTheme || 'light');
  }, [theme]);

  return {theme, toggleTheme};
};

export default useThemeMode;
