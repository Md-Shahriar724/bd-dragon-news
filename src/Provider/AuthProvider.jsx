import { GithubAuthProvider,
   GoogleAuthProvider,
  onAuthStateChanged,
   signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState,  } from "react";
import auth from "../Firebase/Firebase";
import {PropTypes} from 'prop-types'

export const AuthContext = createContext()

const Googleprovider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

  const [users, setUsers] = useState(null)
  const [loading, setLoading] =useState(true)

// Google Authentication system

const googleLogin = ()=>{
setLoading(true)
 return signInWithPopup(auth, Googleprovider)
}

// GitHub Authentication system

const gitHubLogin = ()=>{
  setLoading(true)
  return signInWithPopup(auth, gitHubprovider)
}






// OnAuthState Change

// useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//       setUsers(user)
//     });
// },[])


useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUsers(currentUser)
    setLoading(false)
    console.log('this is onAuthStateChange', currentUser)
  })
  return()=>{
    unSubscribe
  }
},[])


// Value of the provider is declared here

  const AllAuth = {
    googleLogin,
    gitHubLogin,
    users,
    loading
  }


  

    return (
        <AuthContext.Provider value={AllAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {

  children : PropTypes.node
}