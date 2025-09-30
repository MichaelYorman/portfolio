import styled from "styled-components";
import { useTranslate } from "./LanguageContext";
import { useEffect,useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const api=axios.create({
     baseURL: "http://localhost:3000/api",
})

const NewListDiv=styled.div`
display:flex;
flex-direction:column;
position:relative;
background-color:whitesmoke;
margin-top:250px;
`;
const UpperListSection=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gird-template-rows:1fr;
`
const OverViewSettingsDiv1=styled.div`
display:flex;
flex-direction:column;
grid-column:1;
gap:20px;
margin-top:50px;
margin-left:150px;
`;

const OverViewSettingsDiv2=styled.div`
display:flex;
flex-direction:column;
grid-column:2;
gap:20px;
margin-top:600px;
margin-left:150px;
`;
const MapDiv=styled.div`
background-color:gray;
position:absolute;
right:0;
height:512px;
width:512px;
`;
const OverviewContentDiv=styled.div`
display:flex;
flex-direction:column;
margin-top:100px;
width:1080px;
height:auto;
align-items:center;
padding-bottom:100px;
}
`;
const ClothHeaderDiv=styled.div`
display:flex;
flex-direction:column;
margin-top:50px;
width:400px;
height:100px;
outline-style:dashed;
background-color:white;
align-items:center;
justify-content:center;
`;
const ClothContentDiv=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:10px;
margin-top:50px;
margin-right:200px;
width:800px;
height:auto;
outline-style:dashed;
background-color:white;
`;
const AddMoreButtonDiv=styled.div`
display:flex;
padding:5px;
flex-direction:column;
align-items:center;
justify-content:center;
margin:10px 20px 10px 10px;
width:fit-content;
height:fit-content;
background-color:whitesmoke;
outline-style:dashed;
cursor:pointer;
`;

const Logo=styled.img`
width:50px;
height:auto;
`;
const MyListHeader=styled.header`
display:flex;
flex-direction:column;
width:fit-content;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
h1{cursor:pointer;}
`;

