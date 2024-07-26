import { MODAL_TYPES } from "constants/index";
import { SCREEN_SIZES } from "constants";
import ActiveModalContext from "contexts/ActiveModalContext";
import useScreenSize from "hooks/useScreenSize";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const screenSize = useScreenSize();
  const isMobileScreen = screenSize <= SCREEN_SIZES.md;

  const isLoggedIn = Boolean(localStorage.token);

  const [, setActiveModal] = useContext(ActiveModalContext);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim()) {
      // Navigate to the search results page with the query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLoginClick = () => {
    if (isLoggedIn) navigate("/account");
    else setActiveModal(MODAL_TYPES.LOGIN);
  };

  return (
    <>
      {isMobileScreen ? (
        <header className="mt-5 mb-5 flex">
          <div className="w-full text-center">
            <div>
              <a href="index.html">
                <img
                  src="https://yousave.ai/img/new-logo.webp"
                  alt="Logo"
                  className="mx-auto"
                />
              </a>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="input-group flex items-center w-full h-14 border-2 border-orange-500 rounded-full mx-auto">
                  <input
                    required
                    className="search-input flex-grow h-full border-none rounded-full pl-4 pr-4 text-lg font-montserrat"
                    type="text"
                    placeholder="Search over 2 billion products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    id="searchbar-input"
                  />
                </div>
              </form>
            </div>
          </div>
        </header>
      ) : (
        <header className="mt-5 mb-5 flex pt-10">
          <div className="w-full flex items-center  justify-between">
            <div className="w-1/4 flex justify-start">
              <img
                src="https://yousave.ai/img/new-logo.webp"
                alt="Logo"
                className="w-[200px] cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="w-1/2 justify-center">
              <form onSubmit={handleSubmit}>
                <div className="input-group flex items-center w-full h-14 border-2 border-orange-500 rounded-full mx-auto">
                  <input
                    required
                    className="search-input flex-grow h-full border-none rounded-full pl-4 pr-4 text-lg font-montserrat"
                    type="text"
                    placeholder="Search over 2 billion products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    id="searchbar-input"
                  />
                </div>
              </form>
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <div
                className="flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white font-dm-sans h-[44px] w-[160px] cursor-pointer"
                onClick={handleLoginClick}
              >
                {isLoggedIn ? "Account" : "Login/Signup"}
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
export default Header;
