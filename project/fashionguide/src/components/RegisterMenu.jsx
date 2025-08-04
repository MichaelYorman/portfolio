import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LanguageThemeSettings from "./LanguageThemeSettings";

const NavButton = styled(NavLink)`
  background-color: black;
  color:whitesmoke;
  text-decoration: none;
  padding: 10px;
  font-size:1.5em;
`;


const MainHeader=styled.h1`
font-size:3em;
text-align:center;
color:black;
margin-top:400px;
`;
const ContentMenu = styled.div`
display:flex;
flex-direction:column;
position:relative;
align-items:center;
background-color:green;
width: 1080px;
min-height:100vh;
margin: 0 auto;
`;
const Logo=styled.img`
width:50px;
height:auto;
`;
const BackButtonDiv=styled.div`
display:flex;
flex-direction:column;
margin-top:00px;
`;

const LoginFormDiv=styled.div`
background-color:white;
gap:100px;
font-size:2em;
`;

function RegisterMenu() {

  return (
    <>
      <div>
      <ContentMenu>
<LanguageThemeSettings/>
      <MainHeader>FASHION AND ACCESSORY GUIDE FOR VENTURE</MainHeader>
      <div style={{marginTop:"90px"}}>
      <RegisterForm/>
      </div>
        </ContentMenu>
      </div>
    </>
  )
}

export default RegisterMenu;