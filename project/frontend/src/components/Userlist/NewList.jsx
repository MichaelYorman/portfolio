import { useState } from "react";
import axios from "axios";
import { 
  NewListDiv,
  SearchBarWindow,
  StyleCreatorDiv,
  StyleButtonPositions,
  StyleButton,
  TopListContentDiv,
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
} from './ListFunctions';
import {
  getSource
} from "./Source"

const api=axios.create({
     baseURL: "http://localhost:3000/api",
})
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
const Situations = Source.DestinationPurpose;
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
const [ActiveSituationBoxes, setActiveSituationBoxes] = useState({});
const [ActiveVehicleBoxes, setActiveVehicleBoxes] = useState({});

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

  const [styleButtonIsClicked, setButtonClicked] = useState({
    headWear: true,
    bodyWear: true,
    handWear: true,
    legWear: true,
    footWear: true,
    accessory: true,
    equipment: true,
  });

const toggleCategory = (category) => {
  setButtonClicked((prev) => ({
    ...prev,
    [category]: !prev[category],
  }));
};


const [hoveredIndex, setHoveredIndex] = useState();

// Update chosen options from Destination Purpose Box
const toggleSituationBox = (index) => {
  const value = Situations[index].value; // get purposes
  setActiveSituationBoxes(prev => ({
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
console.log(styleButtonIsClicked)
return (
  <>
    <div>
      <NewListDiv>
      <StyleCreatorDiv>
      {StyleButtonPositions.map((pos, i) => (
        <StyleButton key={i} {...pos} onClick={()=>toggleCategory(pos.category)}>
        </StyleButton>
      ))}
      </StyleCreatorDiv>
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
        <Test onClick={handlePost}></Test>
          <TopListContentDiv>
            <MyListHeader>
              <header>Name of your style</header>
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
              <header>Describe your style</header>
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
              <header>Situations fitting your style</header>
              <N onClick={clickMe}/>
              <MultiItemDiv>
                {Situations.map((item, i) => (
                  <MultiItem
                    key={i}
                    $isActive={!!ActiveSituationBoxes[i]}
                    onClick={() => toggleSituationBox(i)}
                  >
                    {item.symbol}
                  </MultiItem>
                ))}
              </MultiItemDiv>
            </MyListHeader>

            <MyListHeader>
              <header>Vehicles fitting your style</header>
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
          </TopListContentDiv>
      </NewListDiv>
    </div>
  </>
);
}

export default NewList;