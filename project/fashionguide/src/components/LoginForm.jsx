import styled from "styled-components";

const LoginMenuDiv=styled.div`
text-align:center;
font-size:2em;
`;
const LoginButton = styled.button`
 margin-top:50px;
 padding: 10px 10px;
  font-size: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
function LoginForm () {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <div>
      <>
    <LoginMenuDiv>
    <form action={search}>
      <div>
      <p>Username or Email</p>
      <input type="text" name="query" />
      </div>
      <div>
      <p>Password</p>
      <input type="password" name="query" />
      </div>
      <LoginButton type="submit">LOGIN</LoginButton>
    </form>
    </LoginMenuDiv>
    </>
    </div>
  );
}

export default LoginForm;