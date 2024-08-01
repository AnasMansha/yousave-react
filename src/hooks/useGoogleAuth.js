import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { getAppBaseUrl } from "utils";

const useGoogleAuth = () => {
  const location = useLocation();

  const googleLogin = () => {
    window.location.href = `https://yousave.ai/api/googlelogin?redirectUrl=${
      getAppBaseUrl() + location.pathname
    }`;
  };

  const queryParams = new URLSearchParams(location.search);

  const login = queryParams.get("login");
  const token = queryParams.get("token");
  const message = queryParams.get("message");

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.token && (login || token)) {
      if (login === "successful") {
        localStorage.setItem("token", token);
        navigate(window.location.pathname, { replace: true });
        toast.success("Login successful!");
      } else {
        toast.error(message || "Unable to login using google");
      }
    }
  }, [login]);

  return googleLogin;
};

export default useGoogleAuth;
