import { useSelector } from "react-redux";
import MovieList from "./MovieList.js"

const Secondary=()=>{
    const movies =useSelector((store)=> store.movies);

    return (
        movies.nowPlayingMovies&& (
     <div className="bg-black ">
            <div className="-mt-52 pl-5 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
         </div>
    </div>
        )
    );
};

export default Secondary;