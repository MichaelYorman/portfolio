import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Info from './components/Info'
import LoginRegister from './components/LoginRegister'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
       <Route path="/" element={<MainMenu/>}>
        </Route>
        <Route path="/loginregister" element={<LoginRegister/>}>
        </Route>
        <Route path="/info" element={<Info/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App;
