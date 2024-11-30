import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  const [loader, setLoader] = useState(true);
  const [email, setEmail] = useState("");
  const [userImage,setUserImage]=useState(null);
  const [idForEdit,setIdForEdit] = useState(null)

  const provider = new GoogleAuthProvider();

  // Google Login
  const googleLogin = () => {
  
    return signInWithPopup(auth, provider);
  };

  // Register
  const regesterUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login Phone PassWord
  const loginUser = (email, password) => {
    setLoader(true)
    signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut
  const logout = () => {
    setLoader(true)
    return signOut(auth);
  };

  const forgetPass = (email) => {
    setLoader(true)
    return sendPasswordResetEmail(auth, email);
  };



  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setValue(user);
      setUserImage(user.photoURL)
      setLoader(false);
      
    });

    return () => {
      unSubcribe();
    };
  }, []);

  const authInfo = {
    regesterUser,
    loginUser,
    googleLogin,
    logout,
    forgetPass,
    loader,
    setLoader,
    value,
    setValue,
    email,
    setEmail,
    userImage,
    idForEdit,
    setIdForEdit
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
