import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import Home from "pages/Home";
import Results from "pages/Results";
import Account from "pages/Account";
import Product from "pages/Product";
import Login from "pages/Login";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "constants";
import AdminLogin from "pages/admin/AdminLogin";
import UserData from "pages/admin/UserData";
import SearchData from "pages/admin/SearchData";
import LoginModal from "components/common/LoginModal";
import ActiveModalContext from "contexts/ActiveModalContext";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="App font-montserrat">
      <Router>
        <Wrapper>
          <ActiveModalContext.Provider value={[activeModal, setActiveModal]}>
            <Toaster options={toastOptions} />
            <LoginModal />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/search" element={<Results />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/admin/login" element={<AdminLogin />}></Route>
              <Route path="/admin/user-data" element={<UserData />}></Route>
              <Route path="/admin/search-data" element={<SearchData />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </ActiveModalContext.Provider>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
