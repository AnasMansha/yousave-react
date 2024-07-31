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
import { Toaster } from "react-hot-toast";
import { toastOptions } from "constants";
import AdminLogin from "pages/admin/AdminLogin";
import UserData from "pages/admin/UserData";
import SearchData from "pages/admin/SearchData";
import LoginModal from "components/modals/LoginModal";
import ActiveModalContext from "contexts/ActiveModalContext";
import SignupModal from "components/modals/SignupModal";
import Cart from "pages/Cart";
import AndroidInstallGuideModal from "components/modals/AndroidInstallGuideModal";
import IOSInstallGuideModal from "components/modals/IOSInstallGuideModal";
import ForgotPasswordModal from "components/common/ForgotPasswordModal";
import ImageGalleryModal from "components/common/ImageGalleryModal";
import ContactUs from "pages/Contact";
import PrivacyPolicy from "pages/PrivacyPolicy";
import TermsAndCondition from "pages/TermsAndCondition";
import ABoutUS from "pages/AboutUs";
import Blog from "pages/Blog";
import DigitalArt from "components/blogpost/DigitalArt";
import IPadGeneration from "components/blogpost/IPadGeneration";

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
            <SignupModal />
            <AndroidInstallGuideModal />
            <IOSInstallGuideModal />
            <ForgotPasswordModal />
            <ImageGalleryModal />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/search" element={<Results />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/admin/login" element={<AdminLogin />}></Route>
              <Route path="/admin/user-data" element={<UserData />}></Route>
              <Route path="/admin/search-data" element={<SearchData />}></Route>
              <Route
                path="/product/:productName/:productId"
                element={<Product />}
              ></Route>
              <Route path="/product/:productId" element={<Product />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
              <Route
                path="/terms-and-conditions"
                element={<TermsAndCondition />}
              ></Route>
              <Route path="/about" element={<ABoutUS />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/blog/DigitalArt" element={<DigitalArt />}></Route>
              <Route
                path="/blog/IPadGeneration"
                element={<IPadGeneration />}
              ></Route>
            </Routes>
          </ActiveModalContext.Provider>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
