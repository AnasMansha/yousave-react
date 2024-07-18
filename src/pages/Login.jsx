import Header from "components/common/Header";
import useGoogleAuth from "hooks/useGoogleAuth";
const Login = () => {
  const googleLogin = useGoogleAuth();

  return (
    <>
      <Header />
      <div
        className="cursor-pointer hover:border-2 hover:border-black m-auto"
        onClick={googleLogin}
      >
        Click Me
      </div>
    </>
  );
};

export default Login;
