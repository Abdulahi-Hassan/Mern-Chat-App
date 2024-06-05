import { UseAuthor } from "../../Context/Auth-context";
import useconversation from "../../zustand/UseConversation";

function Message({message}) {

  const {selectedConversation}=useconversation()
  const {author}=UseAuthor();
  let frome=message.SendID===author._id
  const ChatClassName=frome ? "Chat-end" : "Chat-start"
  const ProfilePic=frome ?  author.Profile : selectedConversation?.Profile
  const BublebgColor=frome ? "bg-blue-500" :"black"
  console.log(message)

  return (
    <div className={`chat ${ChatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-14 rounded-full">
          <img src={ProfilePic}/>
        </div>
      </div>
      <div className={`chat-bubble text-white ${BublebgColor}`} >{message.Message}</div>
      <div className="chat-footer opacity-50 text-xs gap-1 items-center " > 12:42</div>
    </div>
  );
}

export default Message;
