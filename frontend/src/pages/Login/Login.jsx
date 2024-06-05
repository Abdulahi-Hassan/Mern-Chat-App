import { useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../../hooks/UseLogin";
function Login() {
  const [login, setlogin] = useState({
    Email: "",
    Password: "",
  });

  const { SendRequestLogin,loading } = UseLogin();
  const HandleLogin = (e) => {
    e.preventDefault();
    SendRequestLogin(login);
  };
  return (
    <div className="flex flex-col items-center min-w-96 max-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={HandleLogin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              value={login.Email}
              onChange={(e) =>
                setlogin({ Email: e.target.value, Password: login.Password })
              }
              type="text"
              placeholder="Enter Your E-mail"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={login.Password}
              onChange={(e) =>
                setlogin({ Password: e.target.value, Email: login.Email })
              }
              type="text"
              placeholder="Enter Your Password"
              className="input input-bordered h-10 w-full"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2 " disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner">loading</span>
              ) : (
                "SignUp"
              )}
            </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
