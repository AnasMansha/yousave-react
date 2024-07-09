import { SCREEN_SIZES } from "constants";

export const getScreenSize = (width) => {
  if (width < 600) {
    return SCREEN_SIZES.sm;
  } else if (width >= 600 && width < 800) {
    return SCREEN_SIZES.md;
  } else if (width >= 800 && width < 1024) {
    return SCREEN_SIZES.lg;
  } else {
    return SCREEN_SIZES.xl;
  }
};
