import Home_header from "components/home-components/header";
import HomeBanner from "components/home-components/Banner";
import ComparePrice from "components/home-components/Compareprice";
import ThreeClickSection from "components/home-components/ThreeClickSection";
import Footer from "components/Footer";
const Home = () => {
  return (
    <>
     <Home_header/>
      <HomeBanner/>
      <ComparePrice/>
      <ThreeClickSection/>
      <Footer/>

  

     
    </>
  );
};

export default Home;