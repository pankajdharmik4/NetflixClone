import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route,Outlet,Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import {AuthContext} from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/listList";
import List from "./pages/list/List"
import NewList from "./pages/newList/NewList";

const Layout = () => (
  <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
);


function App() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
          <Routes>
              <Route exact path="/login" element={ user? <Navigate to="/"/>:<Login />}/>
              {/* <Route exact path="/" element={ !user? <Navigate to="/login"/>:<Home />}/> */}
              {user?(
              <Route element={<Layout />}>
                <Route exact path="/" element={ <Home />}/>
                <Route path="/users" element={<UserList />}/>
                <Route path="/user/:userId" element={<User />}/>
                <Route path="/newUser" element={<NewUser />}/>
                <Route path="/movies" element={<MovieList />}/>
                <Route path="/movie/:movieId" element={<Movie />}/>
                <Route path="/newMovie" element={<NewMovie />}/>
                <Route path="/lists" element={<ListList />}/>
                <Route path="/list/:listId" element={<List />}/>
                <Route path="/newList" element={<NewList />}/>
              </Route>):(
                <Route element={<Layout />}>
                    <Route path="/" element={<Navigate to="/login"></Navigate>}/>
                </Route>
              )}
  
        </Routes>
    </Router>
  );
}

export default App;
