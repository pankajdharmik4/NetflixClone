import React, { useEffect, useState } from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Freatured from '../../components/featured/Featured'
import List from '../../components/list/List';
import axios from 'axios'

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre,setGenre] = useState("");


  useEffect(()=>{
    const getRandomLists = async ()=>{
      try {
        const res = await axios.get(`https://netflix-clone-6b3c.onrender.com/api/lists${type?"?type=" + type:""}${genre? "&genre="+ genre  :""}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTgzMDIzMjMzYmZmMWNhZDc4ZmMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODgxMjUwMiwiZXhwIjoxNjg5MjQ0NTAyfQ.FoheRmXfEW7Zzw1MVijUgIGXL-GLHaRMl4HxU14mWaY"
          }
        });
        setLists(res.data);
      } catch (err) {
          console.log(err)
      }
    };
    getRandomLists();

  },[type,genre]);

  return (
    <div className='home'>
        <Navbar/>
        <Freatured type={type} setGenre={setGenre}/>
        {lists.map((list)=>(
          <List list={list} />
        ))}
        <br/>
    </div>
  )
}

export default Home