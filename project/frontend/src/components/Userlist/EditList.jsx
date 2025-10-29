import styled from "styled-components";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ClothAccessoryList } from "./ListItems";
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
  SearchListItem,
  ClothItem,
  ClothItemButtonDiv,
  ClothCounter,
  ClothItemPlusButton,
  ClothItemMinusButton,
  ClothItemDeleteButton,
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
  HeadWearContainer,
  BodyWearSearchInput,
  BodyWearContainer,
  HandWearSearchInput,
  HandWearContainer,
  LegWearSearchInput,
  LegWearContainer,
  FootWearSearchInput,
  FootWearContainer
} from "./NewListStyle";
import {
  addHeadWearFromSearch,
  increaseHeadWear,
  decreaseHeadWear,
  deleteHeadWear,
  addBodyWearFromSearch,
  increaseBodyWear,
  decreaseBodyWear,
  deleteBodyWear,
  addHandWearFromSearch,
  increaseHandWear,
  decreaseHandWear,
  deleteHandWear,
  addLegWearFromSearch,
  increaseLegWear,
  decreaseLegWear,
  deleteLegWear,
  addFootWearFromSearch,
  increaseFootWear,
  decreaseFootWear,
  deleteFootWear
} from './ListFunctions';

const api=axios.create({
     baseURL: "http://localhost:3000/api",
})
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
const getSource = () => ({
  DestinationTypes: [
    { value: 'forest', label: 'Forest', symbol: '🌲' },
    { value: 'mountain', label: 'Mountain', symbol: '🏔️' },
    { value: 'beach', label: 'Beach', symbol: '🏖️' },
    { value: 'desert', label: 'Desert', symbol: '🏜️' },
    { value: 'cave', label: 'Cave', symbol: '🪨' },
    { value: 'bodyofwater', label: 'Bodyofwater', symbol: '🌊' },
    { value: 'residentialarea', label: 'Residentialarea', symbol: '🏙️' },
    { value: 'countryside', label: 'Countryside', symbol: '🌽🚜🐑' }
  ],
  DestinationPurpose: [
    { value: 'hangingout', label: 'Hangingout', symbol: '😎☕' },
    { value: 'vacation', label: 'Vacation', symbol: '🏖️' },
    { value: 'swimming', label: 'Swimming', symbol: '🏊‍♂️' },
    { value: 'sightseeing', label: 'Sightseeing', symbol: '🗽' },
    { value: 'photography', label: 'Photography', symbol: '📸' },
    { value: 'stargazing', label: 'Stargazing', symbol: '🔭🌕' },
    { value: 'camping', label: 'Camping', symbol: '🏕️' },
    { value: 'climbing', label: 'Climbing', symbol: '🧗‍♂️' },
    { value: 'wildlifewatching', label: 'Wildlifewatching', symbol: '🔭🦉' },
    { value: 'fishing', label: 'Fishing', symbol: '🎣' },
    { value: 'foraging', label: 'Foraging', symbol: '🍄🫐' },
    { value: 'picnic', label: 'Picnic', symbol: '🧺🥪' }
  ],
  Vehicles: [
    { value: 'foot', label: 'Foot', symbol: '🚶' },
    { value: 'bike', label: 'Bike', symbol: '🚲' },
    { value: 'car', label: 'Car', symbol: '🚗' },
    { value: 'publictransportation', label: 'Publictransportation', symbol: '🚌' },
    { value: 'motorbike', label: 'Motorbike', symbol: '🏍️' },
    { value: 'airplane', label: 'Airplane', symbol: '✈️' },
    { value: 'watervehicle', label: 'Watervehicle', symbol: '⛵' },
    { value: 'skateboard', label: 'Skateboard', symbol: '🛹' },
    { value: 'scooter', label: 'Scooter', symbol: '🛴' },
    { value: 'rollerblades', label: 'Rollerblades', symbol: '🛼' },
    { value: 'personalelectricvehicle', label: 'Personalelectricvehicle', symbol: '⚡🛴🛹🚲' }
  ],
  WeatherConditions: [
    { value: 'clear', label: 'Clear', symbol: '☀️' },
    { value: 'raining', label: 'Raining', symbol: '🌧️' },
    { value: 'lowvisibility', label: 'Lowvisibility', symbol: '👁🚫' },
    { value: 'sandstorm', label: 'Sandstorm', symbol: '💨🏜️' },
    { value: 'fog', label: 'Fog', symbol: '🌫️' }
  ],
  Temperature: [
    { value: 'scorching', label: 'Scorching 🔥💀' },
    { value: 'hot', label: 'Hot 🔥' },
    { value: 'warm', label: 'Warm ☀️' },
    { value: 'temperate', label: 'Temperate 🌳' },
    { value: 'cool', label: 'Cool ☀️⚖️❄️' },
    { value: 'chilly', label: 'Chilly ❄️' },
    { value: 'cold', label: 'Cold 🥶' },
    { value: 'verycold', label: 'Verycold 🧊' },
    { value: 'freezing', label: 'Freezing 🧊💀' }
  ]
});

