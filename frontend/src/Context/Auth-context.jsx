import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  let [author, setauthor] = useState(
    JSON.parse(localStorage.getItem("chat-user") || null)
  );
  return (
    <AuthContext.Provider value={{ author, setauthor }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthor = () => {
  return useContext(AuthContext);
};
