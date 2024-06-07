import { useState } from "react";
import { BsSend } from "react-icons/bs";
import UseSendMessages from "../../hooks/UseMessages";
function MessageInput() {
  const [Message, setMessage] = useState("");
  const { loading, SendRequestSendMessage } = UseSendMessages();
  const HandleMessage = (e) => {
    e.preventDefault();
    if (!Message) return;
    SendRequestSendMessage({ Message });
    setMessage("");
  };
  return (
    <form onClick={HandleMessage}>
      <div className="px-4 my-3">
        <div className="w-full relative">
          <input
            placeholder="Send a Message"
            type="text"
            className="border text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 text-white block w-full "
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3 "
          >
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default MessageInput;
