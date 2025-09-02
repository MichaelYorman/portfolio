import styled from "styled-components"
import { useTranslate } from "./LanguageContext";

const FooterDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
width:auto;
height:200px;
background-color:rgba(36, 36, 36, 1);
color:white;

.Some {
display:flex;
flex-direction:row;
gap:10px;
margin-bottom:20px;
padding:10px;
background-color:white;
}
`;
const Logo=styled.img`
width:50px;
height:auto;
`;
const CopyRight=styled.div`
display:flex;
flex-direction:row;
`
const AllRightReserved=styled.div`
margin-bottom:10px;
`;

function Footer() {
        const {t,setLang}=useTranslate()
        const d=new Date();
        let year=d.getFullYear()+1;
        return (
        <>
        <div>
        <FooterDiv>
        <CopyRight>
        <div className="Some">
        <div>
        <Logo src="/icons/github-mark.svg" alt="Github Invertocat Logo">
        </Logo>
        </div>
        <div>
        <Logo src="/icons/linkedin.png" alt="LinkedIn Logo">
        </Logo>
        </div>
        </div>
        </CopyRight>
        <AllRightReserved>
        <h2>&copy; 2025-{year} {t("footer")}</h2>
        </AllRightReserved>
        </FooterDiv>
        </div>
        </>
    )
}

export default Footer;