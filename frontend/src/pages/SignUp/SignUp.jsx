import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import UseSignUp from "../../hooks/UseSignUp";

function SignUp() {
  const [SignUp, setSignUp] = useState({
    Email: "",
    Password: "",
    FullName: "",
    Gender: "",
  });

  const { SendRequestSignUp, loading } = UseSignUp();

  const HandleCheckboxChange = (Gender) => {
    setSignUp({ ...SignUp, Gender });
  };

  const HandleSignUp = (e) => {
    e.preventDefault();
    SendRequestSignUp(SignUp);
  };
  return (
    <div className="flex flex-col items-center min-w-96 max-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={HandleSignUp}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              value={SignUp.FullName}
              onChange={(e) =>
                setSignUp({
                  ...SignUp,
                  FullName: e.target.value,
                })
              }
              type="text"
              placeholder="Enter Your E-mail"
              className="input input-bordered h-10 w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              value={SignUp.Email}
              onChange={(e) =>
                setSignUp({
                  ...SignUp,
                  Email: e.target.value,
                })
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
              value={SignUp.Password}
              onChange={(e) =>
                setSignUp({
                  ...SignUp,
                  Password: e.target.value,
                })
              }
              type="text"
              placeholder="Enter Your Password"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <GenderCheckbox
            OnCheckBoxChange={HandleCheckboxChange}
            SelectedGender={SignUp.Gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 " disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner">loading</span>
              ) : (
                "SignUp"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
