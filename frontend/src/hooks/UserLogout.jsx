import axios from "axios";
import toast from "react-hot-toast";
import { UseAuthor } from "../Context/Auth-context";
import { endpoint } from "../App";
import { useState } from "react";
function UseLogout() {
  const { setauthor } = UseAuthor();
  const [loading, setloading] = useState(false);
  const SendRequestLogout = async () => {
    setloading(true);
    let { data } = await axios.post(endpoint + "/auth/logout");
    if (data.status === "Success") {
      toast.success(data.message);
      localStorage.removeItem("chat-user");
      setauthor(null);
      setloading(false);
    } else {
      toast.error(data);
    }
  };
  return { SendRequestLogout };
}

export default UseLogout;
