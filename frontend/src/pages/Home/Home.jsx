import MessageContainer from "../../Components/Message/MessageContainer";
import SideBar from "../../Components/SideBar/SideBar";

function Home() {
  return(
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-gray-400 bg-clip-padding bg-opacity-0">
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default Home;
