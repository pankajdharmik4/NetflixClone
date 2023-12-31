import {  InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"

const Featured = ({type, setGenre}) => {
    const [content,setContent] = useState({});
    const [genre1,setGenre1] = useState("");

    useEffect(()=>{
        const getRandomContent = async ()=>{
            try {
                const res = await axios.get(`https://netflix-clone-6b3c.onrender.com/api/movies/random?type=${type}${genre1? "&genre="+ genre1  :""}`,{
                    headers:{
                        token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                      }
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err)
            }
        }
        getRandomContent();
    },[type,genre1]);

  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies":"Series"}</span>
                <select name="genre" id="genre" onChange={e=>{setGenre(e.target.value);setGenre1(e.target.value)}}>
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    {/* <option value="comedy">Comedy</option> */}
                    {/* <option value="crime">Crime</option> */}
                    <option value="action">Action</option>
                    {/* <option value="fantasy">Fantasy</option> */}
                    {/* <option value="historical">Historical</option> */}
                    {/* <option value="horror">Horror</option> */}
                    {/* <option value="romance">Romance</option> */}
                    <option value="sci-fi">Sci-fi</option>
                    {/* <option value="thriller">Thriller</option> */}
                    {/* <option value="western">Western</option> */}
                    <option value="animation">Animation</option>
                    {/* <option value="drama">Drama</option> */}
                    {/* <option value="documentary">Documentary</option> */}
                </select>
            </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
            {content.imgTitle && <img src={content.imgTitle} alt="" />}
            <span className='desc'>
                {content.desc}
            </span>
            <Link to="/watch" state={{movie:content}} className='link'>
            <div className="buttons">
            <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Featured