import styled from "styled-components";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";

const QuickSettingsDiv=styled.div`
display:flex;
flex-direction:row;
position:absolute;
`;

function QuickSettings() {
    return (
        <>
        <div>
    <QuickSettingsDiv>
    <div>
    <LanguageSwitch/>
    </div>
    <div>
    <ThemeSwitch/>
    </div> 
    </QuickSettingsDiv>
        </div>
        </>
    )
}

export default QuickSettings;