import axios from "axios";
import { endpoint } from "../App";
import { useEffect, useState } from "react";
import useconversation from "../zustand/UseConversation";
function UseSendMessages() {
  const [loading, setloading] = useState(false);
  const { messages,setMessages,selectedConversation } = useconversation();
  const SendRequestSendMessage = async (Message) => {
    setloading(true);
    let { data } = await axios.post(
      endpoint + `/message/send/${selectedConversation._id}`,
      Message
    );
    setMessages([...messages, data]);
    setloading(false);
  };
return { SendRequestSendMessage, loading };
}

export default UseSendMessages;
