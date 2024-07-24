import { MODAL_TYPES } from "constants/index";
import { toastOptions } from "constants";
import ActiveModalContext from "contexts/ActiveModalContext";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [, setActiveModal] = useContext(ActiveModalContext);
  const token = localStorage.token;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      toast.success("You logged out", toastOptions);
    }, 500);
    navigate("/");
  };

  if (!token)
    return (
      <div className="flex flex-col items-center mt-20">
        <div className=" text-3xl font-medium mb-2">
          You are currently logged out
        </div>
        <div
          className="mt-4 px-5 py-2 rounded-[5px] text-white bg-[#F4551B] hover:bg-[#f4551bee] cursor-pointer"
          onClick={() => setActiveModal(MODAL_TYPES.LOGIN)}
        >
          Login / Sign up
        </div>
      </div>
    );

  const user = jwtDecode(token);
  return (
    <div className="flex flex-col items-center">
      <div className=" text-3xl font-medium mb-2">Your account</div>
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
  );
};

export default UserInfo;
