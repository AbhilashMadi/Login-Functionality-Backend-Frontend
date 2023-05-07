import { FC, ReactNode, createContext, useContext, useEffect } from 'react';
import useThemeMode from '../utils/hooks/useThemeMode';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => { },
});

interface IThemeProvider {
  children: ReactNode
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  var { theme, toggleTheme } = useThemeMode();

  useEffect(() => {
    document.getElementById('root')?.setAttribute('data-theme', theme)
  }, [theme]);

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext)
}