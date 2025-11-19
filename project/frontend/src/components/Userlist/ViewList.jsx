import styled from "styled-components";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ClothAccessoryList } from "./ListItems";

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
grid-template-columns:1fr;
gird-template-rows:1fr;
`
const OverViewSettingsDiv1=styled.div`
display:flex;
flex-direction:column;
gap:20px;
margin-top:50px;
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
const MyListHeader=styled.header`
display:flex;
flex-direction:column;
width:fit-content;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
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
background-color:whitesmoke;
outline-style:solid;
outline-width:2px;
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
//NewList function
function ViewList() {
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

const location = useLocation();
const { id } = location.state || {};

//This is the state we save the users list
const [userList,setUserList]=useState(null);

 useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/list/${id}`);
        setUserList(response.data.data);
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    };
    fetchItem();
  }, [id]);

// With Source, can take hold of different values with ease
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

return (
    <>
    <div>
    <NewListDiv>
    <MapDiv/>
    <UpperListSection>
    <OverViewSettingsDiv1>
    <MyListHeader><header>List name</header>
    <p>{userList?.list_name}</p>
    </MyListHeader>
    <MyListHeader ><header>Destination name</header>
    <p>{userList?.place_name}</p>
    </MyListHeader>
    <MyListHeader><header>Destination type</header>
<MultiItemDiv>
  {userList?.place_type.map((typeValue, i) => {
    const typeObj = DestinationTypes.find(dt => dt.value === typeValue);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.symbol : "❓"}
      </MultiItem>
    );
  })}
</MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>Purpose</header>
<MultiItemDiv>
  {userList?.purpose.map((typeValue, i) => {
    const typeObj = DestinationPurposes.find(dt => dt.value === typeValue);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.symbol : "❓"}
      </MultiItem>
    );
  })}
</MultiItemDiv>
    </MyListHeader> 
        <MyListHeader><header>Vehicle</header>
  <MultiItemDiv>
  {userList?.vehicle.map((typeValue, i) => {
    const typeObj = Vehicles.find(dt => dt.value === typeValue);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.symbol : "❓"}
      </MultiItem>
    );
  })}
</MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>Weather</header>
  <MultiItemDiv>
  {userList?.weather.map((typeValue, i) => {
    const typeObj = Weather.find(dt => dt.value === typeValue);
    console.log("TypeObj weather",typeObj)
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.symbol : "❓"}
      </MultiItem>
    );
  })}
</MultiItemDiv>
    </MyListHeader>
    </OverViewSettingsDiv1>
    </UpperListSection>
    <OverviewContentDiv>
    <ClothHeaderDiv>
    <h2>Headwear</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
      {userList?.headwear.map((typeValue, i) => {
    const typeObj = HeadWear.find(dt => dt.label === typeValue.name);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.label : "❓"}
      </MultiItem>
    );
  })}
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Bodywear</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    {userList?.bodywear.map((typeValue, i) => {
    const typeObj = BodyWear.find(dt => dt.label === typeValue.name);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.label : "❓"}
      </MultiItem>
    );
  })}
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Handwear</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    {userList?.handwear.map((typeValue, i) => {
    const typeObj = HandWear.find(dt => dt.label === typeValue.name);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.label : "❓"}
      </MultiItem>
    );
  })}
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Legwear</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
  {userList?.legwear.map((typeValue, i) => {
    const typeObj = LegWear.find(dt => dt.label === typeValue.name);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.label : "❓"}
      </MultiItem>
    );
  })}
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Footwear</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
      {userList?.footwear.map((typeValue, i) => {
    const typeObj = FootWear.find(dt => dt.label === typeValue.name);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.label : "❓"}
      </MultiItem>
    );
  })}
    </ClothContentDiv>

    </OverviewContentDiv>
    </NewListDiv>
    </div>
    </>
)
}

export default ViewList;