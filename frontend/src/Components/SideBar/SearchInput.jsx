import { FaSearch } from "react-icons/fa";
import UseGetConversations from "../../hooks/UseGetConversations";
import useconversation from "../../zustand/UseConversation";
import toast from "react-hot-toast";
import { useState } from "react";

function SearchInput() {
  const {GetConversations}=UseGetConversations()
  const {setselectedConversation}=useconversation()
  const [Search, setSearch] = useState("");
  const HandleSearch=(e)=>{
    e.preventDefault()
    if(!Search) return;
    if(Search.length < 3){
      return toast.error("Please Search must be 3 characters")
    }
    const conversation=GetConversations.find((s)=>s.FullName.toLowerCase().includes(Search));
    if(conversation){
      setselectedConversation(conversation)
    }else{
      return toast.error("Conversation Found")

    }
    setSearch("")

  }
  return (
    <form onSubmit={HandleSearch} className="flex items-center gap-2">
    <input value={Search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered rounded-full " />
     <button type="submit" className="btn btn-circle bg-sky-500 text-white">
       <FaSearch/>
     </button>
    </form>
  )
}

export default SearchInput