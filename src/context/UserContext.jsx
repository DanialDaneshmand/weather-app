import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const loginUser = (user) => {
    setUser(user);
  };
  const logoutUser=()=>{
    setUser("")
  }
  return <UserContext.Provider value={{loginUser,logoutUser,user}}>{children}</UserContext.Provider>;
}

export default UserProvider;

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("UserContext was used outside of UserProvier");

  return context;
}
