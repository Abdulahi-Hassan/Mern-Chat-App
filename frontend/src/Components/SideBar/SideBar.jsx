import MessageContainer from "../Message/MessageContainer";
import Conversations from "./Conversations";
import LogOut from "./LogOut";
import SearchInput from "./SearchInput";
function SideBar() {
  return (
    <div className="border-slate-500 p-4 flex flex-col">
      <SearchInput />
      {/* <MessageContainer/> */}
      <div className="divider px-3"></div>
      <Conversations />
      <LogOut/>
    </div>
  );
}

export default SideBar;
