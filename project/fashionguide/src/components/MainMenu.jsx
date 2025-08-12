import styled from "styled-components";
import { NavLink} from 'react-router-dom'
import LanguageThemePanel from "./LanguageThemePanel";

const NavButton = styled(NavLink)`
  color:black;
  text-decoration: none;
  padding:10px;
  &:hover {
  background-color:lightgray;
  text-decoration:underline;
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
display:flex;
gap:50px;
margin-top:90px;
`;
function MainMenu() {
  return (
    <>
      <div>
        <ContentMenu>
          <LanguageThemePanel/>
        <MainHeader>FASHION AND ACCESSORY GUIDE</MainHeader>
        <ButtonDiv>
        <NavButton to="/user_home">
        <Logo src="/icons/arrow.svg" alt="Arrow bubble symbol"/>
        <h2>START</h2>
        </NavButton>
        <NavButton to="/info">
        <Logo src="/icons/info.svg" alt="Info bubble symbol"/>
        <h2>INFO</h2>
        </NavButton>
        <NavButton to="/info">
        <Logo src="/icons/links.svg" alt="Info bubble symbol"/>
        <h2>LINKS</h2>
        </NavButton>
        </ButtonDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default MainMenu;