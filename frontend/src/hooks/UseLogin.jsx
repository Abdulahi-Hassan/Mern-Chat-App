import axios from "axios";
import toast from "react-hot-toast";
import { UseAuthor } from "../Context/Auth-context";
import { endpoint } from "../App";
import { useState } from "react";
function UseLogin() {
  const { setauthor } = UseAuthor();
  const [loading,setloading]=useState(false)
  const SendRequestLogin = async (login) => {
    setloading(true)
    let { data } = await axios.post(endpoint+"/auth/login", login);
    if (data.status === "Success") {
      toast.success(data.message);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setauthor(data);
      setloading(false)
    } else {
      setloading(false)

      toast.error(data);
    }
  };
  return { SendRequestLogin,loading };
}

export default UseLogin;
