import styled from "styled-components";
import { NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import WidgetPanel from "../WidgetPanel/WidgetPanel";
import {useEffect,useState} from "react";
import axios from "axios";

const NavButton = styled(NavLink)`
  text-decoration: none;
  color:black;
`;

const CreateNewListDiv=styled.h1`
display:flex;
justify-content:center;
align-items:center;
height:250px;
width:250px;
`;

const NewListLogo=styled.img`
width:80px;
height:auto;
`;
const ListingDiv=styled.div`
display:flex;
flex-direction:row;
gap:20px;
flex-wrap:wrap;
padding:10px;
margin-left:50px;
margin-right:50px;
margin-top:100px;
width:1100px;
height:auto;
outline-style:dashed;
background-color:white;
`;
const ListButton=styled.img`
width:30px;
&:hover{background-color:gray;}
display:none;
cursor:pointer;
height:30px;
`

const ListButtonDiv=styled.div`
display:flex;
flex-direction:row;
width:fit-content;
height:fit-content;
position:absolute;
gap:10px;
margin-bottom:200px;
margin-left:120px;
`
const ListItem=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:250px;
width:250px;
outline:5px dashed black;
&:hover ${ListButton} {
display:inline-block;}
`;
function UserHome() {
  const navigate = useNavigate();
  const [data,setData]=useState([]);

  // Get data of items from server when loading up the page
  useEffect(() => {
    const controller= new AbortController(); //
    const fetchData=async()=>{
      try {
        const response=await axios.get("http://localhost:3000/api/list",{
        signal:controller.signal
      });
        setData(response.data.data);
      } catch (err) {
        if(err.name!=="CanceledError") {
        console.error("Error fetching data:",err);
        }
      }
    };
    fetchData();
    return () => controller.abort();
  },[]);
  //

  // Goes to Edit Page of selected item
  const handleEdit = (listName,id) => {
    navigate(`/edit-list/${encodeURIComponent(listName)}`,{state: {id} });
  }
  //

  // Deletes the selected item
  const handleDelete=async(id)=>{
    try {
      await axios.delete(`http://localhost:3000/api/list/${id}`);
      // Updates State of the current item data
      setData(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error("Error deleting item:",err)
    }
  };
  // Goes to View Page of selected item
  // Takes ListName as URL parameter and id as state parameter
  const handleView=(listName,id)=>{
    navigate(`/view-list/${encodeURIComponent(listName)}`, { state: {id} });
  }
  //
  return (
    <>
      <div>
        <WidgetPanel/>
        <ListingDiv>
        <CreateNewListDiv>
        <NavButton to="/new-list">
        <NewListLogo src="/icons/pluscircle.svg" alt="Plus circle symbol"/></NavButton>
        </CreateNewListDiv>
            {data.length >0 ? data.map(item => (
              <ListItem key={item.id}>
                <ListButtonDiv>
                  <ListButton onClick={()=>handleView(item.list_name,item.id)} src="icons/magnifying_glass.svg"></ListButton>
                  <ListButton onClick={()=>handleEdit(item.list_name,item.id)} src="icons/wrench.svg"></ListButton>
                  <ListButton onClick={()=>handleDelete(item.id)} src="icons/trashcan.svg"></ListButton>
                </ListButtonDiv>
                <p>{item.list_name}</p>
              </ListItem>
          )) : (
            <ListItem>
            <h4>You have nothing here yet...</h4>
            </ListItem>)}
        </ListingDiv>
      </div>
    </>
  )
}

export default UserHome;