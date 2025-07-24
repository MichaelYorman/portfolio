import styled from "styled-components";
const Button=styled.button`
font-size:1.5em;
text-align:center;
`;
function LoginRegister() {
  return (
    <>
      <div>
        <Button>LOGIN</Button>
        <Button>REGISTER</Button>
      </div>
    </>
  )
}

export default LoginRegister;