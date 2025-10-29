import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledForm=styled.form`
display:flex;
flex-direction:column;
gap:10px;
font-size:1.5em;
`;

const StyledInput=styled.input`
font-size:16px;
`;
const RegisterButton = styled.button`
 padding: 10px 10px;
  font-size: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

function RegisterForm () {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <div>
      <>
    <StyledForm action={search}>
      <label for="account_name">Account Name:</label>
      <StyledInput type="text" id="my_account_name"  placeholder="Your account name here..." name="account_name" required/>
      <label for="email_address">Email:</label>
      <StyledInput type="text" id="my_email_address"  placeholder="Your email address here..." name="email_address" required/>
      <label for="password">Password: </label>
      <StyledInput type="password" id="my_password" placeholder="Your password here..." name="password" required/>
      <RegisterButton to="/user-home" type="submit">LOGIN</RegisterButton>
      <div style={{display:"none"}}>
    <label>Leave this field empty:</label>
    <input type="text" name="website" />
    </div>
    </StyledForm>
    </>
    </div>
  );
}

export default RegisterForm;