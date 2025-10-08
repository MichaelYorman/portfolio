import {useTranslate} from "./LanguageContext"
import {setCookie,getCookie,checkCookie,deleteCookie} from "./Cookies"
import styled from "styled-components"

const DropDownBlockEn=styled.div`
&:hover {
background-color:rgba(138, 138, 138, 1);
text-decoration:underline;
}
display:flex;
flex-direction:column;
text-align:center;
cursor:pointer;
p {
margin-bottom:5px;}
`;
const DropDownBlockFi=styled.div`
&:hover {
background-color:rgba(138, 138, 138, 1);
text-decoration:underline;
}
display:flex;
flex-direction:column;
text-align:center;
cursor:pointer;
p {
margin-bottom:5px;}
`;
const Logo=styled.img`
width:40px;
height:auto;
margin:10px;
gap:10px;
cursor:pointer;
`;

const DropDownBtn=styled.img`;
margin:10px;
width:50px;
height:50px;
background-color:whitesmoke;
background-image:url("/icons/language.svg");
background-size: cover;
background-position: center;
`;
const DropDownContent=styled.div`
display:none;
position:absolute;
background-color:whitesmoke;
max-width:100%;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)
z-index:1;
`;
const DropdownDiv=styled.div`
display:inline-block;
cursor:pointer;
&:hover ${DropDownContent} {
display:flex;
flex-direction:row;
}
`;
function LanguageSwitch() {
    const {setLang}=useTranslate();
    function changeLanguage(langName) {
        setCookie("language",langName,"7");
        setLang(langName);
    
    }

    return (
        <>
        <div>
        <DropdownDiv>
        <DropDownBtn/>
        <DropDownContent>
        <DropDownBlockEn onClick={()=>changeLanguage("en")}>
        <Logo  src="/icons/uk-flag.svg" alt="uk-flag" onClick={()=>changeLanguage("en")}></Logo>
        <p>EN</p>
        </DropDownBlockEn>
        <DropDownBlockFi onClick={()=>changeLanguage("fi")}>
        <Logo  src="/icons/fi-flag.svg" alt="fi-flag" onClick={()=>changeLanguage("fi")}></Logo>
        <p>FI</p>
        </DropDownBlockFi>
        </DropDownContent>
        </DropdownDiv>
        </div>
        </>
    )
}

export default LanguageSwitch;