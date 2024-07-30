import { MODAL_TYPES } from "constants";
import ActiveModalContext from "contexts/ActiveModalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ className = "" }) => {
  const navigate = useNavigate();
  const [, setActiveModal] = useContext(ActiveModalContext);
  const isLoggedIn = Boolean(localStorage.token);

  return (
    <div
      className={`flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white font-dm-sans h-[44px] w-[160px] cursor-pointer ${className}`}
      onClick={() =>
        isLoggedIn ? navigate("/account") : setActiveModal(MODAL_TYPES.LOGIN)
      }
    >
      {isLoggedIn ? "Account" : "Login/Register"}
    </div>
  );
};

export default LoginButton;
