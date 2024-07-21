import { SCREEN_SIZES } from "constants";
import useScreenSize from "hooks/useScreenSize";

const ComparePrice = () => {
  const screenSize = useScreenSize();
  const isMobileScreen = screenSize <= SCREEN_SIZES.md;
  return (
    <>
      
    </>
  );
};

export default ComparePrice;
