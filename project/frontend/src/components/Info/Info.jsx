import styled from "styled-components";
import { NavLink} from 'react-router-dom'

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
  return (
    <>
      <div>
        <ContentDiv>
        <header>
        <MainMenuHeader>
        <h1>Fashion and Accessory Guide</h1>
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