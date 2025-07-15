import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import GoalDashboard from './components/goalDashboard/GoalDashboard'
import CssBaseline from "@mui/material/CssBaseline";


function App() {

  return (
    <>
    <CssBaseline />
     <GoalDashboard />
    </>
  )
}

export default App
