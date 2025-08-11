import styled from "styled-components";
import { NavLink,Link } from 'react-router-dom'
import LanguageThemePanel from "./LanguageThemePanel";
import CreateListForm from "./CreateListForm";

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

function CreateList() {
  return (
    <>
      <div>
        <ContentMenu>
        <LanguageThemePanel/>
        <CreateListForm/>
        </ContentMenu>
      </div>
    </>
  )
}

export default CreateList;