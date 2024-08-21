import LoginButton from "components/common/LoginButton";
import { SCREEN_SIZES } from "constants";
import useScreenSize from "hooks/useScreenSize";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchIcon() {
  return (
    <svg
      className="w-6 h-6 text-gray-600 hover:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <line
        x1="16.5"
        y1="16.5"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

const HomeHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  const screenSize = useScreenSize();
  const isMobileScreen = screenSize <= SCREEN_SIZES.md;

  return (
    <div className="relative w-full h-[650px] md:mb-[100px]">
      <div
        className="absolute inset-0 bg-cover bg-bottom md:h-[750px]"
        style={{
          backgroundImage: `url('/assets/images/Mask-group.webp')`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0">
        <div className="hidden md:flex top-0 left-0 w-full justify-between items-center px-20 pb-4 pt-8">
          <img
            src="/assets/images/logo.svg"
            alt="YouSave Logo"
            className="h-12"
          />
          <LoginButton />
        </div>
        <div className="flex flex-col items-center justify-start mt-10">
          <img
            src="/assets/images/logo.svg"
            alt="YouSave Logo"
            className="h-10 mb-8 md:hidden"
          />
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-center font-space-grotesk">
            Save Money, Save Faster
          </h1>
          <p className="text-md md:text-lg lg:text-xl font-medium mb-8 font-montserrat text-center px-2 opacity-70">
            Compare prices across millions of products and get the best deals!
          </p>
          <div className="bg-[#3E3E3E] bg-opacity-20 backdrop-blur-md p-4 md:p-8 mx-4 lg:mx-0 w-11/12 lg:w-7/12 flex flex-col items-center rounded-2xl">
            <div className="relative w-full lg:w-11/12 mb-8">
              <input
                type="text"
                placeholder="Search over 2 billion products"
                className="w-full p-5 rounded-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  e.key === "Enter" && handleSubmit(e);
                }}
              />
              <button
                className="absolute right-0 top-0 mt-5 mr-3"
                onClick={handleSubmit}
              >
                <SearchIcon />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
              {[
                {
                  name: "KOHL'S",
                  src: "/assets/images/brands/Mask group.webp",
                },
                {
                  name: "Amazon",
                  src: "/assets/images/brands/Mask group (1).webp",
                },
                {
                  name: "Walmart",
                  src: "/assets/images/brands/Mask group (2).webp",
                },
                {
                  name: "Sears",
                  src: "/assets/images/brands/Mask group (3).webp",
                },
                {
                  name: "Macy's",
                  src: "/assets/images/brands/Mask group (4).webp",
                },
                {
                  name: "JCPenney",
                  src: "/assets/images/brands/Mask group (5).webp",
                },
                {
                  name: "Walgreens",
                  src: "/assets/images/brands/Mask group (6).webp",
                },
                {
                  name: "eBay",
                  src: "/assets/images/brands/Mask group (7).webp",
                },
                !isMobileScreen && {
                  name: "Lowe's",
                  src: "/assets/images/brands/Mask group (8).webp",
                },
                !isMobileScreen && {
                  name: "Target",
                  src: "/assets/images/brands/Mask group (9).webp",
                },
              ]
                .filter(Boolean)
                .map((brand) => (
                  <div
                    key={brand.name}
                    className="md:px-4 py-2 flex justify-center items-center"
                  >
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="w-28 h-5 object-contain md:h-6"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
