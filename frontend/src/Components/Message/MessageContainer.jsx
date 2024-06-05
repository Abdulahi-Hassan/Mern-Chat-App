import { useEffect } from "react";
import useconversation from "../../zustand/UseConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessage } from "react-icons/ti";

function MessageContainer() {
 const {selectedConversation,setselectedConversation} =useconversation()
  
 useEffect(()=>{
return setselectedConversation(null)
 },[setselectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {!selectedConversation ? (
        <NewChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 py-2 mb-2 text-center">
            <span className="label-text "></span>
            <span className="text-gray-900 font-bold">{selectedConversation.FullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NewChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-clip text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome f Liibaan </p>
        <p>Select a chat to tart messaging</p>
        <TiMessage className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
