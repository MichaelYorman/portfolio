import './App.css'
import GlobalStyle from './components/CreateGlobalStyle'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Info from './components/Info'
import LoginRegisterHead from './components/LoginRegisterHead'
import LoginMenu from './components/LoginMenu'
import RegisterMenu from './components/RegisterMenu'
import UserHome from './components/UserHome'
import CreateList from './components/CreateList'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {

  return (
    <Router>
      <GlobalStyle/>
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
        <Route path="/user_home" element={<UserHome/>}>
        </Route>
        <Route path="/create_list" element={<CreateList/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App;
