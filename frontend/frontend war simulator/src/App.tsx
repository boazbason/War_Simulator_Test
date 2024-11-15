import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage'
import RegisterPage from './pages/registerPage/RegisterPage'
import WarRoom from './pages/WareRoom/WarRoom'

function App() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/test" element={<WarRoom />} />

      </Routes>
    </>
  )
}

export default App


{/* <Route path="/candidate" element={<PrivateRoute component={<VotePage/>}/> } /> */ }
{/* <Route path="/RegisterPage" element={<RegisterPage/>} /> */ }