import styled from "styled-components";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import WidgetPanel from "./WidgetPanel";
import { useTranslate } from "./LanguageContext";

const CreateListFormGrid1=styled.div`
display:grid;
gap:15px;
margin-top:400px;
padding:20px;
background-color:whitesmoke;
outline:3px solid black;
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
const getSource = (t) => ({
DestinationTypes: [
    {value:'forest',label:`${t("typeforest")} 🌲`},
    {value:'mountain',label:`${t("typemountain")} 🏔️`},
    {value:'beach',label:`${t("typebeach")} 🏖️`},
    {value:'desert',label:`${t("typedesert")} 🏜️`},
    {value:'cave',label:`${t("typecave")}🪨`},
    {value:'bodyofwater',label:`${t("typebodyofwater")} 🌊`},
    {value:'residentialarea',label:`${t("typeresidentialarea")} 🏙️`},
    {value:'countryside',label:`${t("typecountryside")}🌻`},
],
DestinationPurpose: [
{ value: 'hangingout', label: `${t("typehangingout")}  😎☕` },
  { value: 'vacation', label: `${t("typevacation")} 🏖️` },
  { value: 'swimming', label: `${t("typeswimming")}  🏊‍♂️` },
  { value: 'sightseeing', label: `${t("typesightseeing")} 🗽` },
  { value: 'photography', label: `${t("typephotography")} 📸` },
  { value: 'stargazing', label: `${t("typestargazing")} 🌕` },
  { value: 'camping', label: `${t("typecamping")} 🏕️` },
  { value: 'climbing', label: `${t("typeclimbing")} 🧗‍♂️` },
  { value: 'wildlifewatching', label: `${t("typewildlifewatching")} 🦉` },
  { value: 'fishing', label: `${t("typefishing")} 🎣` },
  { value: 'foraging', label: `${t("typeforaging")} 🍄🫐` }
],
Vehicles: [
  { value: 'foot', label: `${t("typefoot")} 🚶` },
  { value: 'bike', label: `${t("typebike")} 🚲` },
  { value: 'car', label: `${t("typecar")} 🚗` },
  { value: 'publictransportation', label: `${t("typepublictransportation")} 🚌` },
  { value: 'motorbike', label: `${t("typemotorbike")} 🏍️` },
  { value: 'airplane', label: `${t("typeairplane")} ✈️` },
  { value: 'watervehicle', label: `${t("typewatervehicle")} ⛵` },
  { value: 'skateboard', label: `${t("typeskateboard")} 🛹` },
  { value: 'scooter', label: `${t("typescooter")} 🛴` },
  { value: 'rollerblades', label: `${t("typerollerblades")} 🛼` },
  { value: 'personalelectricvehicle', label: `${t("typepersonalelectricvehicle")} ⚡🛴` }
],
WeatherConditions: [
  { value: 'clear', label: `${t("typeclear")} ☀️` },
  { value: 'raining', label: `${t("typeraining")} 🌧️` },
  { value: 'lowvisibility', label: `${t("typelowvisibility")} 👁🚫` },
  { value: 'sandstorm', label: `${t("typesandstorm")} 💨🏜️` },
  { value: 'fog', label: `${t("typefog")} 🌫️` }
],
Temperature: [
  { value: 'scorching', label:`${t("typescorching")} 🔥💀`, minTemp: 40 },
  { value: 'hot', label: `${t("typehot")} 🔥`, minTemp: 30, maxTemp: 39 },
  { value: 'warm', label: `${t("typewarm")} ☀️`, minTemp: 20, maxTemp: 29 },
  { value: 'temperate', label: `${t("typetemperate")} 🌳`, minTemp: 11, maxTemp: 19 },
  { value: 'cool', label: `${t("typecool")} ☀️⚖️❄️`, minTemp: 0, maxTemp: 10 },
  { value: 'chilly', label: `${t("typechilly")} ❄️`, minTemp: -10, maxTemp: -1 },
  { value: 'cold', label: `${t("typecold")} 🥶`, minTemp: -19, maxTemp: -11 },
  { value: 'verycold', label: `${t("typeverycold")} 🧊`, minTemp: -29, maxTemp: -20 },
  { value: 'freezing', label: `${t("typefreezing")} 🧊💀`, minTemp: -50, maxTemp: -30 }
]
});
function CreateListFormCode() {
    const {t,setLang}=useTranslate();
    const Source = getSource(t)
    const [checkedAutoBox,SetChecked]=useState(true);
    const [checkedOverNightBox,SetCheckedOverNight]=useState(true);
    function ToggleAutoBox() {
        if (checkedAutoBox) {
            SetChecked(false)
        } else {
            SetChecked(true)
        }
    }
    function ToggleOverNightBox() {
        if (checkedOverNightBox) {
            SetCheckedOverNight(false)
        } else {
            SetCheckedOverNight(true)
        }
    
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
    return (
        <>
        <div>
        <WidgetPanel/>
        <CreateListFormGrid1>
        <h1>{t("listheader")}</h1>
        <Box1>
        <h3>{t("listname")} 🏷️</h3>
        <textarea name="listname" rows={4} cols={40} placeholder={t("typelistname")} required>
        </textarea>
        </Box1>
        <Box2>
        <h3>{t("destinationname")} 🏷️</h3>
        <textarea name="destinationname" rows={4} cols={40} placeholder={t("typelistdestination")}>
        </textarea>
        </Box2>
        <Box3>
         <h3>{t("destinationtype")} 🧭</h3>
        <AsyncSelect className="DestinationType" cacheOptions loadOptions={loadOptions('DestinationTypes')} defaultOptions placeholder={t("starttyping")} isMulti/>
        </Box3>
        <Box4>
        <h3>{t("purpose")} ⚙️</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('DestinationPurpose')} defaultOptions placeholder={t("starttyping")} isMulti/>
        </Box4>
        <Box5>
        <h3>{t("temperature")} 🌡️</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('Temperature')} defaultOptions placeholder={t("starttyping")} isMulti/>
        </Box5>
        <Box6>
        <h3>{t("weathercondition")} 🌥️</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('WeatherConditions')} defaultOptions placeholder={t("starttyping")} isMulti/>
        </Box6>
        <Box7>
        <h3>{t("transportation")} 🚗</h3>
        <AsyncSelect cacheOptions loadOptions={loadOptions('Vehicles')} defaultOptions placeholder={t("starttyping")} isMulti/>
        </Box7>
        <Box8>
        <h3>{t("duration")} 🕒</h3>
        <DurationBoxDiv>
        <div>
        {t("traveltime")}: <input type="number" id="quantity" name="quantity" min="1" max="24"/> {t("hours")}
        </div>
        <div>
        <input name="input" type="checkbox" onClick={ToggleOverNightBox}/> {t("overnight")} <input type="number" id="quantity" name="quantity" min="1" max="31" disabled={checkedOverNightBox}/> {t("nights")}
        </div>
        
        </DurationBoxDiv>
        </Box8>
        <Box9>
        <GenerateListButton>
        <h4>{t("createlist")}</h4>    
        </GenerateListButton>
        </Box9>
        <Box10>
        <AutomaticAssignDiv>
        <label>
         <input name="input" id='autoassign' type="checkbox" checked={checkedAutoBox} onClick={ToggleAutoBox}/>
        </label>
        <p>{t("automaticassign")} <br></br> {t("automaticassign2")}</p>
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