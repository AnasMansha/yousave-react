import { SCREEN_SIZES } from "constants";

export const getScreenSize = (width) => {
  if (width < 640) {
    return SCREEN_SIZES.sm;
  } else if (width >= 640 && width < 768) {
    return SCREEN_SIZES.md;
  } else if (width >= 768 && width < 1024) {
    return SCREEN_SIZES.lg;
  } else {
    return SCREEN_SIZES.xl;
  }
};
