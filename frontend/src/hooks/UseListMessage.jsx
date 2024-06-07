import { useEffect } from "react";
import { usesocket } from "../Context/SocketContext";
import useconversation from "../zustand/UseConversation";
import SoundNotivacation from '../assets/sounds/notification.mp3'
const UseListMessage = () => {
  const { socket } = usesocket();
  const { messages, setMessages } = useconversation();
  useEffect(() => {
    socket?.on("NewMessage", (NewMessage) => {
      NewMessage.shouldShake=true
      let sound=new Audio(SoundNotivacation)
      sound.play()
      setMessages([...messages, NewMessage]);
    });
    return () => socket?.off("NewMessage")
  },[socket,setMessages,messages]);
};

export default UseListMessage;
