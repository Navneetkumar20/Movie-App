import { POSTERURL } from "../utils/constant";

const MovieCard=({posterPath})=>{
return (
    <div className="w-48 pr-4">
        <img  alt="movie card" src={POSTERURL+posterPath}/>
    </div>
)
}
export default MovieCard;