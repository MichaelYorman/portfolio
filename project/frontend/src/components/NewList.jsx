import { useTranslate } from "./LanguageContext";
import { useState } from "react";
import axios from "axios";
import { 
  NewListDiv,
  TopListSectionGrid,
  TopListContentDiv1,
  TopListContentDiv2,
  MapApiDiv,
  BottomContentDiv,
  ClothHeaderDiv,
  ClothContentDiv,
  AddMoreButtonDiv,
  Logo,
  MyListHeader,
  Object,
  MultiItemDiv,
  MultiItem,
  N,
  Test,
  HeadWearTable,
  BodyWearTable,
  HandWearTable,
  LegWearTable,
  FootWearTable,
  HeadWearSearchInput,
  HeadWearContainer
} from "./NewListStyle";

const api=axios.create({
     baseURL: "http://localhost:3000/api",
})

const getSource = (t) => ({
DestinationTypes: [
  { value: 'forest', label: `${t("typeforest")}`, symbol: '🌲' },
  { value: 'mountain', label: `${t("typemountain")}`, symbol: '🏔️' },
  { value: 'beach', label: `${t("typebeach")}`, symbol: '🏖️' },
  { value: 'desert', label: `${t("typedesert")}`, symbol: '🏜️' },
  { value: 'cave', label: `${t("typecave")}`, symbol: '🪨' },
  { value: 'bodyofwater', label: `${t("typebodyofwater")}`, symbol: '🌊' },
  { value: 'residentialarea', label: `${t("typeresidentialarea")}`, symbol: '🏙️' },
  { value: 'countryside', label: `${t("typecountryside")}`, symbol: '🌽🚜🐑' }
],
DestinationPurpose: [
  { value: 'hangingout', label: `${t("typehangingout")}`, symbol: "😎☕" },
  { value: 'vacation', label: `${t("typevacation")}`, symbol: "🏖️" },
  { value: 'swimming', label: `${t("typeswimming")}`, symbol: "🏊‍♂️" },
  { value: 'sightseeing', label: `${t("typesightseeing")}`, symbol: "🗽" },
  { value: 'photography', label: `${t("typephotography")}`, symbol: "📸" },
  { value: 'stargazing', label: `${t("typestargazing")}`, symbol: "🔭🌕" },
  { value: 'camping', label: `${t("typecamping")}`, symbol: "🏕️" },
  { value: 'climbing', label: `${t("typeclimbing")}`, symbol: "🧗‍♂️" },
  { value: 'wildlifewatching', label: `${t("typewildlifewatching")}`, symbol: "🔭🦉" },
  { value: 'fishing', label: `${t("typefishing")}`, symbol: "🎣" },
  { value: 'foraging', label: `${t("typeforaging")}`, symbol: "🍄🫐" },
  { value: 'picnic', label: `${t("typepicnic")}`, symbol: "🧺🥪" }
],
Vehicles: [
  { value: 'foot', label: `${t("typefoot")}`, symbol: "🚶" },
  { value: 'bike', label: `${t("typebike")}`, symbol: "🚲" },
  { value: 'car', label: `${t("typecar")}`, symbol: "🚗" },
  { value: 'publictransportation', label: `${t("typepublictransportation")}`, symbol: "🚌" },
  { value: 'motorbike', label: `${t("typemotorbike")}`, symbol: "🏍️" },
  { value: 'airplane', label: `${t("typeairplane")}`, symbol: "✈️" },
  { value: 'watervehicle', label: `${t("typewatervehicle")}`, symbol: "⛵" },
  { value: 'skateboard', label: `${t("typeskateboard")}`, symbol: "🛹" },
  { value: 'scooter', label: `${t("typescooter")}`, symbol: "🛴" },
  { value: 'rollerblades', label: `${t("typerollerblades")}`, symbol: "🛼" },
  { value: 'personalelectricvehicle', label: `${t("typepersonalelectricvehicle")}`, symbol: "⚡🛴🛹🚲" }
],
WeatherConditions: [
  { value: 'clear', label: `${t("typeclear")}`, symbol: "☀️" },
  { value: 'raining', label: `${t("typeraining")}`, symbol: "🌧️" },
  { value: 'lowvisibility', label: `${t("typelowvisibility")}`, symbol: "👁🚫" },
  { value: 'sandstorm', label: `${t("typesandstorm")}`, symbol: "💨🏜️" },
  { value: 'fog', label: `${t("typefog")}`, symbol: "🌫️" }
],
Temperature: [
  { value: 'scorching', label:`${t("typescorching")} 🔥💀`},
  { value: 'hot', label: `${t("typehot")} 🔥`},
  { value: 'warm', label: `${t("typewarm")} ☀️`},
  { value: 'temperate', label: `${t("typetemperate")} 🌳`},
  { value: 'cool', label: `${t("typecool")} ☀️⚖️❄️`},
  { value: 'chilly', label: `${t("typechilly")} ❄️`},
  { value: 'cold', label: `${t("typecold")} 🥶`},
  { value: 'verycold', label: `${t("typeverycold")} 🧊`},
  { value: 'freezing', label: `${t("typefreezing")} 🧊💀`}
]
});
//NewList function
function NewList() {
// Array of which the items are saved for POST request
const [optionsChosen, setOptionsChosen] = useState({
listName:"",
destinationName:"",
types:[],
purposes:[],
vehicles:[],
weather:[],
temperature:"",
headwear:[],
bodywear:[],
handwear:[],
legwear:[],
footwear:[],
accessory:[]
})
//
const [message,setMessage]=useState("")
// Handles POST request to server
const handlePost=async()=>{
try {
const payload={data:optionsChosen};
const res= await api.post("/test",payload);
setMessage(res.data.message+" | You sent: "+JSON.stringify(res.data.received));
} catch(err) {
  console.error(err);
  setMessage("Error sending POST request");
}
};
//

function clickMe() {
    console.log(optionsChosen)
  }
//Translation
const {t,setLang}=useTranslate();
// With Source, you can call different objects easily
const Source = getSource(t);
const DestinationTypes=Source.DestinationTypes;
const DestinationPurposes=Source.DestinationPurpose;
const Vehicles=Source.Vehicles;
const Weather=Source.WeatherConditions;

//UseState for multipickable items
const [ActiveTypeBoxes,setActiveTypeBoxes]=useState({})
const [ActivePurposeBoxes,setActivePurposeBoxes]=useState({})
const [ActiveVehicleBoxes,setActiveVehicleBoxes]=useState({})
const [ActiveWeatherBoxes,setActiveWeatherBoxes]=useState({})

//UseState for different Wear Search Tables
const [IsHeadWearTableActive,setHeadWearTableActive]=useState(true);

//UseState for user chosen wear
  const [ChosenHeadWear, setChosenHeadWear] = useState({});
  const [ChosenBodyWear, setChosenBodyWear] = useState({});
  const [ChosenHandWear, setChosenHandWear] = useState({});
  const [ChosenLegWear, setChosenLegWear] = useState({});
  const [ChosenFootWear, setChosenFootWear] = useState({});

// Update chosen options from Destination Type Box
const toggleDestinationTypeBox = (index) => {
  const value = DestinationTypes[index].value; // get types

  // 1. Update UI state
  setActiveTypeBoxes(prev => ({
    ...prev,
    [index]: !prev[index]
  }));

  // 2. Update chosen options
  setOptionsChosen(prev => {
    if (prev.types.includes(value)) {
      // If value exists, remove it
      return {
        ...prev,
        types: prev.types.filter(item => item !== value)
      };
    } else {
      // If value not in list, add it
      return {
        ...prev,
        types: [...prev.types, value]
      };
    }
  });
};
// Update chosen options from Destination Purpose Box
const toggleDestinationPurposeBox=(index)=> {
const value = DestinationPurposes[index].value; // get purposes
setActivePurposeBoxes(prev=> ({
    ...prev,[index]: !prev[index]
}))
  // 2. Update chosen options
  setOptionsChosen(prev => {
    if (prev.purposes.includes(value)) {
      // If value exists, remove it
      return {
        ...prev,
        purposes: prev.purposes.filter(item => item !== value)
      };
    } else {
      // If value not in list, add it
      return {
        ...prev,
        purposes: [...prev.purposes, value]
      };
    }
  });
};
// Update chosen options from Destination Vehicle Box
const toggleVehicleBox=(index)=> {
  const value = Vehicles[index].value; // get vehicles
setActiveVehicleBoxes(prev=> ({
    ...prev,[index]: !prev[index]
}))
  // 2. Update chosen options
  setOptionsChosen(prev => {
    if (prev.vehicles.includes(value)) {
      // If value exists, remove it
      return {
        ...prev,
        vehicles: prev.vehicles.filter(item => item !== value)
      };
    } else {
      // If value not in list, add it
      return {
        ...prev,
        vehicles: [...prev.vehicles, value]
      };
    }
  });
};
// Update chosen options from Weather Box
const toggleWeatherBox=(index)=> {
  const value = Weather[index].value; // get weather conditions
setActiveWeatherBoxes(prev=> ({
    ...prev,[index]: !prev[index]
}))
  // 2. Update chosen options
  setOptionsChosen(prev => {
    if (prev.weather.includes(value)) {
      // If value exists, remove it
      return {
        ...prev,
        weather: prev.weather.filter(item => item !== value)
      };
    } else {
      // If value not in list, add it
      return {
        ...prev,
        weather: [...prev.weather, value]
      };
    }
  });
};
return (
    <>
    <div>
    <NewListDiv>
    <Test onClick={handlePost}></Test>
    <MapApiDiv/>
    <TopListSectionGrid>
    <TopListContentDiv1>
    <MyListHeader><header>{t("newlist-listname")}</header>
    <textarea
  onChange={(e) => {
    console.log(e.target.value);
    setOptionsChosen(prev => ({ ...prev, listName: e.target.value }))
  }}
  name="destinationname" rows={4} cols={40} placeholder={t("typelistname")}>
    </textarea>
    </MyListHeader>
    <MyListHeader ><header>{t("newlist-destinationname")}</header>
    <textarea
  onChange={(e) => {
    console.log(e.target.value);
    setOptionsChosen(prev => ({ ...prev, destinationName: e.target.value }))
  }}
  name="destinationname" rows={4} cols={40} placeholder={t("typelistdestination")}>
    </textarea></MyListHeader>
    <MyListHeader><header>{t("newlist-destinationtype")}</header>
    <N onClick={clickMe}/>
    <MultiItemDiv>
      {DestinationTypes.map((item, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActiveTypeBoxes[i]}
          onClick={() => toggleDestinationTypeBox(i)
          }
        >
          {item.symbol}
        </MultiItem>
      ))}
    </MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>{t("newlist-purpose")}</header>
    <MultiItemDiv>
          {DestinationPurposes.map((item, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActivePurposeBoxes[i]}
          onClick={() => toggleDestinationPurposeBox(i)
          }
        >
          {item.symbol}
        </MultiItem>
      ))}
    </MultiItemDiv>
    </MyListHeader> 
    </TopListContentDiv1>
    <TopListContentDiv2>
        <MyListHeader><header>{t("newlist-vehicle")}</header>
    <MultiItemDiv>
        {Vehicles.map((item, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActiveVehicleBoxes[i]}
          onClick={() => toggleVehicleBox(i)
          }
        >
          {item.symbol}
        </MultiItem>
      ))}  
    </MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>{t("newlist-weather")}</header>
        <MultiItemDiv>
            {Weather.map((item, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActiveWeatherBoxes[i]}
          onClick={() => toggleWeatherBox(i)
          }
        >
          {item.symbol}
        </MultiItem>
      ))}  
    </MultiItemDiv>
    </MyListHeader>
    </TopListContentDiv2>
    </TopListSectionGrid>

    <BottomContentDiv>
    <ClothHeaderDiv>
    <h2>{t("headwear")}</h2>
    </ClothHeaderDiv>
    <HeadWearContainer>
    <HeadWearSearchInput placeholder="Search headwear..."  $IsHeadWearTableActive={IsHeadWearTableActive}>
    </HeadWearSearchInput>
    <HeadWearTable $IsHeadWearTableActive={IsHeadWearTableActive}>
    <Object/>
    <Object/>
    <Object/>
    <Object/>
    <Object/>
    <Object/>
    <Object/>
    <Object/>
    <Object/>
    </HeadWearTable>
    </HeadWearContainer>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg" alt="Plus circle symbol" onClick={() => setHeadWearTableActive(prev=>!prev)}/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("bodywear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("handwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("legwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("footwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    </BottomContentDiv>
    </NewListDiv>
    </div>
    </>
)
}

export default NewList;