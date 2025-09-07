import styled from "styled-components";
import { NavLink} from 'react-router-dom';
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
  color:black;
  text-decoration: none;
  padding:10px;
  &:hover {
  background-color:lightgray;
  text-decoration:underline;
  }
`;

const Logo=styled.img`
width:50px;
height:auto;
`;

const MainMenuHeader=styled.h1`
font-size:3em;
text-align:center;
margin-top:400px;
`;
const ButtonPlacementDiv=styled.div`
display:flex;
gap:50px;
margin-top:90px;
`;
function MainMenu() {
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
        <NavButton to="/user-home">
        <Logo src="/icons/arrow.svg" alt="Arrow bubble symbol"/>
        <h2>{t("start")}</h2>
        </NavButton>
        <NavButton to="/info">
        <Logo src="/icons/info.svg" alt="Info bubble symbol"/>
        <h2>{t("info")}</h2>
        </NavButton>
        <NavButton to="/info">
        <Logo src="/icons/links.svg" alt="Joined links symbol"/>
        <h2>{t("links")}</h2>
        </NavButton>
        </ButtonPlacementDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default MainMenu;