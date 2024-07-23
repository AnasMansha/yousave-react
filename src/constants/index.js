export const SCREEN_SIZES = {
  sm: 0,
  md: 1,
  lg: 2,
  xl: 3,
};
export const toastOptions = {
  position: "top-center",
  style: {
    background: "white",
    color: "black",
    border: "2px solid black",
    margin: "3px",
  },
  duration: 2000,
};
export const storeMerchants = {
  Amazon: "merchagg:g113872638%7Cm114193152",
  Ebay: "merchagg:g6296794%7Cm6296724%7Cm5357798824%7Cm107002098%7Cm5305509992%7Cm8081574",
  Target:
    "merchagg:g8299768%7Cg784994%7Cm8175035%7Cm131190896%7Cm5362969717%7Cm118786874%7Cm10046",
  "Best buy": "merchagg:g7187155%7Cm1311674",
  "Lowe's": "merchagg:g7187155%7Cg105707641%7Cm1311674%7Cm3136905",
  Walmart:
    "merchagg:g8299768%7Cm8175035%7Cm131190896%7Cm5362969717%7Cm118786874",
  "Home Depot": "merchagg:m8740",
  Wallgreens: "merchagg:g8666297%7Cm10037",
  "Marcy's": "merchagg:g118286685%7Cm7866",
  NordStrom: "merchagg:g126673057%7Cm1243147",
  "Kohl's": "merchagg:g102279194%7Cm6382239",
  "Bed Bath & Beyond": "merchagg:g117385181%7Cm2890843%7Cm5310640674",
  "J.C. Penney": "merchagg:m1577725",
  Microsoft: "merchagg:m110886443,merchagg:m537522259",
  Apple: "merchagg:g101179491%7Cm3622330",
  "Toys R Us": "merchagg:m500054530",
  Samsung: "merchagg:g113089546%7Cm113074110",
  Etsy: "merchagg:g6830041%7Cm12768591%7Cm123878792%7Cm126880309%7Cm469747648%7Cm122747000",
  "Macy's": "merchagg:g118286685%7Cm7866",
  Dell: "merchagg:g103307420%7Cm7827",
  Zara: "merchagg:g120843307%7Cm124669283",
  Wayfair: "merchagg:g533401%7Cm5117101",
  Nike: "merchagg:g109116125%7Cm4178394",
};

export const prefrencesConditions = ["Refurbished", "Open Box", "New", "Used"];

export const DEFAULT_PREFRENCES = {
  stores: [],
  conditions: [],
  price_limits: [1, 99999],
  reviews: 5,
};

export const MODAL_TYPES = {
  LOGIN: "Login",
  SIGNUP: "Signup",
  FORGOT_PASSWORD: "ForgotPassword",
  INSTALL_GUIDE_ANDROID: "InstallGuideAndroid",
  INSTALL_GUIDE_IOS: "InstallGuideIOS",
};

export const OS_TYPES = {
  ANDROID: "android",
  IOS: "ios",
  OTHER: "other",
};

export const SORT_TYPES = {
  PRICE: "Price",
  REVIEWS: "Reviews",
  SHIPPING: "Shipping",
  PRICE_AND_SHIPPING: "Price + Shipping",
};
