import styled from "styled-components";
import AsyncSelect from "react-select/async";

const CreateListFormGrid1=styled.div`
display:grid;
gap:10px;
grid-template-columns:repeat(3,1fr);
margin-top:400px;
`;
const Source= {
DestinationTypes: [
    {value:'forest',label:'Forest'},
    {value:'mountain',label:'Mountain'},
    {value:'beach',label:'Beach'},
    {value:'desert',label:'Desert'},
    {value:'cave',label:'Cave'},
    {value:'bodyofwater',label:'Body Of Water'},
    {value:'residentialarea',label:'Residential area (town,city,village etc.)'},
    {value:'countryside',label:'Countryside'},
    {value:'wetland',label:'Wetland'}
],
DestinationPurpose: [
    {value:'hangingout',label:'Hanging out'},
    {value:'vacation',label:'Vacation'},
    {value:'swimming',label:'Swimming'},
    {value:'sightseeing',label:'Sightseeing'},
    {value:'photography',label:'Photography'},
    {value:'stargazing',label:'Stargazing'},
    {value:'camping',label:'Camping'},
    {value:'climbing',label:'Climbing'},
    {value:'wildlifewatching',label:'Wildlife watching'},
    {value:'fishing',label:'Fishing'},
    {value:'foraging',label:'Foraging'}
],
Vehicles: [
    {value:'foot',label:'Foot'},
    {value:'bike',label:'Bike'},
    {value:'car',label:'Car'},
    {value:'publictransportation',label:'Public transportation'},
    {value:'motorbike',label:'Motorbike (moped,scooter,standard,off-road etc.)'},
    {value:'Airplane',label:'Airplane'},
    {value:'watervehicle', label:'Water Vehicle (rowboat,motorboat,sailboat,canoe,paddleboard etc.)'},
    {value:'skateboard',label:'Skateboard'},
    {value:'scooter',label:'Manual Scooter'},
    {value:'rollerblades',label:'Rollerblades'},
    {value:'personalelectricvehicle',label:'Personal Electric Vehicle (E-scooter,E-skateboard,hoverboard etc.)'},
],
WeatherConditions: [
    {value:'clear',label:'Clear'},
    {value:'raining', label:'Raining'},
    {value:'lowvisibility',label:'Low visibility'},
    {value:'airparticles',label:'Air particles (sand,dust,ash,smoke etc.)'}
],
Temperature: [
    { value: 'scorching', label: 'Scorching (40°C / 104°F and above)', minTemp: 40 },
    { value: 'hot', label: 'Hot (30-39°C / 86-102°F)', minTemp: 30, maxTemp: 39 },
    { value: 'warm', label: 'Warm (20-29°C / 68-84°F)', minTemp: 20, maxTemp: 29 },
    { value: 'temperate', label: 'Temperate (11-19°C / 52-66°F)', minTemp: 11, maxTemp: 19 },
    { value: 'chilly', label: 'Chilly (0-10°C / 32-50°F)', minTemp: 0, maxTemp: 10 },
    { value: 'coldish', label: 'Coldish (-10 to -1°C / 14-30°F)', minTemp: -10, maxTemp: -1 },
    { value: 'cold', label: 'Cold (-19 to -11°C / -2 to 12°F)', minTemp: -19, maxTemp: -11 },
    { value: 'verycold', label: 'Very Cold (-20°C-29°C / -4°F-22°F))', minTemp: -29, maxTemp: -20 },
    { value: 'freezing', label: 'Freezing (Below -30°C / -22°F)', minTemp: -50, maxTemp: -30 }
]
}
const TemperatureStyle=({
option: (base, state) => {
    const isScorching = state.data.value === 'scorching';
    const isHot = state.data.value === 'hot';
    const isWarm = state.data.value === 'warm';
    const isTemperate = state.data.value === 'temperate';
    const isChilly = state.data.value === 'chilly';
    const isColdish = state.data.value === 'coldish';
    const isCold = state.data.value === 'cold';
    const isVeryCold = state.data.value === 'verycold';
    const isFreezing = state.data.value === 'freezing';


    return {
      ...base,
      backgroundColor: isScorching?'#fc0000ff'
      : isHot?'#fd8700ff'
      : isWarm?'#fffb00ff'
      : isTemperate?'#2ee600ff'
      : isChilly? '#00ffbfff'
      : isColdish? '#00e0e0ff'
      : isCold? '#008cffff'
      : isVeryCold? '#2600ffff'
      : isFreezing? '#7700ffff'
      : '#e9e9e9ff'
    };
}
})
const loadOptions = (sourceKey) => (inputValue, callback) => {
    const list=Source[sourceKey];
  setTimeout(() => {
    const filtered = list.filter(item =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(filtered);
  }, 1000);
};

function CreateListFormCode() {

    return (
        <>
        <div>
        <CreateListFormGrid1>
        <div className="box1">
        <label>
            List name: <input name="input" type="text"/>
        </label>
        </div>
        <div  className="box2">
        <label>
            Destination name: <input name="input" type="text"/>
        </label>
        </div>
        <div className="box3">
        <label>
            Overnight stay? <input name="input" type="checkbox"/>
        </label>
        </div>
        <div  className="box4">
        <label>
            Let program automatically assign clothes and accessories? <input name="input" type="checkbox"/>
        </label>
        </div>
        <div  className="box5">
        <h3>Destination Type</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('DestinationTypes')} defaultOptions placeholder="Type some" isMulti className="basic-multi-select" classNamePrefix="select"/>
        </div>
        <div className="box6">
        <h3>Temperature</h3>
        <AsyncSelect styles={TemperatureStyle} cacheOptions loadOptions={loadOptions('Temperature')} defaultOptions placeholder="Type some" isMulti className="basic-multi-select" classNamePrefix="select"/>
        </div>
        <div className="box7">
        <h3>Weather Conditions</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('WeatherConditions')} defaultOptions placeholder="Type some" isMulti className="basic-multi-select" classNamePrefix="select"/>
        </div>
        <div className="box8">
        <h3>Transportation</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('Vehicles')} defaultOptions placeholder="Type some" isMulti className="basic-multi-select" classNamePrefix="select"/>
        </div>
        <div className="box9">
        <h3>Purpose</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('DestinationPurpose')} defaultOptions placeholder="Type some" isMulti className="basic-multi-select" classNamePrefix="select"/>
        </div>
        </CreateListFormGrid1>
        </div>
        </>
    )
}

export default CreateListFormCode;