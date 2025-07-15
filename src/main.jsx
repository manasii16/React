import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
palette: {
    primary: {
      main: "#3b0a61",       
      light: "#572083",      
      dark: "#3b0a61",       
      contrastText: "#ffffff", 
    },
    background: {
      default: "#fcf9ff",    
      paper: "#ffffff",      
    },
    text: {
      primary: "#3b0a61",    
      secondary: "#3b0a61",  
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,         
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
