import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import * from "react-router-dom"
import LoginRegister from './components/LoginRegister'

function App() {
  return (
    <>
      <div>
      <MainMenu/>
      <Footer/>
      </div>

    </>
    
  )
}

export default App;
