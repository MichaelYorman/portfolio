import styled from "styled-components";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
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
accessory:[],
headwear:[],
bodywear:[],
handwear:[],
legwear:[],
footwear:[],
accessory:[]
})

const location = useLocation();
const { id } = location.state || {};

const [item,setItem]=useState(null);

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
//Translation
const {t,setLang}=useTranslate();
// With Source, can take hold of different values with ease
const Source = getSource(t);
const DestinationTypes=Source.DestinationTypes;
const DestinationPurposes=Source.DestinationPurpose;
const Vehicles=Source.Vehicles;
const Weather=Source.WeatherConditions;

return (
    <>
    <div>
    <NewListDiv>
    <MapDiv/>
    <UpperListSection>
    <OverViewSettingsDiv1>
    <MyListHeader><header>{t("newlist-listname")}</header>
    <p>{item?.list_name}</p>
    </MyListHeader>
    <MyListHeader ><header>{t("newlist-destinationname")}</header>
    <p>{item?.place_name}</p>
    </MyListHeader>
    <MyListHeader><header>{t("newlist-destinationtype")}</header>
<MultiItemDiv>
  {item?.place_type.map((typeValue, i) => {
    const typeObj = DestinationTypes.find(dt => dt.value === typeValue);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.symbol : "❓"}
      </MultiItem>
    );
  })}
</MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>{t("newlist-purpose")}</header>
<MultiItemDiv>
  {item?.purpose.map((typeValue, i) => {
    const typeObj = DestinationPurposes.find(dt => dt.value === typeValue);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.symbol : "❓"}
      </MultiItem>
    );
  })}
</MultiItemDiv>
    </MyListHeader> 
        <MyListHeader><header>{t("newlist-vehicle")}</header>
  <MultiItemDiv>
  {item?.vehicle.map((typeValue, i) => {
    const typeObj = Vehicles.find(dt => dt.value === typeValue);
    return (
      <MultiItem key={i}>
        {typeObj ? typeObj.symbol : "❓"}
      </MultiItem>
    );
  })}
</MultiItemDiv>
    </MyListHeader>
    <MyListHeader><header>{t("newlist-weather")}</header>
  <MultiItemDiv>
  {item?.weather.map((typeValue, i) => {
    const typeObj = Weather.find(dt => dt.value === typeValue);
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
    <h2>{t("headwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("bodywear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("handwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("legwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>{t("footwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    </ClothContentDiv>

    </OverviewContentDiv>
    </NewListDiv>
    </div>
    </>
)
}

export default ViewList;