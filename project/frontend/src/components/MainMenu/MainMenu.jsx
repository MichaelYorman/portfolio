import styled from "styled-components";
import { NavLink} from 'react-router-dom';

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
const MainMenuButtonDiv=styled.div`
display:flex;
flex-direction:row;
margin-top:100px;
justify-content:center;
gap:50px;

`;
function MainMenu() {
  return (
    <>
      <div>
        <header>
        <MainMenuHeader>
        <h1>Fashion and Accessory Guide</h1>
        </MainMenuHeader>
        </header>
        <MainMenuButtonDiv>
        <NavButton to="/user-home">
        <Logo src="/icons/arrow.svg" alt="Arrow bubble symbol"/>
        <h2>START</h2>
        </NavButton>
        <NavButton to="/info">
        <Logo src="/icons/arrow.svg" alt="Info bubble symbol"/>
        <h2>INFO</h2>
        </NavButton>
        <NavButton to="/info">
        <Logo src="/icons/links.svg" alt="Joined links symbol"/>
        <h2>LINKS</h2>
        </NavButton>
        </MainMenuButtonDiv>
      </div>
    </>
  )
}

export default MainMenu;