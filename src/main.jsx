import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/main.scss'
import App from './App.jsx'
import { ThemeProvider } from './shared/theme/themeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
