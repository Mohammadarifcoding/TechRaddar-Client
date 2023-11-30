import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import Auth from "../Firebase/Firebase.config";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import UseAxious from "./../Hooks/UseAxious";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const AxiousPublic = UseAxious();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const OUT = () => {
    setLoading(true);
    return signOut(Auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      const email = currentUser?.email || user?.email;
      
     
      console.log(currentUser);
      if (currentUser) {
        const loggedUser = { email: email , name : currentUser?.displayName  };
       
         
          AxiousPublic.post("/jwt",  loggedUser ).then((res) => {
            console.log(res.data);
            if (res.data.token) {
              localStorage.setItem("token", res.data.token);
              console.log('Added the token')
            }
            setUser(currentUser);
            setLoading(false);
          });
        
      }
      else{
        localStorage.removeItem("token")
        console.log('deleted the token')
        setUser(currentUser);
        setLoading(false)
      }

      console.log("Ovserving", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [AxiousPublic, user?.email]);

  const Google = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(Auth, provider);
  };

  const update = (name, photo) => {
    setLoading(true);
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const In = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const AuthInfo = { loading, user, In, update, Google, OUT, creatUser };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
