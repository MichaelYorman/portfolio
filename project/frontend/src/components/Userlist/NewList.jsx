import { useState } from "react";
import axios from "axios";
import { 
  NewListDiv,
  SearchBarWindow,
  SearchBarWindowInput,
  SearchBarWindowItemScreen,
  StyleCreatorDiv,
  StyleButtonPositions,
  StyleButton,
  StyleButtonDiv,
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
  headwear,
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
    {headwear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addHeadWearFromSearch(i, headwear, ChosenHeadWear, setChosenHeadWear,setOptionsChosen)}
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
  bodywear,
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
    {bodywear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addBodyWearFromSearch(i, bodywear, ChosenBodyWear, setChosenBodyWear,setOptionsChosen)}
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
  handwear,
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
    {handwear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addHandWearFromSearch(i, handwear, ChosenHandWear, setChosenHandWear,setOptionsChosen)}
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
  legwear,
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
    {legwear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addLegWearFromSearch(i, legwear, ChosenLegWear, setChosenLegWear,setOptionsChosen)}
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
  footwear,
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
    {footwear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addFootWearFromSearch(i, footwear, ChosenFootWear, setChosenFootWear,setOptionsChosen)}
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
styleName:"",
styleDescription:"",
styleSituations:[],
styleTags:[],
vehicles:[],
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
const Situations = Source.DestinationPurpose;
const Vehicles = Source.Vehicles;

// With WearList, get the information of clothing items
const WearList = ClothAccessoryList();
const headwear = WearList.headwear;
const bodywear = WearList.bodywear;
const handwear = WearList.handwear;
const legwear = WearList.legwear;
const footwear = WearList.footwear;

// UseState for multipickable items
const [ActiveSituationBoxes, setActiveSituationBoxes] = useState({});
const [ActiveVehicleBoxes, setActiveVehicleBoxes] = useState({});

// UseState for different Wear Search Tables
const [IsHeadWearTableActive, setHeadWearTableActive] = useState(true);
const [IsBodyWearTableActive, setBodyWearTableActive] = useState(true);
const [IsHandWearTableActive, setHandWearTableActive] = useState(true);
const [IsLegWearTableActive, setLegWearTableActive] = useState(true);
const [IsFootWearTableActive, setFootWearTableActive] = useState(true);

//UseState for SearchBarWindow Text

const [CurrentSearchCategoryTitle,setCurrentSearchCategoryTitle]=useState("");

// UseState for user chosen wear
const [ChosenHeadWear, setChosenHeadWear] = useState([]);
const [ChosenBodyWear, setChosenBodyWear] = useState([]);
const [ChosenHandWear, setChosenHandWear] = useState([]);
const [ChosenLegWear, setChosenLegWear] = useState([]);
const [ChosenFootWear, setChosenFootWear] = useState([]);

// UseState for activating specific search window by clicking the round object
const [SearchWindowsActive, setSearchWindowActive] = useState([
  { category: "headWear", active: false },
  { category: "bodyWear", active: false },
  { category: "handWear", active: false },
  { category: "legWear", active: false },
  { category: "footWear", active: false },
  { category: "accessory", active: false },
  { category: "equipment", active: false },
]);
// UseState for keeping search window display on and off
const [SearchWindowsOpen,setSearchWindowsOpen]=useState(false)

const toggleCategory = (category) => {
  const AnotherWindowIsOpen = SearchWindowsActive.some(i=>i.category!==category&&i.active===true)
  //if other categories are active, close them (they become false)
  if(AnotherWindowIsOpen) {
      setSearchWindowActive((prev) =>
    prev.map((item)=>
    item.category===category
  ? {...item,active:!item.active}
  : {...item,active:false}
));
setCurrentSearchCategoryTitle(category);
  } else {
  //if no other categories are active
  setSearchWindowActive((prev) =>
    prev.map((item)=>
    item.category===category
  ? {...item,active:!item.active}:item));
  setCurrentSearchCategoryTitle(category)
}
const isActive=SearchWindowsActive.some(i=>i.active===true)
setSearchWindowsOpen(isActive)
}

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
return (
  <>
    <div>
      <NewListDiv>
      <StyleCreatorDiv>
      <StyleButtonDiv>
      {StyleButtonPositions.map((pos, i) => (
        <StyleButton key={i} {...pos} onClick={()=>toggleCategory(pos.$category)}>
          <p>{pos.$category}</p>
        </StyleButton>
      ))}
      <SearchBarWindow $searchWindowsOpen={SearchWindowsOpen}>
                <SearchBarWindowInput
                name="destinationname"
                placeholder={`Type something to start searching ${CurrentSearchCategoryTitle.toLowerCase()}...`}
              ></SearchBarWindowInput>
              <SearchBarWindowItemScreen>
      {headwear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addHeadWearFromSearch(i, headwear, ChosenHeadWear, setChosenHeadWear,setOptionsChosen)}
      >
        <p>{item.label}</p>
      </SearchListItem>
    ))}
      </SearchBarWindowItemScreen>
      </SearchBarWindow>
      </StyleButtonDiv>
      </StyleCreatorDiv>
  <HeadWearListing
    IsHeadWearTableActive={IsHeadWearTableActive}
    setHeadWearTableActive={setHeadWearTableActive}
    ChosenHeadWear={ChosenHeadWear}
    setChosenHeadWear={setChosenHeadWear}
    increaseHeadWear={increaseHeadWear}
    decreaseHeadWear={decreaseHeadWear}
    deleteHeadWear={deleteHeadWear}
    headwear={headwear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    optionsChosen={optionsChosen}
    setOptionsChosen={setOptionsChosen}
  ></HeadWearListing>

  <BodyWearListing
    IsBodyWearTableActive={IsBodyWearTableActive}
    setBodyWearTableActive={setBodyWearTableActive}
    ChosenBodyWear={ChosenBodyWear}
    setChosenBodyWear={setChosenBodyWear}
    increaseBodyWear={increaseBodyWear}
    decreaseBodyWear={decreaseBodyWear}
    deleteBodyWear={deleteBodyWear}
    bodywear={bodywear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
  ></BodyWearListing>

  <HandWearListing
    IsHandWearTableActive={IsHandWearTableActive}
    setHandWearTableActive={setHandWearTableActive}
    ChosenHandWear={ChosenHandWear}
    setChosenHandWear={setChosenHandWear}
    increaseHandWear={increaseHandWear}
    decreaseHandWear={decreaseHandWear}
    deleteHandWear={deleteHandWear}
    handwear={handwear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
  ></HandWearListing>

  <LegWearListing
    IsLegWearTableActive={IsLegWearTableActive}
    setLegWearTableActive={setLegWearTableActive}
    ChosenLegWear={ChosenLegWear}
    setChosenLegWear={setChosenLegWear}
    increaseLegWear={increaseLegWear}
    decreaseLegWear={decreaseLegWear}
    deleteLegWear={deleteLegWear}
    legwear={legwear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
  ></LegWearListing>

  <FootWearListing
    IsFootWearTableActive={IsFootWearTableActive}
    setFootWearTableActive={setFootWearTableActive}
    ChosenFootWear={ChosenFootWear}
    setChosenFootWear={setChosenFootWear}
    increaseFootWear={increaseFootWear}
    decreaseFootWear={decreaseFootWear}
    deleteFootWear={deleteFootWear}
    footwear={footwear}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    setOptionsChosen={setOptionsChosen}
  ></FootWearListing>
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