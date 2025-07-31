import styled from "styled-components";

const ThemeLanguageSettingsDiv=styled.div`
display:flex;
flex-direction:row;
gap:10px;
position:absolute;
top:15px;
left:15px;
`;

const Logo=styled.img`
width:50px;
height:auto;
`;

function LanguageThemeSettings() {
    return (
        <>
        <div>
    <ThemeLanguageSettingsDiv>
    <Logo src="/icons/language.svg" alt="Language symbol"/> 
    <Logo src="/icons/theme_palette.svg" alt="Artist palette and a paintbrush"/>
    </ThemeLanguageSettingsDiv>
        </div>
        </>
    )
}

export default LanguageThemeSettings;