import Header from "./Header";
import usePlayingMovies from "../Hooks/useplayingMovies";
import Main from "./Main";
import Secondary from "./Secondary";
import usePopular from "../Hooks/usePopular";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse =()=>{
const showSearch = useSelector(store=>store.search.showSearch)
    // use custam hooks
   usePlayingMovies();
   usePopular();
    return (
    <div>
         <Header/>
         {
         showSearch?(<GptSearch/>):(
            <>
              <Main/>
        <Secondary/>
            </>
         )}
      
        
    </div>
    );
};

export default Browse;