import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const LoginContext = createContext(undefined);
const LoginDispatchContext = createContext(undefined);

const LoginProvider = ({ children }) => {
  const [authDetails, setAuthDetails] = useState({
    username: "",
    isLoggedIn: false,
  });

  return (
    <LoginContext.Provider value={authDetails}>
      <LoginDispatchContext.Provider value={setAuthDetails}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext, LoginDispatchContext };
