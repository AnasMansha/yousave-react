import { SCREEN_SIZES } from "constants";
import useScreenSize from "hooks/useScreenSize";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "resources/icons/cart.svg";
import LoginButton from "./LoginButton";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const screenSize = useScreenSize();
  const isMobileScreen = screenSize <= SCREEN_SIZES.md;

  const isLoggedIn = Boolean(localStorage.token);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim()) {
      // Navigate to the search results page with the query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      {isMobileScreen ? (
        <header className="mt-5 mb-5 flex px-4">
          <div className="w-full text-center">
            <div>
              <a href="index.html">
                <img
                  src="https://yousave.ai/img/new-logo.webp"
                  alt="Logo"
                  className="mx-auto w-2/5 sm:w-2/5" // Adjusted width for mobile and tablet
                />
              </a>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="input-group flex items-center w-11/12 mx-auto h-[40px] border-2 border-orange-500 rounded-full">
                  <input
                    required
                    className="search-input flex-grow h-full border-none rounded-full pl-4 pr-4 text-xs font-montserrat"
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
        <header className="mt-5 mb-5 flex pt-10 px-4 lg:px-0">
          <div className="w-full flex items-center justify-between">
            <div className="w-1/4 flex justify-start">
              <a href="/">
                <img
                  src="https://yousave.ai/img/new-logo.webp"
                  alt="Logo"
                  className="w-[200px] md:w-3/5 sm:w-3/5" // Adjusted width for tablet and mobile
                />
              </a>
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
            <div className="w-1/4 flex justify-center items-center px-10">
              <div className="flex items-center">
                <LoginButton
                  className={isLoggedIn && "w-[120px] lg:w-[160px]"}
                />
              </div>
              {isLoggedIn && (
                <img
                  className="ml-5 w-10 h-10 cursor-pointer"
                  src={Cart}
                  alt="cart"
                  onClick={() => navigate("/cart")}
                />
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
};
export default Header;
