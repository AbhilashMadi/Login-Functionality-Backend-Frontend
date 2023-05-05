import { useState, useEffect } from 'react';

interface IUseThemeMode {
  theme: string;
  toggleThemeMode: () => void;
}

const useThemeMode = (): IUseThemeMode => {
  const userThemeMode = window.matchMedia('(prefers-color-schema: dark)').matches
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useState<string>(userThemeMode);

  useEffect(() => {
    localStorage.setItem('savedTheme', theme);
  }, [theme]);

  const toggleThemeMode = (): void => {
    setTheme((mode) => (mode === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleThemeMode }
}

export default useThemeMode;