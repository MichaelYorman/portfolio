import styled from "styled-components";

export const NewListDiv = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  background-color:whitesmoke;
  margin-top:250px;
`;

export const StyleCreatorDiv=styled.div`
display:flex;
flex-direction:row;
position:relative;
background-color:gray;
width:auto;
height:1000px;
justify-content:center;
`

export const StyleButtonPositions = [
  { $top: "10px", $right: "300px", $category: "headwear" },
  { $top: "80px", $right: "250px", $category: "bodywear" },
  { $top: "130px", $right: "200px", $category: "handwear" },
  { $top: "190px", $right: "150px", $category: "legwear" },
  { $top: "250px", $right: "200px", $category: "footwear" },
  { $top: "310px", $right: "250px", $category: "accessory" },
  { $top: "370px", $right: "300px", $category: "equipment" },
];

export const StyleButton=styled.div`
display:flex;
position:relative;
width:100px;
height:100px;
background-color:black;
border-radius:50%;
top: ${({ $top }) => $top};
right: ${({ $right }) => $right};
&:hover {background-color:green;};
cursor:pointer;
justify-content:center;
align-items:center;
p {color:white}
`
export const StyleButtonDiv=styled.div`
top:50px;
left:1000px;
display:flex;
flex-direction:column;
position:absolute;
width:fit-content;
height:fit-content;
`;

export const SearchBarWindow=styled.div`
display:flex;
flex-direction:rcolumn;
justify-content:center;
align-items:center;
position:absolute;
top:100px;
width:500px;
height:500px;
background-color:blue;
display: ${({ $searchWindowsOpen }) => ($searchWindowsOpen ? "absolute" : "none")};
`;

export const SearchBarWindowInput=styled.textarea`
position:absolute;
top:100px;
width:400px;
`;

export const SearchBarWindowItemScreen=styled.div`
display:flex;
position:absolute;
top:150px;
width:400px;
max-width:400px;
height:300px;
background-color:white;
overflow-y:scroll;
flex-wrap:wrap;
`;

export const TopListContentDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
  padding-bottom:100px;
  height:auto;
`;

export const ClothHeaderDiv = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:50px;
  width:200px;
  height:100px;
  outline-style:dashed;
  background-color:white;
  align-items:center;
  justify-content:center;
`;

export const ClothContentDiv = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  padding:10px;
  margin-top:50px;
  margin-right:200px;
  width:800px;
  max-width:800px;
  height:auto;
  outline-style:dashed;
  background-color:white;
`;

export const AddMoreButtonDiv = styled.div`
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

export const Logo = styled.img`
  width:50px;
  height:auto;
`;

export const MyListHeader = styled.header`
  display:flex;
  flex-direction:column;
  width:fit-content;
  gap:10px;
  header{
    font-size:1.5em;
  }
`;

export const SearchListItem = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100px;
  height:100px;
  margin:10px 10px 0px 10px;
  outline-style:solid;
  outline-width:2px;
  cursor:pointer;
  &:hover {background-color:green;}
`;
export const ClothItem = styled.div`
  display:flex;
  position:relative;
  align-items:center;
  justify-content:center;
  width:100px;
  height:100px;
  margin:20px 20px 20px 20px;
  outline-style:solid;
  outline-width:2px;
  cursor:pointer;
`;
export const ClothCounter=styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
width:30px;
height:30px;
outline-style:solid;
outline-width:2px;
position:absolute;
margin-left:100px;
margin-top:100px;
z-index:10;
background-color:whitesmoke;
`;
export const ClothItemButtonDiv=styled.div`
display: ${({ $clothItemHovered }) => ($clothItemHovered ? "flex" : "none")};
flex-direction:row;
position:absolute;
top:0;
right:0;
`
export const ClothItemPlusButton=styled.button`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
width:25px;
height:25px;
outline-style:solid;
outline-width:2px;
background-color:whitesmoke;
&:hover {background-color:green;}
`
export const ClothItemMinusButton=styled.button`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
width:25px;
height:25px;
outline-style:solid;
outline-width:2px;
background-color:whitesmoke;
&:hover {background-color:green;}
`;
export const ClothItemDeleteButton=styled.button`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
width:25px;
height:25px;
outline-style:solid;
outline-width:2px;
background-color:whitesmoke;
&:hover {background-color:green;}
`;


export const MultiItemDiv = styled.div`
  display:flex;
  flex-direction:row;
  width:300px;
  height:fit-content;
  flex-wrap:wrap;
`;

export const MultiItem = styled.div`
  display:flex;
  width:100px;
  height:100px;
  font-size:2rem;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  background-color:${props => (props.$isActive ? "green" : "whitesmoke")};
  outline-style:solid;
  outline-width:2px;
  cursor:pointer;
  &:hover {border-style:solid;border-color:yellow;}
`;

export const N = styled.div`
  width:100px;
  height:100px;
  background-color:yellow;
`;

export const Test = styled.div`
  width:100px;
  height:100px;
  background-color:red;
`;

export const HeadWearContainer=styled.div`
  display:flex;
  flex-direction:column;
  margin-top:50px;
`

export const HeadWearTable = styled.div`
  display:${props => (props.$IsHeadWearTableActive ? "none" : "flex")};
  flex-direction:row;
  flex-wrap:wrap;
  padding:10px;
  margin-top:50px;
  margin-right:200px;
  width:800px;
  height:fit-content;
  outline-style:dashed;
  background-color:whitesmoke;
`;
export const HeadWearSearchInput=styled.input`
width:200px;
font-size:20px;
height:25px;
align-self:center;
display:${props => (props.$IsHeadWearTableActive ? "none" : "inline-block")};
`;