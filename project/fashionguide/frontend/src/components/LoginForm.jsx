import styled from "styled-components";
import { NavLink} from 'react-router-dom'


const StyledForm=styled.form`
display:flex;
flex-direction:column;
gap:10px;
font-size:1.5em;
`;

const StyledInput=styled.input`
font-size:16px;
`;
const LoginButton = styled.button`
margin-top:15px;
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
    <StyledForm action={search}>
      <label for="name_or_email">Name or email: </label>
      <StyledInput  type="text" id="name_or_email" placeholder="Your name or email here..." name="account_name" required />
      <label for="password">Password: </label>
      <StyledInput type="password" id="my_password" placeholder="Your password here..." name="password" required/>
      <LoginButton to="/user-home" type="submit">LOGIN</LoginButton>
    </StyledForm>
    </>
    </div>
  );
}

export default LoginForm;