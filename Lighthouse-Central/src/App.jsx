import React from 'react'
import GetPoolCard from './components/PoolCard'
import './App.css'

function App() {

  return (
   <div>
    <h1> Hello Everyone! </h1>
    <GetPoolCard name="NCC" manager="Scarlett" numGuards="5"/>
    <GetPoolCard name="BCC" manager="Bruce" numGuards="6"/>
   </div>
  )
}

export default App

