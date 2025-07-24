import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Info from './components/Info'
import Links from './components/Links'
import LoginRegister from './components/LoginRegister'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Routes>
       <Route path="/" element={<MainMenu/>}>
        </Route>
        <Route path="/start" element={<LoginRegister/>}>
        </Route>
        <Route path="/info" element={<Info/>}>
        </Route>
        <Route path="/links" element={<Links/>}>
        </Route>
      </Routes>
      <Footer/>
      </div>
    </Router>
    
  )
}

export default App;
