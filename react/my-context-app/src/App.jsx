import { ThemeProvider } from './ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <h1>React App with useContext</h1>
      <ThemeSwitcher />
    </ThemeProvider>
  )
}

export default App;