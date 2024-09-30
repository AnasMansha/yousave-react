import React, { Suspense, useLayoutEffect, useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "./fonts.css";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "constants";
import ActiveModalContext from "contexts/ActiveModalContext";
import Footer from "components/home/Footer";
import { Helmet } from "react-helmet";
import { getTitle } from "utils";
import LoginModal from "components/modals/LoginModal";
import SignupModal from "components/modals/SignupModal";
import AndroidInstallGuideModal from "components/modals/AndroidInstallGuideModal";
import IOSInstallGuideModal from "components/modals/IOSInstallGuideModal";
import ForgotPasswordModal from "components/common/ForgotPasswordModal";
import ImageGalleryModal from "components/common/ImageGalleryModal";
import Home from "pages/Home";
import PopularProductswithPrice from "components/blogpost/PopularProductswithPrice";

const Results = React.lazy(() => import("pages/Results"));
const Account = React.lazy(() => import("pages/Account"));
const Product = React.lazy(() => import("pages/Product"));
const AdminLogin = React.lazy(() => import("pages/admin/AdminLogin"));
const UserData = React.lazy(() => import("pages/admin/UserData"));
const SearchData = React.lazy(() => import("pages/admin/SearchData"));
const Cart = React.lazy(() => import("pages/Cart"));
const ContactUs = React.lazy(() => import("pages/Contact"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const TermsAndCondition = React.lazy(() => import("pages/TermsAndCondition"));
const ABoutUS = React.lazy(() => import("pages/AboutUs"));
const Blogs = React.lazy(() => import("pages/Blogs"));
const DigitalArt = React.lazy(() => import("components/blogpost/DigitalArt"));
const IPadGeneration = React.lazy(() =>
  import("components/blogpost/IPadGeneration")
);
const SecurityTechnlogy = React.lazy(() =>
  import("components/blogpost/SecurityTechnlogy")
);
const MasteringTheArt = React.lazy(() =>
  import("components/blogpost/MasteringtheArtofSavvyShopping")
);
const ComparisonSitesInTheUSA = React.lazy(() =>
  import("components/blogpost/ComparisonSitesInTheUSA")
);
const UnbeatableDeals = React.lazy(() =>
  import("components/blogpost/UnbeatableDeals")
);
const UnleashSavings = React.lazy(() =>
  import("components/blogpost/UnleashSavings")
);
const TrendingProducts = React.lazy(() =>
  import("components/blogpost/TrendingProducts")
);
const MaximizingSavings = React.lazy(() =>
  import("components/blogpost/MaximizingSavings")
);

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <Helmet>
        <title>{getTitle(location.pathname) || "Price Comparison"}</title>
      </Helmet>
      {children}
    </div>
  );
};

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="App font-montserrat">
      <Suspense fallback={<div></div>}>
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
                <Route
                  path="/admin/search-data"
                  element={<SearchData />}
                ></Route>
                <Route
                  path="/product/:productName/:productId"
                  element={<Product />}
                ></Route>
                <Route path="/product/:productId" element={<Product />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/contact" element={<ContactUs />}></Route>
                <Route
                  path="/privacy-policy"
                  element={<PrivacyPolicy />}
                ></Route>
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndCondition />}
                ></Route>
                <Route path="/about" element={<ABoutUS />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/blog/DigitalArt" element={<DigitalArt />}></Route>
                <Route
                  path="/blog/Mastering-of-The-Art"
                  element={<MasteringTheArt />}
                ></Route>
                <Route
                  path="/blog/Comparison-Sites-In-The-USA"
                  element={<ComparisonSitesInTheUSA />}
                ></Route>
                <Route
                  path="/blog/UnbeatableDeals"
                  element={<UnbeatableDeals />}
                ></Route>
                <Route
                  path="/blog/MaximizingSavings"
                  element={<MaximizingSavings />}
                ></Route>
                <Route
                  path="/blog/UnleashSavings"
                  element={<UnleashSavings />}
                ></Route>

                <Route
                  path="/blog/IPadGeneration"
                  element={<IPadGeneration />}
                ></Route>
                <Route
                  path="/blog/SecurityTechnlogy"
                  element={<SecurityTechnlogy />}
                ></Route>

                <Route
                  path="/blog/TrendingProducts"
                  element={<TrendingProducts />}
                ></Route>
                <Route
                  path="/blog/MaximizingSaving"
                  element={<MaximizingSavings />}
                ></Route>
                <Route
                  path="/blog/UnleashSavings"
                  element={<UnleashSavings />}
                ></Route>
                <Route
                  path="/blog/PopularProductswithPrice"
                  element={<PopularProductswithPrice />}
                ></Route>
              </Routes>
            </ActiveModalContext.Provider>
          </Wrapper>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
