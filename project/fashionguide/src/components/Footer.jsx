import styled from "styled-components"
import { useTranslate } from "./LanguageContext";

const FooterDiv=styled.footer`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
width:100%;
height:auto;
background-color:rgba(36, 36, 36, 1);
color:white;
bottom:0;
`;

const Logo=styled.img`
width:50px;
height:auto;
`;
const SocialMediaDiv=styled.div`
display:flex;
flex-direction:row;
margin: 20px 0px 20px 0px;
gap:30px;
padding:20px;
background-color:white;
`
const AllRightReservedDiv=styled.div`
margin: 10px 0px 10px; 0px;
`;

function Footer() {
        const {t,setLang}=useTranslate()
        const d=new Date();
        let year=d.getFullYear()+1;
        return (
        <>
        <div>
        <FooterDiv>
        <SocialMediaDiv>
        <a href="https://github.com/MichaelYorman" target="_blank" rel="nopener noreferrer">
        <Logo src="/icons/github-mark.svg" alt="Github Invertocat Logo"/>
        </a>
        <div>
        <a href="https://www.linkedin.com/in/henri-jormanainen-74293637b" target="_blank" rel="nopener noreferrer">
        <Logo src="/icons/linkedin.svg" alt="LinkedIn Logo">
        </Logo>
        </a>
        </div>
        </SocialMediaDiv>
        <AllRightReservedDiv>
        <h2>&copy; 2025-{year} {t("footer")}</h2>
        </AllRightReservedDiv>
        </FooterDiv>
        </div>
        </>
    )
}

export default Footer;