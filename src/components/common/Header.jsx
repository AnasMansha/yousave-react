const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="mt-5 mb-5 hidden md:flex">
        <div className="w-full flex items-center  justify-between">
          <div className="w-1/4 flex justify-start">
            <a href="index.html">
              <img
                src="https://yousave.ai/img/new-logo.webp"
                alt="Logo"
                className="w-[200px]"
              />
            </a>
          </div>
          <div className="w-1/2 justify-center">
            <form action="result.html" method="get">
              <div className="input-group flex items-center w-full h-14 border-2 border-orange-500 rounded-full mx-auto">
                <input
                  required
                  className="search-input flex-grow h-full border-none rounded-full pl-4 pr-4 text-lg font-montserrat"
                  type="text"
                  placeholder="Search over 2 billion products"
                  name="search_query"
                  id="search_querys_desktop"
                />
              </div>
            </form>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <div className="flex items-center">
              <ul className="flex space-x-2">
                <li>
                  <div className="flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white font-dm-sans h-[44px] w-[160px]">
                    Account
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Header */}
      <header className="mt-5 mb-5 flex md:hidden">
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
            <form action="result.html" method="get">
              <div className="input-group flex">
                <input
                  required
                  className="search-input flex-grow p-2 border border-gray-300 rounded-l"
                  type="text"
                  placeholder="Search over 2 billion products"
                  name="search_query"
                  id="search_querys_mobile"
                />
                <button
                  type="submit"
                  className="search-button bg-blue-600 text-white p-2 rounded-r"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
