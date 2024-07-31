import { useContext, useState } from "react";
import CustomDialog from "components/common/CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES, toastOptions } from "constants/index";
import CustomInput from "components/common/CustomInput";
import toast from "react-hot-toast";
import { login } from "utils/apis/auth";
import { findMessage } from "utils";

const LoginModal = ({ open, onClose }) => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleLogin = async () => {
    let error = null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) error = "Please enter email";
    else if (!emailRegex.test(email))
      error = "Please enter a valid email address";
    else if (!password.trim()) error = "Please enter password";

    if (error) return setError(error);

    const loginPromise = login(email, password);

    toast.promise(
      loginPromise,
      {
        loading: "logging in",
        success: "login successful",
        error: (error) => findMessage(error, "Invalid Email or Password!"),
      },
      toastOptions
    );
    const data = await loginPromise;
    localStorage.setItem("token", data.token);
    setActiveModal(null);

    setTimeout(() => window.location.reload(), 2000);
  };

  const openSignupModal = () => {
    setActiveModal(null);
    setTimeout(() => {
      setActiveModal(MODAL_TYPES.SIGNUP);
    }, 100);
  };

  const openForgetPasswordModal = () => {
    setActiveModal(null);
    setTimeout(() => {
      setActiveModal(MODAL_TYPES.FORGOT_PASSWORD);
    }, 100);
  };

  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.LOGIN}
      onClose={() => setActiveModal(null)}
      noPadding
    >
      <div
        className="form-page mx-auto w-[80vw] sm:w-[50vw] md:w-[50vw] p-10 bg-white shadow-lg"
        style={{
          padding: "2.5%",
          boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="input-form">
          <h3 className="text-3xl md:text-5xl font-bold text-center">Log In</h3>
          <div className="mb-3">
            <CustomInput
              placeholder={"Enter Email"}
              onChange={setEmail}
              className="form-control w-full h-12 border border-black-300 mt-2 p-3 border-black"
            />
          </div>
          <div className="mb-3">
            <CustomInput
              placeholder={"Enter Password"}
              type="password"
              onChange={setPassword}
              className="form-control w-full h-12 border border-gray-300 mt-2 p-3"
            />
            <span>
              <p
                className="forgot_password_text text-right text-blue-500 cursor-pointer mt-2"
                onClick={openForgetPasswordModal}
              >
                Forgot Password?
              </p>
            </span>
          </div>
          <div className="mb-3">
            <button
              className="form-page-button w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              type="button"
              onClick={handleLogin}
              id="loginButton"
              style={{ borderRadius: "25px", background:"#43b1e0"}}
            >
              Login
            </button>
          </div>
          {error && <div className="mb-3 text-red-500">{error}</div>}
          <div className="mb-3">
            <a href="https://yousave.ai/api/googlelogin">
              <button
                type="button"
                className="login-with-google-btn w-full h-12 bg-white border text-black rounded-lg hover:bg-white"
              >
                Sign in with Google
              </button>
            </a>
          </div>
          <div
            className="signup-deb-container text-center mt-4 cursor-pointer"
            onClick={openSignupModal}
          >
            <button
              className="signup-deb bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-lg p-2"
              style={{ borderRadius: "25px" }}
            >
              Don’t have an account? Sign up
            </button>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default LoginModal;
