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
height:fit-content;
padding-bottom:100px;
`;
const OverviewTextDiv=styled.div`
display:flex;
flex-direction:column;
background-color:gray;
gap:10px;
width:auto;
align-items:center;
.mylist-textarea {
display: ${(props) => (props.$isHidden ? "none" : "inline-block")};
}
.mylist {&:hover{
.mylist-textarea{display:inline-block}
}}
`;
const OverviewContentDiv=styled.div`
display:flex;
flex-direction:column;
background-color:gray;
margin-top:100px;
width:1080px;
height:auto;
align-items:center;
align-self:center;
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
margin-right:100px;
width:900px;
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
const MyListHeader=styled.header`
`;
function NewList() {
const {t,setLang}=useTranslate();
const {isHidden,setHidden}=useState(true);
return (
    <>
    <div>
    <Wrapper>
    <NewListDiv>
    <OverviewTextDiv>
        <div className="mylist" onClick={() => setHidden((prev) => !prev)}>
        <MyListHeader><h4>testilista</h4></MyListHeader>
        <div className="mylist-textarea" $isHidden={isHidden}>
        <textarea name="listname" rows={1} cols={40} placeholder="listname" required>
        </textarea>
        </div>
        </div>
        <div>
        <textarea name="destinationname" rows={1} cols={40} placeholder="destinationname" required disabled>
        </textarea>
        </div>
        <div>
        <textarea name="destinationtype" rows={1} cols={40} placeholder="destinationtype" required disabled>
        </textarea>
        </div>
        <div>
         <textarea name="vehicle" rows={1} cols={40} placeholder="vehicle" required disabled>
        </textarea>
        </div>
    </OverviewTextDiv>
    <OverviewContentDiv>
    <ClothHeaderDiv>
    <h2>Päähineet</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Ylävartalo</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Käsineet</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Alavartalo</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg"/>
    </AddMoreButtonDiv>
    </ClothContentDiv>

    <ClothHeaderDiv>
    <h2>Jalkineet</h2>
    </ClothHeaderDiv>
    <ClothContentDiv>
    <AddMoreButtonDiv>
    <Logo src="/icons/pluscircle.svg"/>
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