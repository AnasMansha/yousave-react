import { toastOptions } from "constants";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { findMessage } from "utils";

import { adminLogin } from "utils/apis/auth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (loader) return;
    setLoader(true);
    try {
      const loginPromise = adminLogin(email, password);

      toast.promise(
        loginPromise,
        {
          loading: "Logging in",
          success: "Login successful",
          error: (error) => findMessage(error, "Invalid email or password"),
        },
        toastOptions,
      );

      const token = await loginPromise;
      localStorage.setItem("token", token);

      setTimeout(() => navigate("/admin/user-data"), 1000);
      setLoader(false);
    } catch (e) {
      setLoader(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-center w-full mt-10">
      <div className="p-[2.5%] w-11/12 md:w-1/2 flex flex-col items-center shadow-xl bg-opacity-20">
        <div className="text-5xl font-bold">Log In</div>
        <input
          className="w-full h-11 border-solid border-[1px] border-black px-3 py-[6px] rounded-none mt-4"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
        <input
          className="w-full h-11 border-solid border-[1px] border-black px-3 py-[6px] rounded-none mt-4"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
        <button
          onClick={handleLogin}
          className="w-full h-11 mt-4 bg-blue-500 text-white rounded-none hover:bg-blue-600 transition duration-200"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
