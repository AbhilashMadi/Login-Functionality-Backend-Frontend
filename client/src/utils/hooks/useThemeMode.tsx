import { useState, useEffect } from 'react';

interface IUseThemeMode {
  theme: string;
  toggleTheme: () => void;
}

const useThemeMode = (): IUseThemeMode => {
  const userThemeMode = window.matchMedia('(prefers-color-schema: dark)').matches
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useState<string>(userThemeMode);

  useEffect(() => {
    localStorage.setItem('savedTheme', theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((mode) => (mode === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme };
}

export default useThemeMode;