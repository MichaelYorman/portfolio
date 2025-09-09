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
margin-top:50%;
width:1080px;
`;
const OverviewSettingsDiv=styled.div`
display:flex;
flex-direction:column;
width:fit-content;
gap:20px;
margin-top:50px;
margin-left:100px;
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
flex-direction:column;
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
margin:10px;
width:fit-content;
height:auto;
background-color:whitesmoke;
outline-style:dashed;
`;

const Logo=styled.img`
width:50px;
height:auto;
`;
const Figure=styled.img`
width:300px;
height:auto;
position:sticky;
top:20px;
margin-left:850px;
margin-top:100px;
`;
const MyListNameHeader=styled.header`
display:flex;
flex-direction:column;
gap:10px;
header{text-decoration:underline}
h1{cursor:pointer;}
`;
const MyListDestinationNameHeader=styled.header`
display:flex;
flex-direction:column;
gap:10px;
header{
text-decoration:underline}
h1{cursor:pointer;}
`;
const MyListDestinationTypeHeader=styled.header`
display:flex;
flex-direction:column;
gap:10px;
header{text-decoration:underline}
h1{cursor:pointer;}
`;
const MyListVehicleHeader=styled.header`
display:flex;
flex-direction:column;
gap:10px;
header{text-decoration:underline}
h1{cursor:pointer;}
`;
function NewList() {
const {t,setLang}=useTranslate();
const {isHidden,setHidden}=useState(true);
return (
    <>
    <div>
    <Wrapper>
    <NewListDiv>
    <OverviewSettingsDiv>
    <MyListNameHeader><header>{t("newlist-listname")}</header>
    <h1>Listan nimi</h1>
    </MyListNameHeader>
    <MyListDestinationNameHeader><header>{t("newlist-destinationname")}</header>
    <h1>Paikan nimi</h1></MyListDestinationNameHeader>
    <MyListDestinationTypeHeader><header>{t("newlist-destinationtype")}</header>
    <h1>Paikan tyyppi</h1></MyListDestinationTypeHeader>
    <MyListVehicleHeader><header>{t("newlist-vehicle")}</header>
    <h1>Ajoneuvo</h1></MyListVehicleHeader>    
    </OverviewSettingsDiv>

    <MapDiv/>
    <OverviewContentDiv>
    <Figure src="icons/man-silhouette-1.svg" alt="Black stick figure resembling a man"/> 
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
    </Wrapper>
    </div>
    </>
)
}

export default NewList;