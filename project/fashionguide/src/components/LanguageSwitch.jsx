import {useTranslate} from "./LanguageContext"
import {setCookie,getCookie,checkCookie,deleteCookie} from "./Cookies"
import styled from "styled-components"

const DropDownBlock1=styled.div`
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
const DropDownBlock2=styled.div`
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

const Dropdownbtn=styled.img`;
padding:16px;
border:none;
width:70px;
height:auto;
`;
const Dropdowncontent=styled.div`
display:none;
position:absolute;
background-color:whitesmoke;
min-width:100%;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)
z-index:1;
`

const Dropdown=styled.div`
position:absolute;
left:20px;
display:inline-block;
cursor:pointer;
&:hover ${Dropdowncontent} {
display:flex;
flex-direction:row;
}
&:hover ${Dropdownbtn} {
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
        <Dropdown>
        <Dropdownbtn src="/icons/language.svg" alt="language symbol"/>
        <Dropdowncontent>
        <DropDownBlock1 onClick={()=>changeLanguage("en")}>
        <Logo  src="/icons/uk-flag.svg" alt="uk-flag" onClick={()=>changeLanguage("en")}></Logo>
        <p>EN</p>
        </DropDownBlock1>
        <DropDownBlock2 onClick={()=>changeLanguage("fi")}>
        <Logo  src="/icons/fi-flag.svg" alt="fi-flag" onClick={()=>changeLanguage("fi")}></Logo>
        <p>FI</p>
        </DropDownBlock2>
        
        </Dropdowncontent>
        </Dropdown>
        </div>
        </>
    )
}

export default LanguageSwitch;