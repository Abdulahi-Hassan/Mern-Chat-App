import { useEffect, useRef } from "react";
import UseGetUseGetMessage from "../../hooks/UseGetMessage";
import MessageSkeletons from "../skeletons/MessageSkeletons";
import Message from "./Message";
import UseListMessage from "../../hooks/UseListMessage";
function Messages() {
  const { messages, loading } = UseGetUseGetMessage();
  UseListMessage()
  const lastmessage = useRef();
  useEffect(() => {
  setTimeout(() => {
    lastmessage.current?.scrollIntoView({
      behavior: "smooth"
     })
  }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((data, index) => (
          <div key={index} ref={lastmessage} >
            <Message  message={data} />
          </div>
        ))}

        {loading && [...Array()].map((_, index) =><MessageSkeletons key={index}/>)}
        {!loading && messages.length === 0 && (
          <p>Send a message to start conversation</p>
        ) }
    </div>
  );
}

export default Messages;
