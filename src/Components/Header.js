import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constant";
import { LOGO } from "../utils/constant";
import { toggleSearchView } from "../utils/searchSlice";
import Lang from "../utils/Language";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const showSearch =useSelector((store)=>store.search.showSearch);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user; 
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL, 
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []); 

  const handleSearchClick=()=>{
     dispatch(toggleSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="flex absolute w-screen px-2 py-2 z-10 bg-gradient-to-b bg-black justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
        {showSearch && ( 
         <select className=" px-2 h-6 w-25 bg-gray-900 justify-center text-sm text-white font-light" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((Lang)=>(
               <option key={Lang.identifer} value={Lang.identifer}>
                  {Lang.name}
               </option>
            ))}
            </select>)}
         <button className="py-2 px-3 h-8 w-25 text-sm mx-10 bg-red-500 font-light text-white rounded-lg justify-center" 
         onClick={handleSearchClick}>
           {showSearch? "Homepage":"Search"}</button>
          <img
            className="w-12 h-12 rounded-full"
            src={LOGO}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="px-1 py-1 text-sm font-semibold text-white">
           SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
