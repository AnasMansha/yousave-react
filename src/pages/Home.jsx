import Footer from "components/common/Footer";
import HomeHeader from "components/home/Header";
import OurMember from "components/home/OurMember";
import ComparePrice from "components/home/Compareprice";
import ThreeClickSection from "components/home/ThreeClickSection";
import { useContext, useEffect } from "react";
import { getOperatingSystem } from "utils";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES, OS_TYPES } from "constants/index";
const Home = () => {
  const [, setActiveModal] = useContext(ActiveModalContext);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();

      debugger;
      const os = getOperatingSystem();

      let itemName = "last-install-guide-popup-timestamp";

      if (os === OS_TYPES.ANDROID || os === OS_TYPES.IOS) {
        let lastShown = localStorage.getItem(itemName);

        if (lastShown === null || lastShown === "") {
          if (os === OS_TYPES.ANDROID)
            setActiveModal(MODAL_TYPES.INSTALL_GUIDE_ANDROID);
          else if (os === OS_TYPES.IOS)
            setActiveModal(MODAL_TYPES.INSTALL_GUIDE_IOS);

          localStorage.setItem(itemName, Date.now());
        } else {
          let previousTimestamp = parseInt(lastShown);
          let currentTimestamp = Date.now();
          let oneDay = 24 * 60 * 60 * 1000;

          if (currentTimestamp - previousTimestamp > oneDay) {
            if (os === OS_TYPES.ANDROID)
              setActiveModal(MODAL_TYPES.INSTALL_GUIDE_ANDROID);
            else if (os === OS_TYPES.IOS)
              setActiveModal(MODAL_TYPES.INSTALL_GUIDE_IOS);

            localStorage.setItem(itemName, Date.now());
          }
        }
      }
    });
  }, [setActiveModal]);

  return (
    <>
      <HomeHeader />
      <ComparePrice />
      <ThreeClickSection />
      <OurMember/>
      <Footer />
    </>
  );
};

export default Home;