const Object=styled.div`
width:100px;
height:100px;
margin:10px 10px 0px 10px;
background-color:black;
`;
const MultiItemDiv=styled.div`
display:flex;
flex-direction:row;
width:300px;
height:fit-content;
background-color:snow;
outline-style:solid;
outline-width:1px;
flex-wrap:wrap;
`;
const MultiItem=styled.div`
display:flex;
width:100px;
height:100px;
font-size:2rem;
flex-direction:row;
align-items:center;
justify-content:center;
gap:10px;
background-color:${props => (props.$isActive ? "green" : "whitesmoke")};
outline-style:solid;
outline-width:2px;
cursor:pointer;
&:hover {background-color:green;}
transition:background-color:0.3s;
`;
const Test=styled.div`
width:100px;
height:100px;
background-color:red;
`
const SaveGenerateDiv=styled.div`
display:flex;
flex-direction:row;
width:fit-content;
height:fit-content;
margin-left:100px;
margin-top:50px;
gap:10px;
`;
const SaveListButton=styled.button`
width:200px;
height:50px;
`
const GenerateListButton=styled.button`
width:200px;
height:50px;;
`;
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
function EditList() {
const [optionsChosen, setOptionsChosen] = useState({
listName:"",
destinationName:"",
types:[],
purposes:[],
vehicles:[],
weather:[],
temperature:""
})

const [item,setItem]=useState(null);
const location = useLocation();
const { id } = location.state || {};

 //Brings information about the item from backend
 useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/list/${id}`);
        setItem(response.data.data);
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    };
    fetchItem();
  }, [id]);

useEffect(() => {
  if (item) {
    setOptionsChosen({
      listName: item.list_name,
      destinationName: item.place_name,
      types: item.place_type,
      purposes: item.purpose,
      vehicles: item.vehicle,
      weather: item.weather,
      temperature: item.temperature
    });
  }
}, [item]);

console.log(optionsChosen)

const [message,setMessage]=useState("")

//Update the list
const handlePut = async () => {
  try {
    const res = await api.put(`/update/${id}`,
      optionsChosen
    );

    setMessage(
      res.data.message + " | You sent: " + JSON.stringify(res.data.received)
    );
  } catch (err) {
    console.error("Error sending PUT request:", err);
    setMessage("Error sending PUT request");
  }
};
//Translation
const {t,setLang}=useTranslate();
// With Source, can take hold of different values with ease
const Source = getSource(t);
const DestinationTypes=Source.DestinationTypes;
const DestinationPurposes=Source.DestinationPurpose;
const Vehicles=Source.Vehicles;
const Weather=Source.WeatherConditions;

//UseState of multi-choose items
const [ActiveListName,setActiveListName]=useState({})
const [ActiveDestinationName,setActiveDestinationName]=useState({})
const [ActiveTypeBoxes,setActiveTypeBoxes]=useState({})
const [ActivePurposeBoxes,setActivePurposeBoxes]=useState({})
const [ActiveVehicleBoxes,setActiveVehicleBoxes]=useState({})
const [ActiveWeatherBoxes,setActiveWeatherBoxes]=useState({})

const initialActiveBoxes = {};
const initialPurposeBoxes={};
const initialVehicleBoxes={};
const initialWeatherBoxes={};

useEffect(() => {
  if (item) {
    DestinationTypes.forEach((dt, index) => {
      if (item.place_type.includes(dt.value)) {
        initialActiveBoxes[index] = true;
      }
    });
        DestinationPurposes.forEach((db, index) => {
      if (item.place_type.includes(db.value)) {
        initialPurposeBoxes[index] = true;
      }
    });
    Vehicles.forEach((vhc, index) => {
      if (item.vehicle.includes(vhc.value)) {
        initialVehicleBoxes[index] = true;
      }
    });
        Weather.forEach((vhc, index) => {
      if (item.weather.includes(vhc.value)) {
        initialWeatherBoxes[index] = true;
      }
    });

    setActiveListName(item.list_name);
    setActiveDestinationName(item.place_name);
    setActiveTypeBoxes(initialActiveBoxes);
    setActivePurposeBoxes(initialActiveBoxes);
    setActiveVehicleBoxes(initialVehicleBoxes);
    setActiveWeatherBoxes(initialVehicleBoxes);
  }
}, [item]);

const toggleTypeBox = (index) => {
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

const togglePurposeBox=(index)=> {
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
const toggleWeatherBox=(index)=> {
  const value = Weather[index].value; // get weatherconditions
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
    <SaveGenerateDiv>
    <SaveListButton>
    <h1>Save List</h1>
    </SaveListButton>
    <GenerateListButton>
    <h1>Generate List</h1>
    </GenerateListButton>
    </SaveGenerateDiv>
    <Test onClick={handlePut}></Test>
    <MapDiv/>
    <UpperListSection>
    <OverViewSettingsDiv1>
    <MyListHeader><header>{t("newlist-listname")}</header>
    <textarea
  onChange={(e) => {
    console.log(e.target.value);
    setOptionsChosen(prev => ({ ...prev, listName: e.target.value }))
  }}
  name="destinationname" rows={4} cols={40} placeholder={ActiveListName||t("typelistname")}>
    </textarea>
    </MyListHeader>
    <MyListHeader ><header>{t("newlist-destinationname")}</header>
    <textarea
  onChange={(e) => {
    console.log(e.target.value);
    setOptionsChosen(prev => ({ ...prev, destinationName: e.target.value }))
  }}
  name="destinationname" rows={4} cols={40} placeholder={ActiveDestinationName||t("typelistdestination")}>
    </textarea></MyListHeader>
    <MyListHeader><header>{t("newlist-destinationtype")}</header>
    <MultiItemDiv>
      {DestinationTypes.map((item, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActiveTypeBoxes[i]}
          onClick={() => toggleTypeBox(i)
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
          onClick={() => togglePurposeBox(i)
          }
        >
          {item.symbol}
        </MultiItem>
      ))}
    </MultiItemDiv>
    </MyListHeader> 
    </OverViewSettingsDiv1>
    <OverViewSettingsDiv2>
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
    </OverViewSettingsDiv2>
    </UpperListSection>
    <OverviewContentDiv>
    <ClothHeaderDiv>
    <h2>{t("headwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
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

    </OverviewContentDiv>
    </NewListDiv>
    </div>
    </>
)
}

export default EditList;