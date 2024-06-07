import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { UseAuthor } from "./Auth-context";
const SocketContext = createContext();
export const usesocket = () => {
  return useContext(SocketContext);
};
export const SocketProvider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const [OnlineUsers, setOnlineUsers] = useState([]);

  const { author } = UseAuthor();
  useEffect(() => {
    if (author) {
      const socket = io("https://mern-chat-app-ak5j.onrender.com", {
        query: {
          userId: author._id,
        },
      });
      setsocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setsocket(null);
      }
    }
  }, [author]);

  return (
    <SocketContext.Provider value={{ socket, OnlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
