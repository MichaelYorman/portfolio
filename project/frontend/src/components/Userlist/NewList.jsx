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
} from "./NewListStyle";
import { ClothAccessoryList } from "./ListItems";
import {
  addItemFromSearch,
  increaseItemAmount,
  decreaseItemAmount,
  deleteSingleItem,
} from './ListFunctions';
import {
  getSource
} from "./Source"

const api=axios.create({
     baseURL: "http://localhost:3000/api",
})
//Listing functions
function WearListing({
  wearState,
  increaseItemAmount,
  decreaseItemAmount,
  deleteSingleItem,
  CurrentSearchCategoryTitle,
  hoveredIndex,
  setHoveredIndex,
  setMyStyle
}) {
  return (
<>
    <ClothHeaderDiv>
      <h2>Anywear</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
      {wearState[CurrentSearchCategoryTitle]?.chosenItems?.map((item, i) => (
        <ClothItem
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p>{item.name}</p>
          <ClothItemButtonDiv $clothItemHovered={hoveredIndex === i}>
            <ClothItemPlusButton
              onClick={() => increaseItemAmount(i, wearState,setWearState,setMyStyle)}
            >+</ClothItemPlusButton>
            <ClothItemMinusButton
              onClick={() => decreaseItemAmount(i, wearState, setWearState, deleteSingleItem,setMyStyle)}
            >-</ClothItemMinusButton>
            <ClothItemDeleteButton
              onClick={() => deleteSingleItem(i, wearState, setCWearState,setMyStyle)}
            >D</ClothItemDeleteButton>
          </ClothItemButtonDiv>
          <ClothCounter>
            <p>{item.amount}</p>
          </ClothCounter>
        </ClothItem>
      ))}
    </ClothContentDiv>
</>
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
const [SearchWindowsOpen,setSearchWindowOpen]=useState(false)

const toggleCategory = (category) => {
  const AnotherWindowIsOpen =Object.entries(wearState)
  .some(([key, value]) => key !== category && value.searchActive);
  //if other window is open, replace them (they become false)
  if(AnotherWindowIsOpen) {
      setSearchWindowOpen((prev) =>
    prev.map((item)=>
    item===category
  ? {...item,searchActive:!searchActive}
  : {...item,searchActive:false}
));
setCurrentSearchCategoryTitle(category);
  } else {
  //if no other windows are active
  setSearchWindowOpen((prev) =>
    prev.map((item)=>
    item===category
  ? {...item,searchActive:!item.searchActive}:item));
  setCurrentSearchCategoryTitle(category)
}
const isActive=SearchWindowsActive.some(i=>i.searchActive===true)
setSearchWindowOpen(isActive)
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
        <WearListing
    wearState={wearState}
    increaseItemAmount={increaseItemAmount}
    decreaseItemAmount={decreaseItemAmount}
    deleteSingleItem={deleteSingleItem}
    hoveredIndex={hoveredIndex}
    setHoveredIndex={setHoveredIndex}
    myStyle={myStyle}
    setMyStyle={setMyStyle}
  ></WearListing>
      <SearchBarWindow $searchWindowsOpen={SearchWindowsOpen}>
                <SearchBarWindowInput
                name="destinationname"
                placeholder={`Type something to start searching ${CurrentSearchCategoryTitle.toLowerCase()}...`}
              ></SearchBarWindowInput>
              <SearchBarWindowItemScreen>
      {headwear?.map((item, i) => (
      <SearchListItem
        key={i}
        onClick={() => addItemFromSearch(i, wearlist, wearState, setWearState,setMyStyle,CurrentSearchCategoryTitle)}
      >
        <p>{item.label}</p>
      </SearchListItem>
    ))}
      </SearchBarWindowItemScreen>
      </SearchBarWindow>
      </StyleButtonDiv>
      </StyleCreatorDiv>
        <Test onClick={handlePost}></Test>
          <TopListContentDiv>
            <MyListHeader>
              <header>Name of your style</header>
              <textarea
                onChange={(e) => {
                  console.log(e.target.value);
                  setMyStyle(prev => ({ ...prev, styleName: e.target.value }))
                }}
                name="stylename"
                rows={4}
                cols={40}
                placeholder="Type your style name here..."
              ></textarea>
            </MyListHeader>

            <MyListHeader>
              <header>Describe your style</header>
              <textarea
                onChange={(e) => {
                  console.log(e.target.value);
                  setOptionsChosen(prev => ({ ...prev, styleDescription: e.target.value }))
                }}
                name="styledescription"
                rows={4}
                cols={40}
                placeholder="Type your style description here..."
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