import {useState, useEffect, createContext} from 'react'
import { auth } from '../services/firebaseconfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, onAuthStateChanged, signOut as firebaseSignOut, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';

//1. creating the store
export const AuthContexts=createContext()

// 2. Authcontext is provider which provide the value of the store to different child components
const AuthContext = ({children}) => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const[isUserlogged,setIsUserLogged]=useState(null)
  const[isloading,setIsloading]=useState(true)

  useEffect(()=>{

    const setAuthPresistence=async()=>{
      try {
        await setPersistence(auth,browserLocalPersistence)
      } catch (error) {
        console.log("error in setting the presistence")
      }
    }
    setAuthPresistence()
    
    // currently user authenticate
    let unSubScribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          // ...
          setIsLoggedIn(true)
          setIsUserLogged(user)
        } else {
          // User is signed out
          // ...
          setIsLoggedIn(false)
          setIsUserLogged(null)
        }
        setIsloading(false)
      });
    // clean up function
    return ()=>unSubScribe()

  },[])

  // 1. creating the user
  const createUser=async(data)=>{
    try{
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Registered successfully");
      return true;
    }catch(error){
      toast.error("Register failed");
      return false;
    }
  }

  // 2. Login the user
  const userLogin=async(data)=>{
    try{
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Signin successfully");
      return true;
    }catch(error){
      toast.error("signin failed");
      return false;
    }
  }

  // 3. Logout the user
  const signOut=async()=>{
    try {
      await firebaseSignOut(auth)
      toast.success("successfully signed out")
      return true;
    } catch (error) {
      toast.error("unable to signout")
      return false;
    }
  }


  // reseting the password
  const resetPassword=async(email)=>{
    try {
      await sendPasswordResetEmail(auth, email)
      toast.success("Reset Mail sent successfully")
      return true
    } catch  {
      toast.error("Failed to send reset mail")
      return false
    }
  }

  return (
    <AuthContexts.Provider value={{createUser, userLogin, isLoggedIn, isUserlogged, isloading, signOut, resetPassword}}>
      {children}
    </AuthContexts.Provider>
  )
}

export default AuthContext
