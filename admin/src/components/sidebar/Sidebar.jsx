import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  PlayCircleOutline,
  List,
} from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                Movies/Series
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                List
              </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Add Content</h3>
          <ul className="sidebarList">
            {/* <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li> */}
            <Link className="link" to="newMovie">
              <li className="sidebarListItem">
                <AddIcon className="sidebarIcon" />
                Create New Movie/Series
              </li>
            </Link>
            <Link className="link" to="/newList">
              <li className="sidebarListItem">
                <AddIcon className="sidebarIcon" />
                Create New List
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
