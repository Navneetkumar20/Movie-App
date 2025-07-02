import { useEffect } from "react"; 
import { API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addpopular } from "../utils/moviesSlice";


const usePopular=()=>{
    const dispatch=useDispatch();

    const  getPopular =async ()=>{
        const data =await fetch("'https://api.themoviedb.org/3/person/popular?language=en-US&page=1",API_KEY);
        const json =await data.json();
        dispatch(addpopular(json.results));
      };
      useEffect(()=>{
        getPopular();
      },[]);

};
export default usePopular;