//Listing functions
function HeadWearListing({
  IsHeadWearTableActive,
  setHeadWearTableActive,
  ChosenHeadWear,
  setChosenHeadWear,
  increaseHeadWear,
  decreaseHeadWear,
  deleteHeadWear,
  HeadWear,
  hoveredIndex,
  setHoveredIndex,
  setOptionsChosen
}) {
  return (
    <div>
<ClothHeaderDiv>
  <h2>Headwear</h2>
</ClothHeaderDiv>

<HeadWearContainer>
  <HeadWearSearchInput
    placeholder="Search headwear..."
    $IsHeadWearTableActive={IsHeadWearTableActive}
  />
  <HeadWearTable $IsHeadWearTableActive={IsHeadWearTableActive}>
    {HeadWear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addHeadWearFromSearch(i, HeadWear, ChosenHeadWear, setChosenHeadWear,setOptionsChosen)}
      >
        <p>{item.label}</p>
      </SearchListItem>
    ))}
  </HeadWearTable>
</HeadWearContainer>

<ClothContentDiv>
  <AddMoreButtonDiv>
    <Logo
      src="/icons/pluscircle.svg"
      alt="Plus circle symbol"
      onClick={() => setHeadWearTableActive(prev => !prev)}
    />
  </AddMoreButtonDiv>

  {ChosenHeadWear?.map((item, i) => (
    <ClothItem
      key={i}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <p>{item.name}</p>
      <ClothItemButtonDiv $clothItemHovered={hoveredIndex === i}>
        <ClothItemPlusButton
          onClick={() => increaseHeadWear(i, ChosenHeadWear, setChosenHeadWear,setOptionsChosen)}
        >+</ClothItemPlusButton>
        <ClothItemMinusButton
          onClick={() => decreaseHeadWear(i, ChosenHeadWear, setChosenHeadWear, deleteHeadWear,setOptionsChosen)}
        >-</ClothItemMinusButton>
        <ClothItemDeleteButton
          onClick={() => deleteHeadWear(i, ChosenHeadWear, setChosenHeadWear,setOptionsChosen)}
        >D</ClothItemDeleteButton>
      </ClothItemButtonDiv>
      <ClothCounter>
        <p>{item.amount}</p>
      </ClothCounter>
    </ClothItem>
  ))}
</ClothContentDiv>
    </div>
  )
}
function BodyWearListing({
  IsBodyWearTableActive,
  setBodyWearTableActive,
  ChosenBodyWear,
  setChosenBodyWear,
  increaseBodyWear,
  decreaseBodyWear,
  deleteBodyWear,
  BodyWear,
  hoveredIndex,
  setHoveredIndex,
  setOptionsChosen
}) {
  return (
    <div>
<ClothHeaderDiv>
  <h2>Bodywear</h2>
</ClothHeaderDiv>

<BodyWearContainer>
  <BodyWearSearchInput
    placeholder="Search bodywear..."
    $IsBodyWearTableActive={IsBodyWearTableActive}
  />
  <BodyWearTable $IsBodyWearTableActive={IsBodyWearTableActive}>
    {BodyWear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addBodyWearFromSearch(i, BodyWear, ChosenBodyWear, setChosenBodyWear,setOptionsChosen)}
      >
        <p>{item.label}</p>
      </SearchListItem>
    ))}
  </BodyWearTable>
</BodyWearContainer>

