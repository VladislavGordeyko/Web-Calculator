import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import CalculatorButtons from './components/calculatorButtons';
import { lightTheme, darkTheme } from './theme/schema';
import GlobalStyles from './theme/globalStyles';
import Button from './components/button';
import { getFromLS, setToLS } from './utils/storage';

function App() {
  const [theme, setTheme] = useState('');

  const getTheme = () => {
    const res = getFromLS('theme');
    if (res) {
      setTheme(res);
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    getTheme();
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setToLS('theme', 'dark');
    } else {
      setToLS('theme', 'light');
    }
    getTheme();
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <CalculatorButtons />
          <Button type="default" title="switch themes" onClick={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
