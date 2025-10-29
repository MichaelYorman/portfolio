import styled from "styled-components"

const FooterDiv = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(36, 36, 36, 1);
  color: white;
  width: 100%;
`;
const ContactMe=styled.div`
display:flex;
flex-direction:column;
text-align:center;
width:fit-content;
height:50%;

h2 {text-decoration:underline}
`;

const Logo=styled.img`
width:50px;
height:auto;
`;
const SocialMediaDiv=styled.div`
display:flex;
flex-direction:row;
gap:30px;
padding:20px;
background-color:white;
width:fit-content;
`
const AllRightReservedDiv=styled.div`
display:flex;
flex-direction:row;
width:fit-content;
`;

function Footer() {
        const d=new Date();
        let year=d.getFullYear()+1;
        const name="Henri Jormanainen.";
        const allRightsReserved="All rights reserved."
        return (
        <>
        <div>
        <FooterDiv>
        <ContactMe>
        <h2>Connect</h2>
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
        </ContactMe>
        <AllRightReservedDiv>
        <h2>&copy; {year} {name} {allRightsReserved} </h2>
        </AllRightReservedDiv>
        </FooterDiv>
        </div>
        </>
    )
}

export default Footer;