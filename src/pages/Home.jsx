import Footer from "components/common/Footer";
import HomeHeader from "components/home/Header";
import HomeBanner from "components/home/Banner";
import ComparePrice from "components/home/Compareprice";
import ThreeClickSection from "components/home/ThreeClickSection";
import { useEffect } from "react";
import { search } from "utils/apis/product";
const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <ComparePrice />
      <ThreeClickSection />
      <Footer />
    </>
  );
};

export default Home;
