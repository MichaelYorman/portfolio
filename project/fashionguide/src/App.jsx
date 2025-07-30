import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Info from './components/Info'
import LoginRegisterHead from './components/LoginRegisterHead'
import LoginMenu from './components/LoginMenu'
import RegisterMenu from './components/RegisterMenu'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
       <Route path="/" element={<MainMenu/>}>
        </Route>
        <Route path="/login_register" element={<LoginRegisterHead/>}>
        </Route>
        <Route path="/info" element={<Info/>}>
        </Route>
        <Route path="/login" element={<LoginMenu/>}>
        </Route>
        <Route path="/register" element={<RegisterMenu/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App;
