import styled from "styled-components";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import WidgetPanel from "./WidgetPanel";

const CreateListFormGrid1=styled.div`
display:grid;
gap:15px;
margin-top:400px;
padding:20px;
background-color:whitesmoke;
`;

const AutomaticAssignDiv=styled.div`
display:flex;
font-size:14px;
flex-direction:row;
align-items:center;
gap:10px;
`;
const ToolTipImage=styled.img`
width:30px;
height:auto;
background-color:rgba(255, 255, 0, 1);
border-radius:50%;
border:100px;
cursor:pointer;
`;
const Box1=styled.div`
grid-column:1;
`;
const Box2=styled.div`
grid-column:2;
`;
const Box3=styled.div`
grid-column:1;
`;
const Box4=styled.div`
grid-column:2;
`;
const Box5=styled.div`
grid-column:1;
`;
const Box6=styled.div`
grid-column:2;
`;
const Box7=styled.div`
grid-column:1;
`;
const Box8=styled.div`
display:flex;
flex-direction:column;
grid-column:2;
`;
const Box9=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
grid-column:1;
`;
const Box10=styled.div`
grid-column:2;
`;
const GenerateListButton=styled.button`
padding:10px;
`;
const DurationBoxDiv=styled.div`
display:flex;
flex-direction:column;
margin-top:10px;
font-size:14px;
gap:10px;
`;
const Source= {
DestinationTypes: [
    {value:'forest',label:'Forest 🌲'},
    {value:'mountain',label:'Mountain  🏔️'},
    {value:'beach',label:'Beach 🏖️'},
    {value:'desert',label:'Desert 🏜️'},
    {value:'cave',label:'Cave 🪨'},
    {value:'bodyofwater',label:'Body Of Water 🌊'},
    {value:'residentialarea',label:'Residential area 🏙️'},
    {value:'countryside',label:'Countryside 🌻'},
],
DestinationPurpose: [
    {value:'hangingout',label:'Hanging out 😎☕'},
    {value:'vacation',label:'Vacation 🏖️'},
    {value:'swimming',label:'Swimming 🏊‍♂️'},
    {value:'sightseeing',label:'Sightseeing 🗽'},
    {value:'photography',label:'Photography 📸'},
    {value:'stargazing',label:'Stargazing 🌕'},
    {value:'camping',label:'Camping 🏕️'},
    {value:'climbing',label:'Climbing 🧗‍♂️'},
    {value:'wildlifewatching',label:'Wildlife watching 🦉'},
    {value:'fishing',label:'Fishing 🎣'},
    {value:'foraging',label:'Foraging 🍄'}
],
Vehicles: [
    {value:'foot',label:'Foot 🚶'},
    {value:'bike',label:'Bike 🚲'},
    {value:'car',label:'Car 🚗'},
    {value:'publictransportation',label:'Public transportation 🚌'},
    {value:'motorbike',label:'Motorbike 🏍️'},
    {value:'Airplane',label:'Airplane ✈️'},
    {value:'watervehicle', label:'Boat ⛵'},
    {value:'skateboard',label:'Skateboard 🛹'},
    {value:'scooter',label:'Manual Scooter 🛴'},
    {value:'rollerblades',label:'Rollerblades 🛼'},
    {value:'personalelectricvehicle',label:'Personal Electric Vehicle ⚡🛴'},
],
WeatherConditions: [
    {value:'clear',label:'Clear ☀️'},
    {value:'raining', label:'Raining 🌧️'},
    {value:'lowvisibility',label:'Low visibility 👁🚫'},
    {value:'sandstorm', label: 'Sandstorm 💨'},
    {value:'fog',label:'Fog 🌫️'}
],
Temperature: [
    { value: 'scorching', label: 'Scorching (Above 40°C) 🔥💀', minTemp: 40 },
    { value: 'hot', label: 'Hot (30-39°C) 🔥', minTemp: 30, maxTemp: 39 },
    { value: 'warm', label: 'Warm (20-29°C) ☀️', minTemp: 20, maxTemp: 29 },
    { value: 'temperate', label: 'Temperate (11-19°C) 🌳', minTemp: 11, maxTemp: 19 },
    { value: 'chilly', label: 'Chilly (0-10°C) 🌬️', minTemp: 0, maxTemp: 10 },
    { value: 'coldish', label: 'Coldish (-1 to -10°C) ❄️', minTemp: -10, maxTemp: -1 },
    { value: 'cold', label: 'Cold (-11 to -19°C) 🥶', minTemp: -19, maxTemp: -11 },
    { value: 'verycold', label: 'Very Cold (-20°C to -29°C) 🧊', minTemp: -29, maxTemp: -20 },
    { value: 'freezing', label: 'Freezing (Below -30°C) 🧊💀', minTemp: -50, maxTemp: -30 }
]
}

const loadOptions = (sourceKey) => (inputValue, callback) => {
    const list=Source[sourceKey];
  setTimeout(() => {
    const filtered = list.filter(item =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(filtered);
  }, 500);
};

function CreateListFormCode() {
    const [checkedBox,SetChecked]=useState(true);
    function ToggleAutoBox() {
        if (checkedBox) {
            SetChecked(false)
        } else {
            SetChecked(true)
        }
    }
    return (
        <>
        <div>
        <WidgetPanel/>
        <CreateListFormGrid1>
        <Box1>
        <h3>List name 🏷️</h3>
        <textarea name="listname" rows={4} cols={40} placeholder="Type your list name here...">
        </textarea>
        </Box1>
        <Box2>
        <h3>Destination name 🏷️</h3>
        <textarea name="destinationname" rows={4} cols={40} placeholder="Type your destination name here...">
        </textarea>
        </Box2>
        <Box3>
         <h3>Destination Type 🧭</h3>
        <AsyncSelect className="DestinationType" cacheOptions loadOptions={loadOptions('DestinationTypes')} defaultOptions placeholder="Start typing or choose from list" isMulti/>
        </Box3>
        <Box4>
        <h3>Purpose ⚙️</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('DestinationPurpose')} defaultOptions placeholder="Start typing or choose from list" isMulti/>
        </Box4>
        <Box5>
        <h3>Temperature 🌡️</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('Temperature')} defaultOptions placeholder="Start typing or choose from list" isMulti/>
        </Box5>
        <Box6>
        <h3>Weather Conditions 🌥️</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('WeatherConditions')} defaultOptions placeholder="Start typing or choose from list" isMulti/>
        </Box6>
        <Box7>
        <h3>Transportation 🚗</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('Vehicles')} defaultOptions placeholder="Start typing or choose from list" isMulti/>
        </Box7>
        <Box8>
        <h3>Duration 🕒</h3>
        <DurationBoxDiv>
        <div>
        Destination travel time: <input type="number" id="quantity" name="quantity" min="1" max="24"/> hours
        </div>
        <div>
        <input name="input" type="checkbox"/> Stay overnight for <input type="number" id="quantity" name="quantity" min="1" max="5" disabled/> days
        </div>
        
        </DurationBoxDiv>
        </Box8>
        <Box9>
        <GenerateListButton>
        <h4>CREATE LIST</h4>    
        </GenerateListButton>
        </Box9>
        <Box10>
        <AutomaticAssignDiv>
        <label>
         <input name="input" id='autoassign' type="checkbox" checked={checkedBox} onClick={ToggleAutoBox}/>
        </label>
        <p>Let program automatically assign <br></br> clothes and accessories?</p>
        <ToolTipImage src="/icons/questionmark.svg" alt="Home cottage symbol"/>
        </AutomaticAssignDiv></Box10>
        </CreateListFormGrid1>
        <div>
        </div>
        </div>
        </>
    )
}
export default CreateListFormCode;
//<AsyncSelect cacheOptions loadOptions={loadOptions('Duration')} defaultOptions placeholder="Start typing or choose from list" isMulti/>