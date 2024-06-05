import axios from "axios";
import { endpoint } from "../App";
axios.defaults.withCredentials=true
import { useEffect, useState } from "react";
function UseGetConversations() {
  const [loading, setloading] = useState(false);
  const [GetConversations, setGetConversations] = useState([]);
  useEffect(() => {
    const SendRequestGetConversation = async () => {
      setloading(true);
      let { data } = await axios.get(endpoint + "/users",{withCredentials:true});
      setGetConversations(data);
      setloading(false)
    };
    SendRequestGetConversation();
  },[]);
  return { GetConversations, loading };
}

export default UseGetConversations;
