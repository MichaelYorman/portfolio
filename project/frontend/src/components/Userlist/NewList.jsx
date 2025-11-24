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
  HeadWearSearchInput,
  HeadWearContainer,
} from "./NewListStyle";
import { ClothAccessoryList } from "./ListItems";
import {
  addHeadWearFromSearch,
  increaseHeadWear,
  decreaseHeadWear,
  deleteHeadWear,
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

//Main function
function NewList() {
// myStyle useState which will be send to server
const [myStyle, setMyStyle] = useState({
styleName:"",
styleDescription:"",
styleSituations:[],
styleTags:[],
headwear:[],
bodywear:[],
handwear:[],
legwear:[],
footwear:[],
accessory:[],
equipment:[],
vehicles:[],
})

// wearState useState which of items are saved temporarily
const [wearState, setWearState] = useState({
  headwear: { searchActive: false, chosenItems: []},
  bodywear: { searchActive: false, chosenItems: []},
  handwear: { searchActive: false, chosenItems: []},
  legwear:  { searchActive: false, chosenItems: []},
  footwear: { searchActive: false, chosenItems: []},
  accessory: { searchActive: false, chosenItems: []},
  equipment: { searchActive: false, chosenItems: []},
  vehicles: { searchActive: false, chosenItems: []},
});

// Handles POST request to server
const handlePost=async()=>{
try {
const payload={data:myStyle};
const res= await api.post("/test",payload);
setMessage(res.data.message+" | You sent: "+JSON.stringify(res.data.received));
} catch(err) {
  console.error(err);
}
};
//

function clickMe() {
  console.log(myStyle)
}

// With Source, get the information of clickable boxes
const Source = getSource();
const Situations = Source.Situations;
const Vehicles = Source.Vehicles;

// With wearlist, get the information of clothing items
const wearlist = ClothAccessoryList();
const headwear = wearlist.headwear;
const bodywear = wearlist.bodywear;
const handwear = wearlist.handwear;
const legwear = wearlist.legwear;
const footwear = wearlist.footwear;

// UseState for multipickable items
const [ActiveSituationBoxes, setActiveSituationBoxes] = useState({});
const [ActiveVehicleBoxes, setActiveVehicleBoxes] = useState({});

//UseState for SearchBarWindow Text
const [CurrentSearchCategoryTitle,setCurrentSearchCategoryTitle]=useState("");

// UseState for keeping search window display on and off
const [SearchWindowsOpen,setSearchWindowsOpen]=useState(false)

const toggleCategory = (category) => {
  const AnotherWindowIsOpen = wearState.some(i=>i!==category&&i.searchActive===true)
  //if other categories are active, close them (they become false)
  if(AnotherWindowIsOpen) {
      setSearchWindowActive((prev) =>
    prev.map((item)=>
    item===category
  ? {...item,searchActive:!searchActive}
  : {...item,active:false}
));
setCurrentSearchCategoryTitle(category);
  } else {
  //if no other categories are active
  setSearchWindowActive((prev) =>
    prev.map((item)=>
    item===category
  ? {...item,searchActive:!item.searchActive}:item));
  setCurrentSearchCategoryTitle(category)
}
const isActive=SearchWindowsActive.some(i=>i.searchActive===true)
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
  setMyStyle(prev => {
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
  setMyStyle(prev => {
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
console.log(CurrentSearchCategoryTitle)
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
        onClick={() => addHeadWearFromSearch(i, headwear, ChosenHeadWear, setChosenHeadWear,setMyStyle)}
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
    myStyle={myStyle}
    setMyStyle={setMyStyle}
  ></HeadWearListing>
        <Test onClick={handlePost}></Test>
          <TopListContentDiv>
            <MyListHeader>
              <header>Name of your style</header>
              <textarea
                onChange={(e) => {
                  console.log(e.target.value);
                  setMyStyle(prev => ({ ...prev, listName: e.target.value }))
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