import styled from "styled-components";
import AsyncSelect from "react-select/async";

const CreateListFormDiv=styled.div`
display:flex;
gap:50px;
text-align:center;
color:black;
margin-top:400px;
`;
const DestinationTypes = [
    {value:'forest',label:'Forest'},
    {value:'mountain',label:'Mountain'},
    {value:'beach',label:'Beach'},
    {value:'desert',label:'Desert'}
]
const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    const filtered = DestinationTypes.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(filtered);
  }, 1000); // simulates async behavior
};
function CreateListForm() {
    return (
        <>
        <div>
        <CreateListFormDiv>
        <form action="">
        <div>
        <h3>Destination Type</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions placeholder="Type some" isMulti name="destination_type" options={DestinationTypes} className="basic-multi-select" classNamePrefix="select"/>
        </div>
        </form>
        </CreateListFormDiv>
        </div>
        </>
    )
}

export default CreateListForm;