import { useContext, useState } from "react";
import CustomDialog from "./CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES, toastOptions } from "constants/index";
import CustomInput from "./CustomInput";
import toast from "react-hot-toast";
import { signup } from "utils/apis/auth";
import { useNavigate } from "react-router-dom";

const SignupModal = ({ open, onClose }) => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async () => {
    let error = null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) error = "Please enter name";
    else if (!email.trim()) error = "Please enter email";
    else if (!emailRegex.test(email))
      error = "Please enter a valid email address";
    else if (!password.trim()) error = "Please enter password";
    else if (confirmPassword.trim() !== password.trim())
      error = "Passwords do not match!";

    if (error) return setError(error);

    const signupPromise = signup(email, name, password);

    toast.promise(
      signupPromise,
      {
        loading: "Creating account",
        success: "Account creation successful!",
        error: signupPromise.error || "failed to signup",
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
      title="Sign Up"
    >
      <CustomInput placeholder={"Enter Name"} onChange={setName} />
      <CustomInput placeholder={"Enter Email"} onChange={setEmail} />
      <CustomInput
        placeholder={"Enter Password"}
        type="password"
        onChange={setPassword}
      />
      <CustomInput
        placeholder={"Confirm Password"}
        type="password"
        onChange={setConfirmPassword}
      />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <div className=" text-red-500">{error}</div>}
      <div>Sign up with google</div>
      <div className="cursor-pointer" onClick={openLoginModal}>
        Already have account? Log in
      </div>
    </CustomDialog>
  );
};

export default SignupModal;
