import styled from "styled-components";
import { NavLink} from 'react-router-dom';
import { useTranslate } from "./LanguageContext";

const Logo=styled.img`
width:50px;
height:auto;
`;
const NavButton = styled(NavLink)`
text-decoration:none;
color:black;
&:hover{
text-decoration:underline;
${Logo}{
background-color:lightgray;
}
`;

const WidgetPanelStyle=styled.div`
display:flex;
gap:30px;
position:absolute;
right:50px;
top:0px;
padding-top:15px;
`;

function WidgetPanel() {
    const {t,setLang}=useTranslate();
    return (
        <>
    <div>
    <WidgetPanelStyle>
    <div>
    <NavButton to="/user_home">
    <Logo src="/icons/home.svg" alt="Home cottage symbol"/>
    <h4>{t("home")}</h4>
    </NavButton>
    </div>
    <div>
    <NavButton to="/user_home">
     <Logo src="/icons/info.svg" alt="Info circle symbol"/> 
     <h4>{t("info")}</h4>
     </NavButton>
    </div>
    <div>
    <NavButton to="/user_home">
     <Logo src="/icons/links.svg" alt="Two links together symbol"/> 
     <h4>{t("links")}</h4>
     </NavButton>
    </div>
    <div>
    <NavButton to="/user_home">
     <Logo src="/icons/settings.svg" alt="Settings gear symbol"/> 
     <h4>{t("settings")}</h4>
     </NavButton>
    </div>
    <div>
    <NavButton to="/">
     <Logo src="/icons/logout.svg" alt="Logout circle and arrow symbol"/> 
     <h4>{t("logout")}</h4>
     </NavButton>
    </div>
    </WidgetPanelStyle>
    </div>
        </>
    )
}

export default WidgetPanel;