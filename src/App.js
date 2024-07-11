import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "pages/Home";
import Product from "pages/Product";
import { Toaster } from "react-hot-toast";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Toaster />
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
          {/* <Footer /> */}
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
