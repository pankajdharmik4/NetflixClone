import { deleteListStart,deleteListFailure, deleteListSuccess, getListFailure, getListStart, getListSuccess, createListStart, createListSuccess, createListFailure } from "./ListAction";
import axios from "axios"


//GET MOVIES
export const getLists = async (dispatch) =>{
    dispatch(getListStart())
    try {
        // console.log(localStorage.getItem("user").accessToken)
        const res = await axios.get("/lists",{
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }})
        dispatch(getListSuccess(res.data))
    } catch (err) {
        dispatch(getListFailure())
    }
}

// CREATE
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
      const res = await axios.post("/lists", list, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(createListSuccess(res.data));
    } catch (err) {
      dispatch(createListFailure());
    }
  };
  
// DELETE
export const deleteList = async (id,dispatch) =>{
    dispatch(deleteListStart());
    try {
        // console.log(localStorage.getItem("user").accessToken)
        console.log(id)
        await axios.delete("/lists/"+id,{
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }})
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
}