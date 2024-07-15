import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "pages/Home";
import Results from "pages/Results";
import Account from "pages/Account";
import Product from "pages/Product";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "constants";
import AdminLogin from "pages/admin/AdminLogin";
import UserData from "pages/admin/UserData";
import SearchData from "pages/admin/SearchData";

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
            <Route path="/search" element={<Results />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/admin/login" element={<AdminLogin />}></Route>
            <Route path="/admin/user-data" element={<UserData />}></Route>
            <Route path="/admin/search-data" element={<SearchData />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
          {/* <Footer /> */}
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
