import { useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(()=>{
    const getNewUsers = async ()=>{
      try {
        const res = await axios.get("/users?new=true",{
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTgzMDIzMjMzYmZmMWNhZDc4ZmMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODg5MTkwNiwiZXhwIjoxNjg5MzIzOTA2fQ.xDMtJ1z6_U3Gur--NWMZxIxMWogJssBHHtSjxxYLyMg",
          },
        });
        setNewUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNewUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
            <li className="widgetSmListItem">
            <img
              src={user.ProfilePic || "https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
