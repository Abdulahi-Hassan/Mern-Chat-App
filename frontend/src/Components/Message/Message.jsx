import { useEffect } from "react";
import { UseAuthor } from "../../Context/Auth-context";
import useconversation from "../../zustand/UseConversation";
import {Extractimes} from "../Times/Extractimes";
function Message({ message }) {
  const { selectedConversation,setselectedConversation } = useconversation();
  const { author } = UseAuthor();
  let frome = message.SendID === author._id;
  const ChatClassName = frome ? "chat-end" : "chat-start";
  const ProfilePic = frome ? author.Profile : selectedConversation?.Profile;
  const BublebgColor = frome ? "bg-blue-500" : "";
  const Time =Extractimes(message.createdAt);
  const shouldShake=message.shouldShake ? "shake" : ""
  return (
    <div className={`chat ${ChatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-14 rounded-full">
          <img src={ProfilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 ${BublebgColor} ${shouldShake}`}>
        {message.Message}
      </div>
      <div className="chat-footer opacity-100 text-xs gap-1 items-center ">
        {Time
}
      </div>
    </div>
  );
}

export default Message;
