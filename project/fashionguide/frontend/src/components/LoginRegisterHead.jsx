import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
const LoginRegisterDiv=styled.div`
display:flex;
gap:50px;
flex-direction:row;
margin-top:90px;
`;
const BackButtonDiv=styled.div`
display:flex;
flex-direction:column;
margin-top:50px;
`;

function LoginRegister() {

  return (
    <>
      <div>
      <ContentMenu>
      <MainHeader>FASHION AND ACCESSORY GUIDE FOR VENTURE</MainHeader>
        <LoginRegisterDiv>
      <NavButton to="/login">LOGIN</NavButton>
      <NavButton to="/register">REGISTER</NavButton>
        </LoginRegisterDiv>
        <BackButtonDiv>
        <NavButton to="/">BACK TO MAIN MENU</NavButton>
        </BackButtonDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default LoginRegister