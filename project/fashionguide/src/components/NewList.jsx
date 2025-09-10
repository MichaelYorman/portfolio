import styled from "styled-components";
import { useTranslate } from "./LanguageContext";
import { useState } from "react";

const Wrapper = styled.div`
display:flex;
flex-direction:column;
position:relative;
align-items:center;
background-color:green;
width:1080px;
min-height:100vh;
margin: 0 auto;
`;
const NewListDiv=styled.div`
display:flex;
flex-direction:column;
background-color:whitesmoke;
margin-top:10%;
width:1080px;
`;
const OverviewSettingsDiv=styled.div`
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
const Figure=styled.img`
width:400px;
height:auto;
position:sticky;
top:20px;
margin-left:850px;
`;
const MyListNameHeader=styled.header`
display:flex;
flex-direction:column;
width:fit-content;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
h1{cursor:pointer;}
`;
const MyListDestinationNameHeader=styled.header`
display:flex;
flex-direction:column;
width:fit-content;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
h1{cursor:pointer;}
`;
const MyListDestinationTypeHeader=styled.header`
display:flex;
flex-direction:column;
width:fit-content;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
h1{cursor:pointer;}
`;
const MyListVehicleHeader=styled.header`
display:flex;
flex-direction:column;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
h1{cursor:pointer;}
`;
const MyListPurposeHeader=styled.header`
display:flex;
flex-direction:column;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
h1{cursor:pointer;}`;
const MyListWeatherHeader=styled.header`
display:flex;
flex-direction:column;
gap:10px;
header{text-decoration:underline;
font-size:1.5em;}
h1{cursor:pointer;}`;

const Object=styled.div`
width:100px;
height:100px;
margin:10px 10px 0px 10px;
background-color:black;
`;
const MultiPurposeDiv=styled.div`
display:flex;
flex-direction:row;
width:300px;
height:auto;
background-color:gray;
outline-style:solid;
outline-width:1px;
flex-wrap:wrap;
`;
const MultiPurposeItem=styled.div`
display:flex;
width:100px;
height:50px;
flex-direction:row;
align-items:center;
padding:10px;
gap:10px;
background-color:lightgray;
outline-style:solid;
outline-width:2px;
cursor:pointer;
`;
const getSource = (t) => ({
DestinationTypes: [
    {value:'forest',label:`${t("typeforest")} 🌲`},
    {value:'mountain',label:`${t("typemountain")} 🏔️`},
    {value:'beach',label:`${t("typebeach")} 🏖️`},
    {value:'desert',label:`${t("typedesert")} 🏜️`},
    {value:'cave',label:`${t("typecave")}🪨`},
    {value:'bodyofwater',label:`${t("typebodyofwater")} 🌊`},
    {value:'residentialarea',label:`${t("typeresidentialarea")} 🏙️`},
    {value:'countryside',label:`${t("typecountryside")}🌻`},
],
DestinationPurpose: [
{ value: 'hangingout', label: `${t("typehangingout")}  😎☕` },
  { value: 'vacation', label: `${t("typevacation")} 🏖️` },
  { value: 'swimming', label: `${t("typeswimming")}  🏊‍♂️` },
  { value: 'sightseeing', label: `${t("typesightseeing")} 🗽` },
  { value: 'photography', label: `${t("typephotography")} 📸` },
  { value: 'stargazing', label: `${t("typestargazing")} 🌕` },
  { value: 'camping', label: `${t("typecamping")} 🏕️` },
  { value: 'climbing', label: `${t("typeclimbing")} 🧗‍♂️` },
  { value: 'wildlifewatching', label: `${t("typewildlifewatching")} 🦉` },
  { value: 'fishing', label: `${t("typefishing")} 🎣` },
  { value: 'foraging', label: `${t("typeforaging")} 🍄🫐` }
],
Vehicles: [
  { value: 'foot', label: `${t("typefoot")} 🚶` },
  { value: 'bike', label: `${t("typebike")} 🚲` },
  { value: 'car', label: `${t("typecar")} 🚗` },
  { value: 'publictransportation', label: `${t("typepublictransportation")} 🚌` },
  { value: 'motorbike', label: `${t("typemotorbike")} 🏍️` },
  { value: 'airplane', label: `${t("typeairplane")} ✈️` },
  { value: 'watervehicle', label: `${t("typewatervehicle")} ⛵` },
  { value: 'skateboard', label: `${t("typeskateboard")} 🛹` },
  { value: 'scooter', label: `${t("typescooter")} 🛴` },
  { value: 'rollerblades', label: `${t("typerollerblades")} 🛼` },
  { value: 'personalelectricvehicle', label: `${t("typepersonalelectricvehicle")} ⚡🛴` }
],
WeatherConditions: [
  { value: 'clear', label: `${t("typeclear")} ☀️` },
  { value: 'raining', label: `${t("typeraining")} 🌧️` },
  { value: 'lowvisibility', label: `${t("typelowvisibility")} 👁🚫` },
  { value: 'sandstorm', label: `${t("typesandstorm")} 💨🏜️` },
  { value: 'fog', label: `${t("typefog")} 🌫️` }
],
Temperature: [
  { value: 'scorching', label:`${t("typescorching")} 🔥💀`, minTemp: 40 },
  { value: 'hot', label: `${t("typehot")} 🔥`, minTemp: 30, maxTemp: 39 },
  { value: 'warm', label: `${t("typewarm")} ☀️`, minTemp: 20, maxTemp: 29 },
  { value: 'temperate', label: `${t("typetemperate")} 🌳`, minTemp: 11, maxTemp: 19 },
  { value: 'cool', label: `${t("typecool")} ☀️⚖️❄️`, minTemp: 0, maxTemp: 10 },
  { value: 'chilly', label: `${t("typechilly")} ❄️`, minTemp: -10, maxTemp: -1 },
  { value: 'cold', label: `${t("typecold")} 🥶`, minTemp: -19, maxTemp: -11 },
  { value: 'verycold', label: `${t("typeverycold")} 🧊`, minTemp: -29, maxTemp: -20 },
  { value: 'freezing', label: `${t("typefreezing")} 🧊💀`, minTemp: -50, maxTemp: -30 }
]
});
function NewList() {
const {t,setLang}=useTranslate();
const Source = getSource(t)

return (
    <>
    <div>
    <Wrapper>
    <NewListDiv>
    <OverviewSettingsDiv>
    <MyListNameHeader><header>{t("newlist-listname")}</header>
    <h2>Listan nimi</h2>
    <textarea name="listname" rows={4} cols={40} placeholder={t("typelistname")} required>
    </textarea>
    </MyListNameHeader>
    <MyListDestinationNameHeader><header>{t("newlist-destinationname")}</header>
    <h2>Paikan nimi</h2>
    <textarea name="destinationname" rows={4} cols={40} placeholder={t("typelistdestination")}>
    </textarea></MyListDestinationNameHeader>
    <MyListDestinationTypeHeader><header>{t("newlist-destinationtype")}</header>
    <h2>Paikan tyyppi</h2>
    <textarea name="destinationname" rows={4} cols={40} placeholder={t("starttyping")}>
    </textarea>
    </MyListDestinationTypeHeader>
    <MyListPurposeHeader><header>{t("newlist-purpose")}</header>
    <MultiPurposeDiv>
    <MultiPurposeItem>
    <p>{Source.DestinationPurpose[0].label}</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>{Source.DestinationPurpose[1].label}</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>{Source.DestinationPurpose[2].label}</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
        <MultiPurposeItem>
    <p>TESTI</p>
    </MultiPurposeItem>
    </MultiPurposeDiv>
    </MyListPurposeHeader>
    <MyListVehicleHeader><header>{t("newlist-vehicle")}</header>
    <h2>Ajoneuvo</h2></MyListVehicleHeader>
    <MyListWeatherHeader><header>{t("newlist-weather")}</header>
    <h2>Sää</h2></MyListWeatherHeader>     
    </OverviewSettingsDiv>

    <MapDiv/>
    <OverviewContentDiv>
    <Figure src="icons/man-silhouette-1.svg" alt="Black stick figure resembling a male person"/> 
    <ClothHeaderDiv>
    <h2>{t("headwear")}</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg" alt="Plus circle symbol"/>
    </AddMoreButtonDiv>
    <Object/>
    <Object/>
    <Object/>
        <Object/>
            <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
                <Object/>
<Object/>
<Object/>
<Object/>
<Object/>
<Object/>
<Object/>
<Object/>
<Object/>
<Object/>
<Object/>
                <Object/>
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
    </Wrapper>
    </div>
    </>
)
}

export default NewList;