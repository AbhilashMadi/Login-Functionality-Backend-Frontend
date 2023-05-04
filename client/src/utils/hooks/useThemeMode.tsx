import { FC, useState, useEffect } from 'react';

interface IUseThemeReturn {
  themeMode: string;
  toggleThemeMode: () => void;
}

const useThemeMode = (): IUseThemeReturn => {
  const userThemeMode = window.matchMedia('(prefers-color-schema: dark)').matches
    ? 'dark'
    : 'light';

  const [themeMode, setThemeMode] = useState<string>(userThemeMode);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const toggleThemeMode = (): void => {
    setThemeMode((mode) => (mode === 'light' ? 'dark' : 'light'))
  }

  return { themeMode, toggleThemeMode }
}