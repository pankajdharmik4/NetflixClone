import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieAction";
import axios from "axios"


//GET MOVIES
export const getMovies = async (dispatch) =>{
    dispatch(getMoviesStart())
    try {
        // console.log(localStorage.getItem("user").accessToken)
        const res = await axios.get("/movies",{
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }})
        dispatch(getMoviesSuccess(res.data))
    } catch (err) {
        dispatch(getMoviesFailure())
    }
}

//CREATE

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
      const res = await axios.post("/movies", movie, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(createMovieSuccess(res.data));
    } catch (err) {
      dispatch(createMovieFailure());
    }
  };
  
//DELETE
export const deleteMovies = async (id,dispatch) =>{
    dispatch(deleteMovieStart());
    try {
        // console.log(localStorage.getItem("user").accessToken)
        await axios.delete("/movies/"+id,{
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }})
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
}