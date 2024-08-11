import { toastOptions } from "constants";
import { jwtDecode } from "jwt-decode"; // Correct import
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { findMessage, validateSignup } from "utils";
import { signup } from "utils/apis/auth";

const UserInfo = () => {
  const token = localStorage.token;
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      toast.success("You logged out", toastOptions);
    }, 500);
    navigate("/");
  };

  const signUpExternal = async () => {
    const name = document.getElementById("SignupName").value;
    const email = document.getElementById("SignupEmail").value;
    const password = document.getElementById("SignupPassword").value;
    const confirmPassword = document.getElementById(
      "SignupConfirmPassword",
    ).value;

    let error = validateSignup(name, email, password, confirmPassword);

    if (error) return setError(error);

    const signupPromise = signup(email, name, password);

    toast.promise(
      signupPromise,
      {
        loading: "Creating account",
        success: "Account creation successful!",
        error: (error) => findMessage(error, "Failed to signup"),
      },
      toastOptions,
    );
    const data = await signupPromise;
    localStorage.setItem("token", data.token);
    setTimeout(() => {
      navigate("/account");
    }, 2000);
  };

  if (!token)
    return (
      <div className="flex flex-col items-center mt-20">
        {/* <div className=" text-3xl font-medium mb-2">
          You are currently logged out
        </div>
        <div
          className="mt-4 px-5 py-2 rounded-[5px] text-white bg-[#F4551B] hover:bg-[#f4551bee] cursor-pointer"
          onClick={() => setActiveModal(MODAL_TYPES.LOGIN)}
        >
          Login / Sign up
        </div> */}
        <section className="account-details min-h-[30rem] text-center mt-10">
          <div id="account-signup-form" className="account-signup-form flex">
            <div>
              <img
                className="signup-decor-image-1"
                src="https://yousave.ai/img/bell.png"
                alt="Bell"
              />
            </div>
            <div className="w-full max-w-lg mx-auto">
              <p className="text-2xl mb-0 font-bold leading-tight">
                Sign up and get
              </p>
              <p className="text-2xl mb-2 font-bold">
                early access to these features:
              </p>
              <ol className="flex flex-col list-disc text-left w-56 mx-auto mb-5">
                <li>
                  <b>Personal List</b>
                </li>
                <li>
                  <b>Personal Alerts</b>
                </li>
                <li>
                  <b>Upcoming Features</b>
                </li>
                <li>
                  <b>Pre-set Preferences</b>
                </li>
              </ol>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="border w-5/6 p-2"
                    id="SignupName"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="border w-5/6 p-2"
                    id="SignupEmail"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="border w-5/6 p-2"
                    id="SignupPassword"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="border w-5/6 p-2"
                    id="SignupConfirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mb-3">
                  <p className="text-red-500">{error}</p>
                </div>
                <div className="mb-3">
                  <button
                    className="form-page-button bg-gradient-to-r from-[#FF9600] to-[#F44001] max-w-md mx-auto py-2 px-6 rounded-full text-white"
                    type="button"
                    onClick={signUpExternal}
                  >
                    Sign Up Now
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img
                className="signup-decor-image-2"
                src="https://yousave.ai/img/redbookmark.png"
                alt="Bookmark"
              />
            </div>
          </div>
        </section>
      </div>
    );

  const user = jwtDecode(token);

  return (
    <section className="mb-10 text-center">
      <div id="account-information">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-medium mb-2">Your account</div>
          <div>
            <div>
              <b>Name: </b>
              {user.name}
            </div>
          </div>
          <div>
            <div>
              <b>Email: </b>
              {user.email}
            </div>
          </div>
          <div
            className="mt-3 px-5 py-2 rounded-[5px] text-white bg-[#F4551B] hover:bg-[#f4551bee] cursor-pointer"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
