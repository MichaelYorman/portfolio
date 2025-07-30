import styled from "styled-components";

const RegisterFormDiv=styled.div`
text-align:center;
font-size:2em;
`;
const RegisterButton = styled.button`
 margin-top:50px;
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
    <RegisterFormDiv>
    <form action={search} autoComplete="off">
      <div>
      <p>Username</p>
      <input type="text" name="query" />
      </div>
      <div>
      <p>Email</p>
      <input type="text" name="query" />
      </div>
      <div>
    <p>Password</p>
    <input type="password" name="query" />
    </div>
    <RegisterButton type="submit">REGISTER</RegisterButton>
    <div style={{display:"none"}}>
    <label>Leave this field empty:</label>
    <input type="text" name="website" />
  </div>
    </form>
    </RegisterFormDiv>
    </>
    </div>
  );
}

export default RegisterForm;