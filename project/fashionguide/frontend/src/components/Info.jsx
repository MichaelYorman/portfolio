import styled from "styled-components";
import { NavLink} from 'react-router-dom'
import { useTranslate } from "./LanguageContext";

const ContentDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin: 0 auto;
`;

const NavButton = styled(NavLink)`
  background-color: black;
  color:whitesmoke;
  text-decoration: none;
  padding: 10px;
  font-size:1.5em;
`;

const MainMenuHeader=styled.h1`
font-size:3em;
text-align:center;
color:black;
margin-top:400px;
`;
const InfoDiv=styled.div`
background-color:rgba(255, 255, 255, 0.5);
padding:50px;
margin-top:50px;
`;
function Info() {
   const {t,setLang}=useTranslate();
  return (
    <>
      <div>
        <ContentDiv>
        <header>
        <MainMenuHeader>
          {t("mainheader")}
        </MainMenuHeader>
          </header>
        <InfoDiv>
          <p>some info</p>
        <NavButton to="/">BACK TO MAIN MENU</NavButton>
        </InfoDiv>
        </ContentDiv>
      </div>
    </>
  )
}

export default Info;