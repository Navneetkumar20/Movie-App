import { useEffect } from "react"; 
import { API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../utils/moviesSlice";


const usePlayingMovies=()=>{
    const dispatch=useDispatch();

    const  getNowplayingMovies =async ()=>{
        const data =await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_KEY);
        const json =await data.json();
        dispatch(addNowplayingMovies(json.results));
      };
      useEffect(()=>{
        getNowplayingMovies();
      },[]);

};
export default usePlayingMovies;