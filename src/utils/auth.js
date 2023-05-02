import { useState, createContext, useContext, useEffect } from "react";
import { UserData } from "./userDataQuery";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tempUser, setTempUser] = useState("");
  // LOCAL STORAGE
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const { isLoading, data, refetch, isRefetching } = UserData({
    username: tempUser,
  });

  const login = (password) => {
    refetch();
    if (!isLoading && !isRefetching) {
      let users = data.data;
      debugger;
      if (users.length === 0) {
        throw new Error("Username not found");
      }
      if (users[0].password === password) {
        setUser(users[0]);
        return true;
      } else {
        throw new Error("Wrong Password");
      }
    }
  };
  const logout = () => {
    setUser(null);
    return true;
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, setTempUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
