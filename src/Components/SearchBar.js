import { useSelector } from "react-redux";
import { useRef } from "react";
import Lang from "../utils/Language";
// import openai from "../utils/openai";

const SearchBar=()=>{
 const LangKey = useSelector((store)=>store.config.Lang);
  const searchText =useRef(null);
//  const handleSearchClick= async()=>{
//        console.log(searchText.current.value);
//     //    make an api call to gpt and get moivie results
//   const gptResults =  await openai.responses.create({
//   model: 'gpt-4o',
//   instructions: 'You are a coding assistant that talks like a pirate',
//   input: searchText.current.value,
// });
// console.log(gptResults.output_text);
//  }

    return (
        <div className="pt-[12%] flex justify-center font-sm">
       <form className="w1/2 bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
        <input 
         ref={searchText}
        type="text" className="p-2 m-2 col-span-9 text-sm " 
        placeholder={Lang[LangKey].gptSearchPlaceHolder}/>
          <button className="py-1 px-4 col-span-3 m-2 bg-red-600 text-white text-lg rounded-lg"
             >
            {Lang[LangKey].search}</button>
       </form>
        </div>
    )
}

export default SearchBar;