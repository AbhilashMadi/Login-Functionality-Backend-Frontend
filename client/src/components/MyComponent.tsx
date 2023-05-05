import { useEffect } from 'react';
import useThemeMode from '../utils/hooks/useThemeMode';


const MyComponent = () => {
  const { theme, toggleThemeMode } = useThemeMode();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      toggleThemeMode();
    }
  }, [toggleThemeMode]);

  return (
    <div className="app testing testing" data-theme={theme}>
      <h1>My App</h1>
      <button onClick={toggleThemeMode}>Toggle Theme</button>
    </div>
  );
};

export default MyComponent;
