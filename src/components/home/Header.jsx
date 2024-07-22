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
      <section className="bg-home-slider">
      <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
      >
        <div className="bg-white bg-opacity-75 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Save Money, Save Faster</h1>
          <p className="text-lg mb-8">Compare prices across millions of products and get the best deals!</p>
          <div className="relative w-2/3 lg:w-1/3">
            <input
              type="text"
              placeholder="Search over 2 billion products"
              className="w-full p-3 rounded shadow-md focus:outline-none"
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
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {['KOHL\'S', 'Amazon', 'Walmart', 'Sears', 'Macy\'s', 'JCPenney', 'Walgreens', 'eBay', 'Lowe\'s'].map((brand) => (
              <div key={brand} className="bg-white px-4 py-2 shadow-md rounded-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
       
      </section>
    </>
  );
};

export default HomeHeader;
