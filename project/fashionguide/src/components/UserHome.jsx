import styled from "styled-components";
import { NavLink} from 'react-router-dom'
import LanguageThemePanel from "./LanguageThemePanel";
import WidgetPanel from "./WidgetPanel";
import { useTranslate } from "./LanguageContext";

const NavButton = styled(NavLink)`
  text-decoration: none;
  color:black;
`;

const ContentMenu = styled.div`
display:flex;
flex-direction:column;
position:relative;
background-color:green;
width: 1080px;
min-height:100vh;
margin: 0 auto;
`;

const CreateNewListDiv=styled.h1`
text-align:center;
margin-top:400px;
&:hover{
text-decoration:underline;
}
`;

const NewListLogo=styled.img`
width:50px;
height:auto;
margin-right:60px;
`;

const ListingDiv=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
margin:100px 10px 0px 10px;
`;

const Block=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:250px;
width:250px;
outline:5px dashed black;
`;
function UserHome() {
  const {t,setLang}=useTranslate();
  return (
    <>
      <div>
        <ContentMenu>
        <WidgetPanel/>
        <LanguageThemePanel/>
        <CreateNewListDiv>
        <NavButton to="/create-list">
        <NewListLogo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
        {t("createlist")}</NavButton>
        </CreateNewListDiv>
        <ListingDiv>
          <Block>
            <h4>You have nothing here yet...</h4>
            </Block>
        </ListingDiv>
        </ContentMenu>
      </div>
    </>
  )
}

export default UserHome;