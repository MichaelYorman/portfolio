import styled from "styled-components";
import { useState } from "react";
import AsyncSelect from "react-select/async";

const CreateListFormGrid1=styled.div`
display:grid;
gap:15px;
margin-top:400px;
`;
const Box1=styled.div`
grid-column:1;
`
const Box2=styled.div`
grid-column:2;
`
const Box3=styled.div`
grid-column:1;
`
const Box4=styled.div`
grid-column:2;
`
const Box5=styled.div`
grid-column:1;
`
const Box6=styled.div`
grid-column:2;
`
const Box7=styled.div`
`
const Box8=styled.div`
`
const Box9=styled.div`
grid-column:2
`
const GenerateList=styled.button`
`
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
    {value:'lowvisibility',label:'Low visibility 👁'},
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
const BoxStyle=({
    option: (base,state) => {
        const listName=state.data.value==='input';
        return {
            ...base,
            backgroundColor: listName?'#640000ff'
            :'#005864ff'
        }
    }
})
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
    const [isChecked,setState]=useState(true)
    function ToggleClick() {}
    return (
        <>
        <div>
        <CreateListFormGrid1>
        <Box1>
        <label>
            <h3>
            List name 🏷️</h3><input name="listname" type="text"/>
        </label>
        </Box1>
        <Box2>
        <label>
            <h3>
            Destination name 🏷️</h3><input name="input" type="text"/>
        </label>
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
        <AsyncSelect cacheOptions loadOptions={loadOptions('Vehicles')} defaultOptions placeholder="Start typing or choose from list" isMulti/>
        </Box8>
        </CreateListFormGrid1>
        <GenerateList>BUILD LIST</GenerateList>
        <div>
        <label>
        Auto builder? <input name="input" type="checkbox" checked={isChecked}/>
        </label>
        </div>
        </div>
        </>
    )
}
 //onclick={()=>setState("false")}/>
export default CreateListFormCode;