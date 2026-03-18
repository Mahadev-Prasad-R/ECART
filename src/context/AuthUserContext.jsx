import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { _Auth } from '../Backend/BackEndBaaS';

export let authUser = createContext();

const AuthUserContext = ({ children }) => {
  let [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(_Auth, (user) => {
      if (user) {
        setUserData(user);
        console.log("USER DATA:", user); // 👈 check displayName here
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe(); // cleanup
  }, []);

  return (
    <authUser.Provider value={userData}>
      {children}
    </authUser.Provider>
  );
};

export default AuthUserContext;