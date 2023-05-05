import { useEffect } from 'react';
import { useTheme } from '../context/ThemeProvider';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      toggleTheme();
    }
  }, [toggleTheme]);

  return (
    <div className="app">
      <h1 className='testing'>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default MyComponent;
