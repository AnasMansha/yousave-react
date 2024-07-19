import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const useGoogleAuth = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const googleLogin = () => {
    navigate(`/api/googleLogin?redirectUrl="${location.pathname}"`);
  };

  const queryParams = new URLSearchParams(location.search);

  const login = queryParams.get("login");
  const token = queryParams.get("token");
  const message = queryParams.get("message");

  useEffect(() => {
    if (login || token) {
      if (login === "successful") {
        localStorage.setItem("token", token);
        toast.success("Login successful!");
      } else {
        toast.error(message || "Unable to login using google");
      }
    }
  }, [login, token, message]);

  return googleLogin;
};

export default useGoogleAuth;
