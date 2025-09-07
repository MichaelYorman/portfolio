import styled from "styled-components";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";

const Logo=styled.img`
width:50px;
height:auto;
&:hover{
background-color:lightgray;
}
`;
const SettingButtonDiv = styled.div`
text-decoration:none;
color:black;
cursor:pointer;
&:hover{
text-decoration:underline;
${Logo} {
background-color:lightgray;
}
`;
const ThemeLanguageStyle=styled.div`
display:flex;
flex-direction:row;
gap:15px;
position:absolute;
top:15px;
left:15px;
`;

function QuickSettings() {
    return (
        <>
        <div>
    <ThemeLanguageStyle>
    <div>
    <SettingButtonDiv>
    <LanguageSwitch/>
    <h4>Language</h4>
    </SettingButtonDiv>
    </div>
    <div>
    <SettingButtonDiv>
    <ThemeSwitch/>
    <h4>Theme</h4>
    </SettingButtonDiv>
    </div> 
    </ThemeLanguageStyle>
        </div>
        </>
    )
}

export default QuickSettings;