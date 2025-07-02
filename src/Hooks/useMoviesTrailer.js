import { useDispatch } from "react-redux";
import { API_KEY } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMoviesTrailer=(movieId)=>{
const dispatch =useDispatch();
    //fetch trailer video
    const getMoviesVideos = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",API_KEY)
        const json =await data.json();

        const filterData =json.results.filter((video)=> video.type==="Trailer")
         const trailer = filterData.length ? filterData[0]:json.results[0];
         
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
     getMoviesVideos();
    },[])
}
export default useMoviesTrailer;