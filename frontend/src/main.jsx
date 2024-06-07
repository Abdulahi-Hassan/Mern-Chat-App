import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Auth-context.jsx";
import { SocketProvider } from "./Context/SocketContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider>
  <SocketProvider>
   <BrowserRouter>
    <React.StrictMode>
      <App />
   
    </React.StrictMode>
  </BrowserRouter>
  </SocketProvider>
 </AuthProvider>
);
