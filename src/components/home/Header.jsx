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
    <>
      <section>
        <div className="flex justify-center items-center pt-4 md:pt-12 lg:pt-12">
          <a href="#">
            <img
              className="mx-auto block w-6/12 md:w-8/12 lg:w-6/12 xl:w-4/12"
              src="https://yousave.ai/img/new-logo.webp"
              alt="Logo"
            />
          </a>
        </div>

        <div className="text-center pt-2 md:pt-12 lg:pt-12">
          <div className="font-montserrat text-2xl text-4xl md:text-6x5 lg:text-6xl font-semibold leading-[61px]">
            Save Money, Save Faster
          </div>
          <div className="font-montserrat text-xl font-large sm:pt-2 md:pt-8 lg:pt-8">
            Compare prices and get the best deal!
          </div>
        </div>
        <div className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="relative w-11/12 md:w-8/12 lg:w-6/12 xl:w-6/12 2 mx-auto h-14 rounded-full border-2 border-orange-280 flex justify-between shadow-[0_0_0_2.5px_rgba(255,92,0,1)]">
              <input
                required
                className="search-input flex-grow h-full border-none rounded-full pl-4 pr-4 text-lg font-montserrat outline-none"
                type="text"
                placeholder="Search over 2 billion products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <div className="flex justify-center items-center font-montserrat text-xl font-medium sm:pt-2 md:pt-6 lg:pt-6">
            Total saved with yousave globally: $58.9k
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
