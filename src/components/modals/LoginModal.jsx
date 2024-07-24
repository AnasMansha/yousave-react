import { useContext, useState } from "react";
import CustomDialog from "components/common/CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES, toastOptions } from "constants/index";
import CustomInput from "components/common/CustomInput";
import toast from "react-hot-toast";
import { login } from "utils/apis/auth";

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
        error: loginPromise.error || "failed to login",
      },
      toastOptions
    );
    const data = await loginPromise;
    localStorage.setItem("token", data.token);
    setActiveModal(null);
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
      title="Log In"
    >
      <CustomInput placeholder={"Enter Email"} onChange={setEmail} />
      <CustomInput
        placeholder={"Enter Password"}
        type="password"
        onChange={setPassword}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <div className=" text-red-500">{error}</div>}
      <div>Sign in with google</div>
      <div className="cursor-pointer" onClick={openSignupModal}>
        Don’t have an account? Sign up
      </div>
      <div className="cursor-pointer" onClick={openForgetPasswordModal}>
        Forgot Password
      </div>
    </CustomDialog>
  );
};

export default LoginModal;
