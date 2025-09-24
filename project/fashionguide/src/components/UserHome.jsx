import styled from "styled-components";
import { NavLink} from 'react-router-dom'
import WidgetPanel from "./WidgetPanel";
import { useTranslate } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

const NavButton = styled(NavLink)`
  text-decoration: none;
  color:black;
`;

const CreateNewListDiv=styled.h1`
text-align:center;
&:hover{
text-decoration:underline;
}
`;

const NewListLogo=styled.img`
width:50px;
height:auto;
margin-right:60px;
`;

const ListingDiv2=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
margin:100px 10px 20px 10px;
`;

const Block=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:250px;
width:250px;
outline:5px dashed black;
`;
const ListingDiv=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:10px;
margin-left:50px;
margin-right:50px;
margin-top:100px;
width:80%;
height:auto;
outline-style:dashed;
background-color:white;
`;
function UserHome() {
  const {s}=useTheme();
  const bgColor = s("background"); 
  const {t,setLang}=useTranslate();
  return (
    <>
      <div>
        <WidgetPanel/>
        <CreateNewListDiv>
        <NavButton to="/new-list">
        <NewListLogo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
        {t("createlist")}</NavButton>
        </CreateNewListDiv>
        <ListingDiv>
          <Block>
            <h4>You have nothing here yet...</h4>
            </Block>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
        </ListingDiv>
      </div>
    </>
  )
}

export default UserHome;