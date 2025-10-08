import { Outlet } from "react-router-dom";
import styled from "styled-components";
import QuickSettings from "./QuickSettings";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto;
  align-items: stretch;
  width: 100vw;
  min-height:100vh;
  margin: 0 auto;
`;

const Content=styled.div`
display:flex;
position:relative;
grid-column: 2 / 3;
flex-direction:column;
background-color:green;
min-height:100vh;
`;

function MainComponent() {

    return (
        <>
        <div>
        <Wrapper>
        <Content>
        <QuickSettings/>
        <Outlet/>
        <footer>
        <Footer/>
        </footer>
        </Content>
        </Wrapper>
        </div>
        </>
    )
}
export default MainComponent;