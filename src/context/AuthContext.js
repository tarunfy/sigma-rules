import React, { useState, useEffect, createContext } from "react";
import { auth, firestore } from "../config/firebaseConfig";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("Current User: ", user);
      setUser(user);
      setIsFetching(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isFetching }}>
      {children}
    </AuthContext.Provider>
  );
};
