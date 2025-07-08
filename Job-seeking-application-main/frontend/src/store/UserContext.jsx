import { createContext, useState } from "react";

export const UserContext = createContext({ isAuthorized: false });

export const AppWrapper = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  return (
    <UserContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
