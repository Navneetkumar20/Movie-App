import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constant";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

 const navigate = useNavigate();
 const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
     
    const handleButtonClick = () => {
        // Validate input
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                   displayName: name.current.value,
                  photoURL:user.LOGO,
                  }).then(() => {
                     const{uid,email,displayName, photoURL} = auth.currentUser;
                       dispatch(
                        addUser({
                            uid:uid,
                            email:email,
                            displayName: displayName,
                             photoURL: photoURL}));
                            navigate("/browse")
            
                    }).catch((error) => {
                   setErrorMessage(message);
                       // ...
                         });
                    console.log("User signed up:", user);
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage(error.code + "-" + error.message);
                });
        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User signed in:", user);
                    navigate("/browse")
                })
                .catch((error) => {
                    setErrorMessage(error.code + " - " + error.message);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <div className="absolute">
                <Header />
                <img
                    src={BG_URL}
                    alt="logo"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="text-white bg-black w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="placeholder:italic p-2 my-4 w-full bg-slate-400 sm:text-sm bg-opacity-40"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="placeholder:italic p-2 my-4 w-full bg-slate-400 sm:text-sm bg-opacity-30"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="placeholder:italic p-2 my-4 w-full bg-slate-400 sm:text-sm bg-opacity-30"
                />
                <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
                <button
                    className="sm:text-2xl p-4 my-6 bg-red-600 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className="py-4 sm:text-sm cursor-pointer"
                    onClick={toggleSignInForm}
                >
                    {isSignInForm
                        ? "New to Netflix? Sign Up"
                        : "Already have an Account? Sign In Now..."}
                </p>
            </form>
        </div>
    );
};

export default Login;