<ClothContentDiv>
  <AddMoreButtonDiv>
    <Logo
      src="/icons/pluscircle.svg"
      alt="Plus circle symbol"
      onClick={() => setBodyWearTableActive(prev => !prev)}
    />
  </AddMoreButtonDiv>
  {ChosenBodyWear?.map((item, i) => (
    <ClothItem
      key={i}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <p>{item.name}</p>
      <ClothItemButtonDiv $clothItemHovered={hoveredIndex === i}>
        <ClothItemPlusButton
          onClick={() => increaseBodyWear(i, ChosenBodyWear, setChosenBodyWear,setOptionsChosen)}
        >+</ClothItemPlusButton>
        <ClothItemMinusButton
          onClick={() => decreaseBodyWear(i, ChosenBodyWear, setChosenBodyWear, deleteBodyWear,setOptionsChosen)}
        >-</ClothItemMinusButton>
        <ClothItemDeleteButton
          onClick={() => deleteBodyWear(i, ChosenBodyWear, setChosenBodyWear,setOptionsChosen)}
        >D</ClothItemDeleteButton>
      </ClothItemButtonDiv>
      <ClothCounter>
        <p>{item.amount}</p>
      </ClothCounter>
    </ClothItem>
  ))}
</ClothContentDiv>

    </div>
  )
}
function HandWearListing({
  IsHandWearTableActive,
  setHandWearTableActive,
  ChosenHandWear,
  setChosenHandWear,
  increaseHandWear,
  decreaseHandWear,
  deleteHandWear,
  HandWear,
  hoveredIndex,
  setHoveredIndex,
  setOptionsChosen
}) {
  return (
    <div>
      {/* 🖐 HANDWEAR */}
<ClothHeaderDiv>
  <h2>Handwear</h2>
</ClothHeaderDiv>

<HandWearContainer>
  <HandWearSearchInput
    placeholder="Search handwear..."
    $IsHandWearTableActive={IsHandWearTableActive}
  />
  <HandWearTable $IsHandWearTableActive={IsHandWearTableActive}>
    {HandWear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addHandWearFromSearch(i, HandWear, ChosenHandWear, setChosenHandWear,setOptionsChosen)}
      >
        <p>{item.label}</p>
      </SearchListItem>
    ))}
  </HandWearTable>
</HandWearContainer>

<ClothContentDiv>
  <AddMoreButtonDiv>
    <Logo
      src="/icons/pluscircle.svg"
      alt="Plus circle symbol"
      onClick={() => setHandWearTableActive(prev => !prev)}
    />
  </AddMoreButtonDiv>
  {ChosenHandWear?.map((item, i) => (
    <ClothItem
      key={i}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <p>{item.name}</p>
      <ClothItemButtonDiv $clothItemHovered={hoveredIndex === i}>
        <ClothItemPlusButton
          onClick={() => increaseHandWear(i, ChosenHandWear, setChosenHandWear,setOptionsChosen)}
        >+</ClothItemPlusButton>
        <ClothItemMinusButton
          onClick={() => decreaseHandWear(i, ChosenHandWear, setChosenHandWear, deleteHandWear,setOptionsChosen)}
        >-</ClothItemMinusButton>
        <ClothItemDeleteButton
          onClick={() => deleteHandWear(i, ChosenHandWear, setChosenHandWear,setOptionsChosen)}
        >D</ClothItemDeleteButton>
      </ClothItemButtonDiv>
      <ClothCounter>
        <p>{item.amount}</p>
      </ClothCounter>
    </ClothItem>
  ))}
</ClothContentDiv>

    </div>
  )
}
function LegWearListing({ 
  IsLegWearTableActive,
  setLegWearTableActive,
  ChosenLegWear,
  setChosenLegWear,
  increaseLegWear,
  decreaseLegWear,
  deleteLegWear,
  LegWear,
  hoveredIndex,
  setHoveredIndex,
  setOptionsChosen}){
  return (
    <div>
<ClothHeaderDiv>
  <h2>Legwear</h2>
</ClothHeaderDiv>

<LegWearContainer>
  <LegWearSearchInput
    placeholder="Search legwear..."
    $IsLegWearTableActive={IsLegWearTableActive}
  />
  <LegWearTable $IsLegWearTableActive={IsLegWearTableActive}>
    {LegWear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addLegWearFromSearch(i, LegWear, ChosenLegWear, setChosenLegWear,setOptionsChosen)}
      >
        <p>{item.label}</p>
      </SearchListItem>
    ))}
  </LegWearTable>
