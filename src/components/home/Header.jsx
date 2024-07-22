import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim()) {
      // Navigate to the search results page with the query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative w-full h-screen bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/Mask-group.png')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      ></div>
      <div className="absolute inset-0 bg-white bg-opacity-50">
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4">
          <img src="/assets/images/logo.svg" alt="YouSave Logo" className="h-12" />
          <div className="flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white font-dm-sans h-[44px] w-[160px]">
                Login/Register
           </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-24">
          <h1 className="text-4xl font-bold mb-4">Save Money, Save Faster</h1>
          <p className="text-lg mb-8">Compare prices across millions of products and get the best deals!</p>
          <div className="bg-neutral-300 p-8 w-10/12 lg:w-7/12 flex flex-col items-center rounded-2xl">
            <div className="relative w-full lg:w-11/12 mb-16">
              <input
                type="text"
                placeholder="Search over 2 billion products"
                className="w-full p-3 rounded focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 mt-3 mr-3" onClick={handleSubmit}>
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 4.35a7.5 7.5 0 010 10.3z"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {[
                { name: "KOHL'S", src: "/assets/images/brands/Mask group.png" },
                { name: "Amazon", src: "/assets/images/brands/Mask group (1).png" },
                { name: "Walmart", src: "/assets/images/brands/Mask group (2).png" },
                { name: "Sears", src: "/assets/images/brands/Mask group (3).png" },
                { name: "Macy's", src: "/assets/images/brands/Mask group (4).png" },
                { name: "JCPenney", src: "/assets/images/brands/Mask group (5).png" },
                { name: "Walgreens", src: "/assets/images/brands/Mask group (6).png" },
                { name: "eBay", src: "/assets/images/brands/Mask group (7).png" },
                { name: "Lowe's", src: "/assets/images/brands/Mask group (8).png" },
                { name: "Target", src: "/assets/images/brands/Mask group (9).png" },
              ].map((brand) => (
                <div key={brand.name} className="px-4 py-2 flex justify-center items-center w-8/12">
                  <img src={brand.src} alt={brand.name} className="h-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
