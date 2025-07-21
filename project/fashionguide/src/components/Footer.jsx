import styled from "styled-components";

const FooterDiv=styled.footer`
display:grid;
grid-template-columns: 50% 50%;
gap:50px;
background-color:black;
color:white;
margin: 0 auto;
min-width:100wh;
font-size:0.8em;
`;
const Disclaimer=styled.div`
display:flex;
flex-direction:column;
margin: 25px 0px 25px 25px;
grid-column:1;
`;

const Links=styled.div`
display:flex;
flex-direction:column;
margin-top:25px;
grid-column:2;
`;

function Footer() {
  return (
      <div>
        <FooterDiv>
          <Disclaimer>
            <h4>Disclaimer</h4>
            <p>The information provided on this site is for general guidance and entertainment purposes only.<br/>
            While we aim to keep content accurate and practical, users are responsible for their own safety and preparedness.<br/> 
            Always check current conditions, local regulations, and use your best judgment. <br/>
            The creators of this site are not liable for any harm, injury, or loss resulting from its use.</p>
          </Disclaimer>
          <Links>
          <h3>Links</h3>
          <a href="https://github.com/MichaelYorman" target="_blank">Github</a>
          <a href="https://google.com" target="_blank">Portfolio</a>
          </Links>
        </FooterDiv>
      </div>
  )
}
export default Footer;