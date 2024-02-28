import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {

  return (
      <div className='App'>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
      </div>
  )
}

export default App

