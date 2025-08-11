import styled from "styled-components";

const Logo=styled.img`
width:50px;
height:auto;
&:hover{
background-color:lightgray;
}
`;
const Button = styled.div`
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

function LanguageThemePanel() {
    return (
        <>
        <div>
    <ThemeLanguageStyle>
    <div>
    <Button>
    <Logo src="/icons/language.svg" alt="Language bubble symbol"/>
    <h4>Language</h4>
    </Button>
    </div>
    <div>
    <Button>
    <Logo src="/icons/theme.svg" alt="Theme palette symbol"/>
    <h4>Theme</h4>
    </Button>
    </div> 
    </ThemeLanguageStyle>
        </div>
        </>
    )
}

export default LanguageThemePanel;