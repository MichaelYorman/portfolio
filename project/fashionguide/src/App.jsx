import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import MainComponent from './components/MainComponent';
import GlobalStyle from './components/GlobalStyle'
import MainMenu from './components/MainMenu'
import Info from './components/Info'
import LoginRegisterHead from './components/LoginRegisterHead'
import LoginMenu from './components/LoginMenu'
import RegisterMenu from './components/RegisterMenu'
import UserHome from './components/UserHome'
import NewList from './components/NewList';

function App() {
  return (
    <>
    <div>
    <Router>
      <GlobalStyle/>
      <Routes>
      <Route element={<MainComponent/>}>
       <Route path="/" element={<MainMenu/>}>
        </Route>
        <Route path="/login-register" element={<LoginRegisterHead/>}>
        </Route>
        <Route path="/info" element={<Info/>}>
        </Route>
        <Route path="/login" element={<LoginMenu/>}>
        </Route>
        <Route path="/register" element={<RegisterMenu/>}>
        </Route>
        <Route path="/user-home" element={<UserHome/>}>
        </Route>
        <Route path="/new-list" element={<NewList/>}>
        </Route>
        <Route path="/new-list" element={<NewList/>}>
        </Route>
        </Route>
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App;
