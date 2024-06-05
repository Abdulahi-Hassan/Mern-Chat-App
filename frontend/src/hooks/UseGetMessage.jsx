import axios from "axios";
import { endpoint } from "../App";
import { useEffect, useState } from "react";
import useconversation from "../zustand/UseConversation";
function UseGetUseGetMessage() {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, selectedConversation } = useconversation();

  useEffect(() => {
    const SendRequestGetMessage = async () => {
      setloading(true);
      let { data } = await axios.get(endpoint + `/message/${selectedConversation._id}`);
      setMessages(data);
      setloading(false);
    };
    if (selectedConversation?._id) SendRequestGetMessage();
  }, [selectedConversation?._id, setMessages]);
  return { messages, loading };
}

export default UseGetUseGetMessage;
