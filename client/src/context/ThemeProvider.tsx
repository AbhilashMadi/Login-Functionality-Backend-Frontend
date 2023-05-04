import {FC,ReactNode,createContext} from 'react';

interface ThemeContext{
  children: ReactNode
}

export const ThemeContext = createContext({});

const ThemeProvider:FC<ThemeContext> = ({children}) => {
  return (
    <ThemeContext.Provider value={[{theme,isDark},toggleTheme]}>
    </ThemeContext.Provider>
  )
}