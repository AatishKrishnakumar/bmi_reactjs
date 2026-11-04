import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './Header'
import Bmi from './Bmi'
import './App.css'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Bmi/>} />
    </Routes>
    </>
  )
}

export default App
