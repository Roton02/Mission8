import {
    GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./AuthContext.cofig";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  // console.log(children);
  const [user,setUser] = useState(null)
  const [loader, setLoader]= useState(true)
//   console.log(user);
  const createUserByemail = (email, password) => {
    setLoader(true)
    return  createUserWithEmailAndPassword(auth, email, password);
    
    
  };
  const loginWithEmail = (email, password) => {

    setLoader(true)
    return  signInWithEmailAndPassword(auth, email, password);
    
  };
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn =()=>{
    setLoader(true)
    return  signInWithPopup(auth,googleProvider)
    
  }
  const githubProvider = new GithubAuthProvider()
  const githubSignIn =()=>{
    setLoader(true)
    return signInWithPopup(auth,githubProvider)
  
  }
  useEffect(()=>{
     const  unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setLoader(false)
        } else{
        //    console.log('logOut Successfull');
        setUser(null)
        }
        return ()=>{
            unsubscribe()
        }
      });
  },[])
  const signOutPage =()=>{
     return signOut(auth)
    
  }


  const data = { createUserByemail, loginWithEmail,googleSignIn,githubSignIn,setUser,user ,signOutPage,loader};

  return (
    <div>
      <AuthProvider.Provider value={data}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
