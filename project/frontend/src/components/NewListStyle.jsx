import styled from "styled-components";

export const NewListDiv = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  background-color:whitesmoke;
  margin-top:250px;
`;

export const TopListSectionGrid = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr;
`;

export const TopListContentDiv1 = styled.div`
  display:flex;
  flex-direction:column;
  grid-column:1;
  gap:20px;
  margin-top:50px;
  margin-left:150px;
`;

export const TopListContentDiv2 = styled.div`
  display:flex;
  flex-direction:column;
  grid-column:2;
  gap:20px;
  margin-top:600px;
  margin-left:150px;
`;

export const MapApiDiv = styled.div`
  background-color:gray;
  position:absolute;
  right:0;
  height:512px;
  width:512px;
`;

export const BottomContentDiv = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:100px;
  width:1080px;
  height:auto;
  align-items:center;
  padding-bottom:100px;
`;

export const ClothHeaderDiv = styled.div`
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

export const ClothContentDiv = styled.div`
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
    text-decoration:underline;
    font-size:1.5em;
  }
  h1{
    cursor:pointer;
  }
`;

export const Object = styled.div`
  width:100px;
  height:100px;
  margin:10px 10px 0px 10px;
  background-color:black;
`;

export const MultiItemDiv = styled.div`
  display:flex;
  flex-direction:row;
  width:300px;
  height:fit-content;
  background-color:snow;
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
  gap:10px;
  background-color:${props => (props.$isActive ? "green" : "whitesmoke")};
  outline-style:solid;
  outline-width:2px;
  cursor:pointer;
  &:hover {background-color:green;}
  transition:background-color:0.3s;
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
export const BodyWearTable = styled.div``;
export const HandWearTable = styled.div``;
export const LegWearTable = styled.div``;
export const FootWearTable = styled.div``;