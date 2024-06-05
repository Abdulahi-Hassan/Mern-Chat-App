import useconversation from "../../zustand/UseConversation";

function Conversation({ conversation }) {
  const { selectedConversation, setselectedConversation } = useconversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}
      
      
      
      `}
        onClick={() => setselectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src={conversation.Profile} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.FullName}</p>
            <span className="text-xl">Emoji</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
}

export default Conversation;
