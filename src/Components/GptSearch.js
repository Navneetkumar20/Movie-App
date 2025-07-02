import { BG_URL } from "../utils/constant";
import Moviesuggestion from "./MovieSuggestion";
import SearchBar from "./SearchBar";

const GptSearch=()=>{
    return (
        <div>
            <div className="absolute -z-10 font-normal">
                <img src={BG_URL} alt="logo"/>
            </div>
          <SearchBar/>
          <Moviesuggestion/>
        </div>
    )
}
export default GptSearch;