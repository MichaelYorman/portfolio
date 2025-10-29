import styled from "styled-components";
import ThemeSwitch from "../ThemeStyles/ThemeSwitch";

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
    <ThemeSwitch/>
    </div> 
    </QuickSettingsDiv>
        </div>
        </>
    )
}

export default QuickSettings;