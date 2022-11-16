import './App.css';
import Home from './components/home';
import { createContext, } from 'react'
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  
  if(theme === undefined) setTheme("light")
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className='App'>
        <Home toggleTheme={toggleTheme} theme={theme} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
