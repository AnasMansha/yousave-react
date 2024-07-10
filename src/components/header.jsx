const Header = () => {
    return (
      <>
<header className="hidden md:block mt-20 mb-20">
            <div className="container mx-auto">
                <div className="flex flex-row">

                    <div className="w-1/4">
                        <a href="index.html">
                            <img src="img/new-logo.webp" alt="" className="max-w-215" />
                        </a>
                    </div>

                    <div className="w-1/2">
                        <form action="result.html" method="get">
                            <div className="relative">
                                <input required className="search-input w-full py-2 px-4 rounded-full border-2 border-orange-500" type="text" placeholder="Search over 2 billion products" name="search_query" id="search_querys_desktop" />
                                <button type="submit" className="search-button absolute right-0 top-0 mt-2 mr-3">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="w-1/4 flex justify-center items-center">
                        <ul className="flex items-center">
                            <li className="hidden md:block">
                                <a href="#" onClick={() => showLoginForm()} className="cursor-pointer">
                                    <button className="login-deb">Login / Sign up</button>
                                </a>
                            </li>
                            <li id="accountLink" className="block">
                                <a href="#" onClick={() => showAccount()} className="cursor-pointer">
                                    <button className="login-deb">Account</button>
                                </a>
                            </li>
                        </ul>
                        <div className="hidden md:block items-center ml-4" id="cart-icon">
                            <a href="cart.html">
                                <img src="img/cart.svg" className="cart-icon" alt="Cart" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
     </>
    )
  
  
  };
  
  export default Header;
  