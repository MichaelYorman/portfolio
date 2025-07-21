import styled from "styled-components";
import Language from "../assets/icons/Language.svg"
import ThemePalette from "../assets/icons/Theme_Palette.svg"
import { Link } from 'react-router-dom';
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

const ThemeLanguageDiv=styled.div`
display:flex;
flex-direction:row;
gap:15px;
position:absolute;
top:15px;
left:15px;
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
const Button=styled.button`
font-size:1.5em;
text-align:center;
`;
const ButtonPlacementDiv=styled.div`
display:flex;
gap:50px;
flex-direction:row;
margin-top:50px;
`;

function MainMenu() {
  return (
    <>
      <div>
        <ContentMenu>
        <ThemeLanguageDiv>
        <Logo src={Language} alt="Language symbol"/> 
        <Logo src={ThemePalette} alt="Artist palette and a paintbrush"/> 
        </ThemeLanguageDiv>
        <MainHeader>FASHION AND ACCESSORY GUIDE FOR VENTURE</MainHeader>
        <ButtonPlacementDiv>
        <Button>INFO</Button>
        <Button>LINKS</Button>
        </ButtonPlacementDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default MainMenu;