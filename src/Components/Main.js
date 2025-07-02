import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Video from "./Video";

const Main = () =>{
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

       if(!movies)return;

        const mainMovies = movies[8];
        console.log(mainMovies);

        const {original_title, overview, id}= mainMovies;
    
        return (
             <div>
               <VideoTitle  title={original_title} overview={overview}/>
                 <Video movieId={id}/>
                 </div>
       );
}
export default Main;