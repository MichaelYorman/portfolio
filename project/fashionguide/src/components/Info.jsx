import styled from "styled-components";
import { NavLink,Link } from 'react-router-dom'
import LanguageThemePanel from "./LanguageThemePanel";

const NavButton = styled(NavLink)`
  background-color: black;
  color:whitesmoke;
  text-decoration: none;
  padding: 10px;
  font-size:1.5em;
`;

const StyledLinkButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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

const MainHeader=styled.h1`
font-size:3em;
text-align:center;
color:black;
margin-top:400px;
`;
const ButtonDiv=styled.div`
background-color:rgba(255, 255, 255, 0.5);
padding:50px;
margin-top:50px;
`;
function Info() {
  return (
    <>
      <div>
        <ContentMenu>
          <LanguageThemePanel/>
        <MainHeader>FASHION AND ACCESSORY GUIDE FOR VENTURE</MainHeader>
        <ButtonDiv>
          <p>some info</p>
        <NavButton to="/">BACK TO MAIN MENU</NavButton>
        </ButtonDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default Info;