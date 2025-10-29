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
import { ClothAccessoryList } from "./ListItems";
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
} from './NewListFunctions';
const api=axios.create({
     baseURL: "http://localhost:3000/api",
})

const getSource = () => ({
  DestinationTypes: [
    { value: 'forest', label: 'forest', symbol: '🌲' },
    { value: 'mountain', label: 'mountain', symbol: '🏔️' },
    { value: 'beach', label: 'beach', symbol: '🏖️' },
    { value: 'desert', label: 'desert', symbol: '🏜️' },
    { value: 'cave', label: 'cave', symbol: '🪨' },
    { value: 'bodyofwater', label: 'body of water', symbol: '🌊' },
    { value: 'residentialarea', label: 'residential area', symbol: '🏙️' },
    { value: 'countryside', label: 'countryside', symbol: '🌽🚜🐑' }
  ],

  DestinationPurpose: [
    { value: 'hangingout', label: 'hanging out', symbol: '😎☕' },
    { value: 'vacation', label: 'vacation', symbol: '🏖️' },
    { value: 'swimming', label: 'swimming', symbol: '🏊‍♂️' },
    { value: 'sightseeing', label: 'sightseeing', symbol: '🗽' },
    { value: 'photography', label: 'photography', symbol: '📸' },
    { value: 'stargazing', label: 'stargazing', symbol: '🔭🌕' },
    { value: 'camping', label: 'camping', symbol: '🏕️' },
    { value: 'climbing', label: 'climbing', symbol: '🧗‍♂️' },
    { value: 'wildlifewatching', label: 'wildlife watching', symbol: '🔭🦉' },
    { value: 'fishing', label: 'fishing', symbol: '🎣' },
    { value: 'foraging', label: 'foraging', symbol: '🍄🫐' },
    { value: 'picnic', label: 'picnic', symbol: '🧺🥪' }
  ],

  Vehicles: [
    { value: 'foot', label: 'on foot', symbol: '🚶' },
    { value: 'bike', label: 'bike', symbol: '🚲' },
    { value: 'car', label: 'car', symbol: '🚗' },
    { value: 'publictransportation', label: 'public transportation', symbol: '🚌' },
    { value: 'motorbike', label: 'motorbike', symbol: '🏍️' },
    { value: 'airplane', label: 'airplane', symbol: '✈️' },
    { value: 'watervehicle', label: 'water vehicle', symbol: '⛵' },
    { value: 'skateboard', label: 'skateboard', symbol: '🛹' },
    { value: 'scooter', label: 'scooter', symbol: '🛴' },
    { value: 'rollerblades', label: 'rollerblades', symbol: '🛼' },
    { value: 'personalelectricvehicle', label: 'personal electric vehicle', symbol: '⚡🛴🛹🚲' }
  ],

  WeatherConditions: [
    { value: 'clear', label: 'clear', symbol: '☀️' },
    { value: 'raining', label: 'raining', symbol: '🌧️' },
    { value: 'lowvisibility', label: 'low visibility', symbol: '👁🚫' },
    { value: 'sandstorm', label: 'sandstorm', symbol: '💨🏜️' },
    { value: 'fog', label: 'fog', symbol: '🌫️' }
  ],

  Temperature: [
    { value: 'scorching', label: 'scorching 🔥💀' },
    { value: 'hot', label: 'hot 🔥' },
    { value: 'warm', label: 'warm ☀️' },
    { value: 'temperate', label: 'temperate 🌳' },
    { value: 'cool', label: 'cool ☀️⚖️❄️' },
    { value: 'chilly', label: 'chilly ❄️' },
    { value: 'cold', label: 'cold 🥶' },
    { value: 'verycold', label: 'very cold 🧊' },
    { value: 'freezing', label: 'freezing 🧊💀' }
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

//Main function
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

// With Source, get the information of clickable boxes
const Source = getSource();
const DestinationTypes = Source.DestinationTypes;
const DestinationPurposes = Source.DestinationPurpose;
const Vehicles = Source.Vehicles;
const Weather = Source.WeatherConditions;

// With WearList, get the information of clothing items
const WearList = ClothAccessoryList();
const HeadWear = WearList.HeadWear;
const BodyWear = WearList.BodyWear;
const HandWear = WearList.HandWear;
const LegWear = WearList.LegWear;
const FootWear = WearList.FootWear;

// UseState for multipickable items
const [ActiveTypeBoxes, setActiveTypeBoxes] = useState({});
const [ActivePurposeBoxes, setActivePurposeBoxes] = useState({});
const [ActiveVehicleBoxes, setActiveVehicleBoxes] = useState({});
const [ActiveWeatherBoxes, setActiveWeatherBoxes] = useState({});

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
const toggleDestinationPurposeBox = (index) => {
  const value = DestinationPurposes[index].value; // get purposes
  setActivePurposeBoxes(prev => ({
    ...prev,
    [index]: !prev[index]
  }));

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
const toggleVehicleBox = (index) => {
  const value = Vehicles[index].value; // get vehicles
  setActiveVehicleBoxes(prev => ({
    ...prev,
    [index]: !prev[index]
  }));

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
const toggleWeatherBox = (index) => {
  const value = Weather[index].value; // get weather conditions
  setActiveWeatherBoxes(prev => ({
    ...prev,
    [index]: !prev[index]
  }));

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
console.log('typeof setOptionsChosen:', typeof setOptionsChosen);
return (
  <>
    <div>
      <NewListDiv>
        <Test onClick={handlePost}></Test>
        <MapApiDiv/>
        <TopListSectionGrid>
          <TopListContentDiv1>
            <MyListHeader>
              <header>List name</header>
              <textarea
                onChange={(e) => {
                  console.log(e.target.value);
                  setOptionsChosen(prev => ({ ...prev, listName: e.target.value }))
                }}
                name="destinationname"
                rows={4}
                cols={40}
                placeholder="Type your list name here..."
              ></textarea>
            </MyListHeader>

            <MyListHeader>
              <header>Destination name</header>
              <textarea
                onChange={(e) => {
                  console.log(e.target.value);
                  setOptionsChosen(prev => ({ ...prev, destinationName: e.target.value }))
                }}
                name="destinationname"
                rows={4}
                cols={40}
                placeholder="Type your destination name here..."
              ></textarea>
            </MyListHeader>

            <MyListHeader>
              <header>Destination type</header>
              <N onClick={clickMe}/>
              <MultiItemDiv>
                {DestinationTypes.map((item, i) => (
                  <MultiItem
                    key={i}
                    $isActive={!!ActiveTypeBoxes[i]}
                    onClick={() => toggleDestinationTypeBox(i)}
                  >
                    {item.symbol}
                  </MultiItem>
                ))}
              </MultiItemDiv>
            </MyListHeader>

            <MyListHeader>
              <header>Destination purpose</header>
              <MultiItemDiv>
                {DestinationPurposes.map((item, i) => (
                  <MultiItem
                    key={i}
                    $isActive={!!ActivePurposeBoxes[i]}
                    onClick={() => toggleDestinationPurposeBox(i)}
                  >
                    {item.symbol}
                  </MultiItem>
                ))}
              </MultiItemDiv>
            </MyListHeader>
          </TopListContentDiv1>

          <TopListContentDiv2>
            <MyListHeader>
              <header>Destination vehicle</header>
              <MultiItemDiv>
                {Vehicles.map((item, i) => (
                  <MultiItem
                    key={i}
                    $isActive={!!ActiveVehicleBoxes[i]}
                    onClick={() => toggleVehicleBox(i)}
                  >
                    {item.symbol}
                  </MultiItem>
                ))}
              </MultiItemDiv>
            </MyListHeader>

            <MyListHeader>
              <header>Weather Conditions</header>
              <MultiItemDiv>
                {Weather.map((item, i) => (
                  <MultiItem
                    key={i}
                    $isActive={!!ActiveWeatherBoxes[i]}
                    onClick={() => toggleWeatherBox(i)}
                  >
                    {item.symbol}
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
);
}

export default NewList;