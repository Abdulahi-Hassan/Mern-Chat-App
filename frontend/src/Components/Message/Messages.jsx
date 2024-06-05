import UseGetUseGetMessage from "../../hooks/UseGetMessage";
import MessageSkeletons from "../skeletons/MessageSkeletons";
import Message from "./Message";

function Messages() {
  const { messages, loading } = UseGetUseGetMessage();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages.map((data,index)=>  <Message message={data} key={index}/>
      )}
      {loading && [...Array(3).map((_,index)=><MessageSkeletons key={index}/> )]}
      {!loading && messages.length === 0 && (
        <p className="text-center">send a message to start the conversation</p>
      )}
     
    </div>
  );
}

export default Messages;
