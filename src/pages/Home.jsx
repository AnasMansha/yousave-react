const Home = () => {
  return (
    <>
      {/* Home Logo */}
      <section>
        <div className="logo sm:pt-2 flex justify-center items-center">
          <div className="logo-main w-full mx-auto sm:pt-6">
            <a href="#">
              <img
                className="mx-auto block sm:w-1/12 md:w-4/12 lg:w-3/12"
                src="https://yousave.ai/img/new-logo.webp"
                alt="Logo"
              />
            </a>
          </div>
        </div>
        <div className="text-center sm:pt-2 md:pt-12 lg:pt-12">
          <h3 className="font-montserrat text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[61px]">
            Save Money, Save Faster
          </h3>
          <p className="font-montserrat text-xl font-medium sm:pt-2 md:pt-12 lg:pt-12">
            Compare prices and get the best deal!
          </p>
        </div>
        <div className="pt-12">
          <form action="result.html" className="md:block" method="get">
            <div className="relative w-3/4 sm:w-6/12  mx-auto h-14 rounded-full border-2 border-orange-280 flex justify-between shadow-[0_0_0_2.5px_rgba(255,92,0,1)]">
              <input
                required
                className="w-[calc(100%-60px)] max-w-full h-full border-none rounded-full pl-3 pr-3 text-lg font-montserrat"
                type="text"
                placeholder="Search over 2 billion products"
                name="search_query"
                id="search_querys_desktop"
              />
              <button
                type="submit"
                className="border-none rounded-r-full bg-transparent cursor-pointer flex items-center text-orange-500 h-full"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* End Home Logo */}
    </>
  );
};

export default Home;
