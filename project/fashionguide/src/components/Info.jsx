import styled from "styled-components";
import { NavLink} from 'react-router-dom'
import { useTranslate } from "./LanguageContext";

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

const NavButton = styled(NavLink)`
  background-color: black;
  color:whitesmoke;
  text-decoration: none;
  padding: 10px;
  font-size:1.5em;
`;

const Logo=styled.img`
width:50px;
height:auto;
`;

const MainMenuHeader=styled.h1`
font-size:3em;
text-align:center;
color:black;
margin-top:400px;
`;
const ButtonPlacementDiv=styled.div`
background-color:rgba(255, 255, 255, 0.5);
padding:50px;
margin-top:50px;
`;
function Info() {
   const {t,setLang}=useTranslate();
  return (
    <>
      <div>
        <ContentMenu>
        <header>
        <MainMenuHeader>
          {t("mainheader")}
        </MainMenuHeader>
          </header>
        <ButtonPlacementDiv>
          <p>some info</p>
        <NavButton to="/">BACK TO MAIN MENU</NavButton>
        </ButtonPlacementDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default Info;