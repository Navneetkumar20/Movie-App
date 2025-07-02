import {  useSelector } from "react-redux";
import useMoviesTrailer from "../Hooks/useMoviesTrailer";

const Video = ({movieId})=>{
    const trailerVideo =useSelector((store)=>store.movies?.trailerVideo)
     useMoviesTrailer(movieId);
    return(
     <div className="w-full aspect-video">
      <iframe  
      className="aspect-video w-full"
       src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} 
       title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
    )
}
export default Video;