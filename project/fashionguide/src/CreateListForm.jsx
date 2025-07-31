import styled from "styled-components";

const CreateListFormDiv=styled.div`
text-align:center;
color:black;
margin-top:400px;
`;


function CreateListForm() {
    return (
        <>
        <div>
        <CreateListFormDiv>
        <form action="">
        <div>
        <label>List name</label>
        <input></input>
        </div>
        </form>
        </CreateListFormDiv>
        </div>
        </>
    )
}

export default CreateListForm