</LegWearContainer>

<ClothContentDiv>
  <AddMoreButtonDiv>
    <Logo
      src="/icons/pluscircle.svg"
      alt="Plus circle symbol"
      onClick={() => setLegWearTableActive(prev => !prev)}
    />
  </AddMoreButtonDiv>
  {ChosenLegWear?.map((item, i) => (
    <ClothItem
      key={i}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <p>{item.name}</p>
      <ClothItemButtonDiv $clothItemHovered={hoveredIndex === i}>
        <ClothItemPlusButton
          onClick={() => increaseLegWear(i, ChosenLegWear, setChosenLegWear,setOptionsChosen)}
        >+</ClothItemPlusButton>
        <ClothItemMinusButton
          onClick={() => decreaseLegWear(i, ChosenLegWear, setChosenLegWear, deleteLegWear,setOptionsChosen)}
        >-</ClothItemMinusButton>
        <ClothItemDeleteButton
          onClick={() => deleteLegWear(i, ChosenLegWear, setChosenLegWear,setOptionsChosen)}
        >D</ClothItemDeleteButton>
      </ClothItemButtonDiv>
      <ClothCounter>
        <p>{item.amount}</p>
      </ClothCounter>
    </ClothItem>
  ))}
</ClothContentDiv> 
    </div>
  )
}
function FootWearListing({
  IsFootWearTableActive,
  setFootWearTableActive,
  ChosenFootWear,
  setChosenFootWear,
  increaseFootWear,
  decreaseFootWear,
  deleteFootWear,
  FootWear,
  hoveredIndex,
  setHoveredIndex,
  setOptionsChosen
}) {
  return (
    <div>
<ClothHeaderDiv>
  <h2>Footwear</h2>
</ClothHeaderDiv>

<FootWearContainer>
  <FootWearSearchInput
    placeholder="Search footwear..."
    $IsFootWearTableActive={IsFootWearTableActive}
  />
  <FootWearTable $IsFootWearTableActive={IsFootWearTableActive}>
    {FootWear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addFootWearFromSearch(i, FootWear, ChosenFootWear, setChosenFootWear,setOptionsChosen)}
      >
        <p>{item.label}</p>
      </SearchListItem>
    ))}
  </FootWearTable>
</FootWearContainer>

<ClothContentDiv>
  <AddMoreButtonDiv>
    <Logo
      src="/icons/pluscircle.svg"
      alt="Plus circle symbol"
      onClick={() => setFootWearTableActive(prev => !prev)}
    />
  </AddMoreButtonDiv>
  {ChosenFootWear?.map((item, i) => (
    <ClothItem
      key={i}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <p>{item.name}</p>
      <ClothItemButtonDiv $clothItemHovered={hoveredIndex === i}>
        <ClothItemPlusButton
          onClick={() => increaseFootWear(i, ChosenFootWear, setChosenFootWear,setOptionsChosen)}
        >+</ClothItemPlusButton>
        <ClothItemMinusButton
          onClick={() => decreaseFootWear(i, ChosenFootWear, setChosenFootWear, deleteFootWear,setOptionsChosen)}
        >-</ClothItemMinusButton>
        <ClothItemDeleteButton
          onClick={() => deleteFootWear(i, ChosenFootWear, setChosenFootWear,setOptionsChosen)}
        >D</ClothItemDeleteButton>
      </ClothItemButtonDiv>
      <ClothCounter>
        <p>{item.amount}</p>
      </ClothCounter>
    </ClothItem>
  ))}
</ClothContentDiv>
</div>
  );
}

