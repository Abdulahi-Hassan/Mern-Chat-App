import { CiLogout } from "react-icons/ci";
import UseLogout from "../../hooks/UserLogout";

function LogOut() {
  const { SendRequestLogout, loading } = UseLogout();
  return (
    <div className="mt-auto  ">
      {!loading ? (
        <CiLogout
          className="w-6 h-6 text-white cursor-pointer"
          onClick={SendRequestLogout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogOut;
