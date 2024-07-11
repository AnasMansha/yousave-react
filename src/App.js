import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "pages/Home";
import Product from "pages/Product";
import Account from "pages/Account";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "constants";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="App font-montserrat">
      <Router>
        <Wrapper>
          <Toaster options={toastOptions} />
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/account" element={<Account />}></Route>
          </Routes>
          {/* <Footer /> */}
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
