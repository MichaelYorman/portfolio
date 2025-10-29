import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import MainComponent from './components/MainComp/MainComponent';
import GlobalStyle from './components/GlobalStyle/GlobalStyle'
import MainMenu from './components/MainMenu/MainMenu'
import Info from './components/Info/Info'
import LoginRegisterHead from './components/Register/LoginRegisterHead'
import LoginMenu from './components/Login/LoginMenu'
import RegisterMenu from './components/Register/RegisterMenu'
import UserHome from './components/UserHome/UserHome'
import NewList from './components/Userlist/NewList'
import EditList from './components/Userlist/EditList'
import ViewList from './components/Userlist/ViewList'

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
        <Route path="/edit-list/:listName" element={<EditList/>}>
        </Route>
        <Route path="/view-list/:listName" element={<ViewList/>}>
        </Route>
        </Route>
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App;
