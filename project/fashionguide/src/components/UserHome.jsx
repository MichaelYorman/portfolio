import styled from "styled-components";
import { NavLink} from 'react-router-dom'
import WidgetPanel from "./WidgetPanel";
import { useTranslate } from "./LanguageContext";
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

const Block=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:250px;
width:250px;
outline:5px dashed black;
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
const ListButtonDiv=styled.div`
display:flex;
width:30px;
height:30px;
position:relative;
background-color:blue;
`
function UserHome() {
  const [data,setData]=useState([]);

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
  const handleDelete=async(id)=>{
    try {
      await axios.delete(`http://localhost:3000/api/list/${id}`);
      setData(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error("Error deleting item:",err)
    }
  };
  const {t,setLang}=useTranslate();
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
              <Block key={item.id}>
                <ListButtonDiv onClick={()=>handleDelete(item.id)} src="icons/trashcan.svg"/>
                <p>{item.list_name}</p>
              </Block>
          )) : (
            <Block>
            <h4>You have nothing here yet...</h4>
            </Block>)}
        </ListingDiv>
      </div>
    </>
  )
}

export default UserHome;