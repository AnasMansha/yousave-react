const Header = () => {
  return (
    <>
      <header className="hidden md:block mt-20 mb-20">
        <div className="mx-auto">
          <div className="flex flex-row">
            <div className="w-1/12">
              <a href="index.html">
                <img
                  src="https://yousave.ai/img/new-logo.webp"
                  alt=""
                  className="max-w-215"
                />
              </a>
            </div>

            <div className="w-1/2">
              <form action="result.html" method="get">
                <div className="relative">
                  <input
                    required
                    className="search-input w-full py-2 px-4 rounded-full border-2 border-orange-500"
                    type="text"
                    placeholder="Search over 2 billion products"
                    name="search_query"
                    id="search_querys_desktop"
                  />
                  <button
                    type="submit"
                    className="search-button absolute right-0 top-0 mt-2 mr-3"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
