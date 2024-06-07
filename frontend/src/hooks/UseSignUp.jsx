import axios from "axios";
import toast from "react-hot-toast";
import { UseAuthor } from "../Context/Auth-context";
import { endpoint } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function UseSignUp() {
  const { setauthor } = UseAuthor();
  const [loading, setloading] = useState(false);
  const SendRequestSignUp = async (SignUp) => {
    setloading(true);
    let { data } = await axios.post(endpoint + "/auth/signup", SignUp,{withCredentials:true});
    if (data.status === "Success") {
      toast.success(data.message);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setauthor(data);
      setloading(false);;
    } else {
      toast.error(data);
      setloading(false);
    }
  };
  return { SendRequestSignUp ,loading};
}

export default UseSignUp;
