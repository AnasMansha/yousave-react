import { useContext, useState } from "react";
import CustomDialog from "../common/CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES, toastOptions } from "constants/index";
import CustomInput from "../common/CustomInput";
import toast from "react-hot-toast";
import { signup } from "utils/apis/auth";
import { useNavigate } from "react-router-dom";
import { findMessage, validateSignup } from "utils";

const SignupModal = ({ open, onClose }) => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async () => {
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
      toastOptions
    );
    const data = await signupPromise;
    localStorage.setItem("token", data.token);
    setActiveModal(null);
    setTimeout(() => {
      navigate("/account");
    }, 2000);
  };

  const openLoginModal = () => {
    setActiveModal(null);
    setTimeout(() => {
      setActiveModal(MODAL_TYPES.LOGIN);
    }, 100);
  };

  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.SIGNUP}
      onClose={() => setActiveModal(null)}
      noPadding
    >
      <div
        className="form-page mx-auto w-[80vw] sm:w-[40vw] md:w-[45vw] p-10 bg-white shadow-lg"
        style={{
          padding: "2.5%",
          boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="input-form">
          <h3 className="text-2xl md:text-5xl font-bold text-center mb-4">Sign Up</h3>
          <h4 className="text-center text-1xl md:text-2xl mb-6">
            Get Early Access To These Features
          </h4>
          <div className="mb-1">
            <div className="flex items-center justify-between">
              <div className="w-1/4">
                <img
                  src="https://yousave.ai/img/notification-alert-3d-icon-png%201.svg"
                  alt=""
                  className="w-3/4"
                />
              </div>
              <div className="w-1/2 flex justify-center font-bold	">
                <ul className="list-inside md:text-lg " style={{listStyle:"inside"}}>
                  <li>Personal List</li>
                  <li>Personal Alerts</li>
                  <li>Personal features</li>
                </ul>
              </div>
              <div className="w-1/4">
                <img
                  src="https://yousave.ai/img/4042326%201.svg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <CustomInput
              placeholder={"Enter Name"}
              onChange={setName}
              className="form-control w-full h-12 border border-black	mt-2 p-3"
            />
          </div>
          <div className="mb-3">
            <CustomInput
              placeholder={"Enter Email"}
              onChange={setEmail}
              className="form-control w-full h-12 border border-gray-300 mt-2 p-3"
            />
          </div>
          <div className="mb-3">
            <CustomInput
              placeholder={"Enter Password"}
              type="password"
              onChange={setPassword}
              className="form-control w-full h-12 border border-gray-300 mt-2 p-3"
            />
          </div>
          <div className="mb-3">
            <CustomInput
              placeholder={"Confirm Password"}
              type="password"
              onChange={setConfirmPassword}
              className="form-control w-full h-12 border border-gray-300 mt-2 p-3"
            />
          </div>
          {error && <div className="mb-3 text-red-500">{error}</div>}
          <div className="mb-3">
            <button
              className="form-page-button w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              type="button"
              onClick={handleSignup}
              style={{ borderRadius: "25px", background:"#43b1e0"}}
            >
              Sign Up
            </button>
          </div>
          <div className="mb-3">
            <a href="https://yousave.ai/api/googlelogin">
              <button
                type="button"
                className="login-with-google-btn w-full h-12  text-black rounded-lg hover:bg-red-600"
              >
                Sign up with Google
              </button>
            </a>
          </div>
          <div
            className="signup-deb-container text-center mt-4 cursor-pointer"
            onClick={openLoginModal}
          >
            <button
              className="signup-deb bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-lg p-2"
              style={{ borderRadius: "25px" }}
            >
              Already have an account? Log in
            </button>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default SignupModal;
