import UseGetConversations from "../../hooks/UseGetConversations";
import Conversation from "./Conversation";

function Conversations() {
  const { GetConversations, loading } = UseGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {GetConversations.map((conversation) => (
       <Conversation key={conversation._id} conversation={conversation} />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;