//EditList function
function EditList() {
// Array of which the items are saved for PUT request
const [optionsChosen, setOptionsChosen] = useState({
listName:"",
destinationName:"",
types:[],
purposes:[],
vehicles:[],
weather:[],
temperature:""
})
//
//
const [userList,setUserList]=useState(null);
const location = useLocation();
const { id } = location.state || {};

 //Brings data of the list from backend
 useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/list/${id}`);
        // optionsChosen is given the data
        setUserList(response.data.data);
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    };
    fetchItem();
  }, [id]);
// Place data from item to optionsChosen
useEffect(() => {
  if (userList) {
    setOptionsChosen({
      listName: userList.list_name,
      destinationName: userList.place_name,
      types: userList.place_type,
      purposes: userList.purpose,
      vehicles: userList.vehicle,
      weather: userList.weather,
      temperature: userList.temperature,
      headwear: userList.headwear,
      bodywear: userList.bodywear,
      handwear: userList.handwear,
      legwear: userList.legwear,
      footwear: userList.footwear,
      accessory: userList.accessory
    });
  }
}, [userList]);

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
// With Source, can call different objects easily
const Source = getSource();
const DestinationTypes=Source.DestinationTypes;
const DestinationPurposes=Source.DestinationPurpose;
const Vehicles=Source.Vehicles;
const Weather=Source.WeatherConditions;

const WearList = ClothAccessoryList();
const HeadWear = WearList.HeadWear;
const BodyWear = WearList.BodyWear;
const HandWear = WearList.HandWear;
const LegWear = WearList.LegWear;
const FootWear = WearList.FootWear;

//UseState for multi-pickable items
const [ActiveListName,setActiveListName]=useState({})
const [ActiveDestinationName,setActiveDestinationName]=useState({})
const [ActiveTypeBoxes,setActiveTypeBoxes]=useState({})
const [ActivePurposeBoxes,setActivePurposeBoxes]=useState({})
const [ActiveVehicleBoxes,setActiveVehicleBoxes]=useState({})
const [ActiveWeatherBoxes,setActiveWeatherBoxes]=useState({})

// UseState for different Wear Search Tables
const [IsHeadWearTableActive, setHeadWearTableActive] = useState(true);
const [IsBodyWearTableActive, setBodyWearTableActive] = useState(true);
const [IsHandWearTableActive, setHandWearTableActive] = useState(true);
const [IsLegWearTableActive, setLegWearTableActive] = useState(true);
const [IsFootWearTableActive, setFootWearTableActive] = useState(true);

// UseState for user chosen wear
const [ChosenHeadWear, setChosenHeadWear] = useState([]);
const [ChosenBodyWear, setChosenBodyWear] = useState([]);
const [ChosenHandWear, setChosenHandWear] = useState([]);
const [ChosenLegWear, setChosenLegWear] = useState([]);
const [ChosenFootWear, setChosenFootWear] = useState([]);

const [hoveredIndex, setHoveredIndex] = useState();

// Boxes that are already selected and saved in the list
const initialActiveBoxes = {};
const initialPurposeBoxes={};
const initialVehicleBoxes={};
const initialWeatherBoxes={};

useEffect(() => {
  if (userList) {
    DestinationTypes.forEach((i, index) => {
      if (userList.place_type.includes(i.value)) {
        initialActiveBoxes[index] = true;
      }
    });
        DestinationPurposes.forEach((i, index) => {
      if (userList.purpose.includes(i.value)) {
        initialPurposeBoxes[index] = true;
      }
    });
    Vehicles.forEach((i, index) => {
      if (userList.vehicle.includes(i.value)) {
        initialVehicleBoxes[index] = true;
      }
    });
        Weather.forEach((i, index) => {
      if (userList.weather.includes(i.value)) {
        initialWeatherBoxes[index] = true;
      }
    });

    setActiveListName(userList.list_name);
    setActiveDestinationName(userList.place_name);
    setActiveTypeBoxes(initialActiveBoxes);
    setActivePurposeBoxes(initialPurposeBoxes);
    setActiveVehicleBoxes(initialVehicleBoxes);
    setChosenHeadWear(userList.headwear)
    setChosenBodyWear(userList.bodywear)
    setChosenHandWear(userList.handwear)
    setChosenLegWear(userList.legwear)
    setChosenFootWear(userList.footwear)
  }
}, [userList]);

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
        types: prev.types.filter(userList => userList !== value)
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
        purposes: prev.purposes.filter(userList => userList !== value)
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
        vehicles: prev.vehicles.filter(userList => userList !== value)
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
        weather: prev.weather.filter(userList => userList !== value)
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
    <MapApiDiv/>
    <TopListSectionGrid>
    <TopListContentDiv1>
    <MyListHeader><header>List name</header>
    <textarea
  onChange={(e) => {
    setOptionsChosen(prev => ({ ...prev, listName: e.target.value }))
  }}
  name="destinationname" rows={4} cols={40} placeholder={ActiveListName||"List name"}>
    </textarea>
    </MyListHeader>
    <MyListHeader ><header>Destination name</header>
    <textarea
  onChange={(e) => {
    setOptionsChosen(prev => ({ ...prev, destinationName: e.target.value }))
  }}
  name="destinationname" rows={4} cols={40} placeholder={ActiveDestinationName||"destination"}>
    </textarea></MyListHeader>
    <MyListHeader><header>Destination type</header>
    <MultiItemDiv>
      {DestinationTypes.map((userList, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActiveTypeBoxes[i]}
          onClick={() => toggleDestinationTypeBox(i)
          }
        >
          {userList.symbol}
        </MultiItem>
      ))}
    </MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>Purpose</header>
    <MultiItemDiv>
          {DestinationPurposes.map((userList, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActivePurposeBoxes[i]}
          onClick={() => toggleDestinationPurposeBox(i)
          }
        >
          {userList.symbol}
        </MultiItem>
      ))}
    </MultiItemDiv>
    </MyListHeader> 
    </TopListContentDiv1>
    <TopListContentDiv2>
        <MyListHeader><header>Vehicle</header>
    <MultiItemDiv>
        {Vehicles.map((userList, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActiveVehicleBoxes[i]}
          onClick={() => toggleVehicleBox(i)
          }
        >
          {userList.symbol}
        </MultiItem>
      ))}  
    </MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>Weather</header>
        <MultiItemDiv>
            {Weather.map((userList, i) => (
        <MultiItem
          key={i}
          $isActive={!!ActiveWeatherBoxes[i]}
          onClick={() => toggleWeatherBox(i)
          }
        >
          {userList.symbol}
        </MultiItem>
      ))}  
    </MultiItemDiv>
    </MyListHeader>
    </TopListContentDiv2>
    </TopListSectionGrid>
    <BottomContentDiv>
 <HeadWearListing
    IsHeadWearTableActive={IsHeadWearTableActive}
    setHeadWearTableActive={setHeadWearTableActive}
    ChosenHeadWear={ChosenHeadWear}
    setChosenHeadWear={setChosenHeadWear}
    increaseHeadWear={increaseHeadWear}
    decreaseHeadWear={decreaseHeadWear}
    deleteHeadWear={deleteHeadWear}
    HeadWear={HeadWear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    optionsChosen={optionsChosen}
    setOptionsChosen={setOptionsChosen}
  />

  <BodyWearListing
    IsBodyWearTableActive={IsBodyWearTableActive}
    setBodyWearTableActive={setBodyWearTableActive}
    ChosenBodyWear={ChosenBodyWear}
    setChosenBodyWear={setChosenBodyWear}
    increaseBodyWear={increaseBodyWear}
    decreaseBodyWear={decreaseBodyWear}
    deleteBodyWear={deleteBodyWear}
    BodyWear={BodyWear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
  />

  <HandWearListing
    IsHandWearTableActive={IsHandWearTableActive}
    setHandWearTableActive={setHandWearTableActive}
    ChosenHandWear={ChosenHandWear}
    setChosenHandWear={setChosenHandWear}
    increaseHandWear={increaseHandWear}
    decreaseHandWear={decreaseHandWear}
    deleteHandWear={deleteHandWear}
    HandWear={HandWear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
  />

  <LegWearListing
    IsLegWearTableActive={IsLegWearTableActive}
    setLegWearTableActive={setLegWearTableActive}
    ChosenLegWear={ChosenLegWear}
    setChosenLegWear={setChosenLegWear}
    increaseLegWear={increaseLegWear}
    decreaseLegWear={decreaseLegWear}
    deleteLegWear={deleteLegWear}
    LegWear={LegWear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
  />

  <FootWearListing
    IsFootWearTableActive={IsFootWearTableActive}
    setFootWearTableActive={setFootWearTableActive}
    ChosenFootWear={ChosenFootWear}
    setChosenFootWear={setChosenFootWear}
    increaseFootWear={increaseFootWear}
    decreaseFootWear={decreaseFootWear}
    deleteFootWear={deleteFootWear}
    FootWear={FootWear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
      />
    </BottomContentDiv>
    </NewListDiv>
    </div>
    </>
)
}

export default EditList;