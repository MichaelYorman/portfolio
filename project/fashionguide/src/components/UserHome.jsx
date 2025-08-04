import styled from "styled-components";
import { NavLink,Link } from 'react-router-dom'
import LanguageThemeSettings from "./LanguageThemeSettings";

const NavButton = styled(NavLink)`
  text-decoration: none;
  color:black;
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

const CreateNewListDiv=styled.h1`
text-align:center;
margin-top:400px;
`;

const NewListLogo=styled.img`
width:50px;
height:auto;
margin-right:60px;
`;

function UserHome() {
  return (
    <>
      <div>
        <ContentMenu>
        <LanguageThemeSettings/>
        <CreateNewListDiv>
        <NavButton to="/create_list">
        <NewListLogo src="/icons/language.svg" alt="Language symbol"/>    
        CREATE NEW LIST</NavButton>
        </CreateNewListDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default UserHome;