import { MODAL_TYPES } from "constants/index";
import { toastOptions } from "constants";
import ActiveModalContext from "contexts/ActiveModalContext";
import { InvalidTokenError, jwtDecode } from "jwt-decode"; // Correct import
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [, setActiveModal] = useContext(ActiveModalContext);
  const token = localStorage.token;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      toast.success("You logged out", toastOptions);
    }, 500);
    navigate("/");
  };

  const handleCheckboxChange = (e) => {
    // Handle checkbox change
  };

  const handlePriceChange = (e) => {
    // Handle price change
  };

  const handleReviewsChange = (e) => {
    // Handle reviews change
  };

  const signUpExternal = () => {
    // Handle external sign up
  };

  const [preferences, setPreferences] = useState({
    stores: [],
    conditions: [],
    priceRange: { min: 0, max: 0 },
    reviews: 0,
  });

  if (!token)
    return (
      <div className="flex flex-col items-center mt-20">
        {/* <div className=" text-3xl font-medium mb-2">
          You are currently logged out
        </div>
        <div
          className="mt-4 px-5 py-2 rounded-[5px] text-white bg-[#F4551B] hover:bg-[#f4551bee] cursor-pointer"
          onClick={() => setActiveModal(MODAL_TYPES.LOGIN)}
        >
          Login / Sign up
        </div> */}
        <section className="account-details min-h-[30rem] text-center mt-10">
          <div id="account-signup-form" className="account-signup-form flex">
            <div>
              <img className="signup-decor-image-1" src="https://yousave.ai/img/bell.png" alt="Bell" />
            </div>
            <div className="w-full max-w-lg mx-auto">
              <p className="text-2xl mb-0 font-bold leading-tight">Sign up and get</p>
              <p className="text-2xl mb-2 font-bold">early access to these features:</p>
              <ol className="flex flex-col list-disc text-left w-56 mx-auto mb-5">
                <li><b>Personal List</b></li>
                <li><b>Personal Alerts</b></li>
                <li><b>Upcoming Features</b></li>
                <li><b>Pre-set Preferences</b></li>
              </ol>
              <form>
                <div className="mb-3">
                  <input type="text" className="border w-5/6 p-2" id="SignupName" placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                  <input type="email"  className="border w-5/6 p-2" id="SignupEmail" placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="border w-5/6 p-2" id="SignupPassword" placeholder="Enter Password" />
                </div>
                <div className="mb-3">
                  <input type="password" className="border w-5/6 p-2" id="SignupConfirmPassword" placeholder="Confirm Password" />
                </div>
                <div className="mb-3">
                  <p className="signError" id="SignupError"></p>
                </div>
                <div className="mb-3">
                  <button
                    className="form-page-button bg-gradient-to-r from-[#FF9600] to-[#F44001] max-w-md mx-auto py-2 px-6 rounded-full text-white"
                    type="button"
                    onClick={signUpExternal}
                  >
                    Sign Up Now
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img className="signup-decor-image-2" src="https://yousave.ai/img/redbookmark.png" alt="Bookmark" />
            </div>
          </div>
        </section>
      </div>
    );

  const user = jwtDecode(token);

  return (
    <section className=" min-h-[30rem] text-center">
      <div className="prefrences mt-12" id="prefrences">
        <h2>Your Preferences</h2>
        <h5 className="prefrences-info" id="prefrences-info">Please login to manage preferences</h5>
        <h3>Stores:</h3>
        <div className="prefrences-radio-list" id="prefrences-store-list" style={{ userSelect: "none" }}>
          <form id="storeForm">
            <fieldset className="inline-block">
              <label className="mr-4 cursor-pointer">
                <input type="checkbox" name="store" value="Walmart" onChange={handleCheckboxChange} />
                Walmart
              </label>
              <label className="mr-4 cursor-pointer">
                <input type="checkbox" name="store" value="Amazon" onChange={handleCheckboxChange} />
                Amazon
              </label>
              {/* Add other store checkboxes similarly */}
            </fieldset>
          </form>
        </div>
        <h3>Condition:</h3>
        <div className="prefrences-radio-list" id="prefrences-condition-list">
          <form>
            <fieldset className="inline-block">
              <label className="mr-4 cursor-pointer">
                <input type="checkbox" name="condition" value="Refurbished" onChange={handleCheckboxChange} />
                Refurbished
              </label>
              <label className="mr-4 cursor-pointer">
                <input type="checkbox" name="condition" value="Open Box" onChange={handleCheckboxChange} />
                Open Box
              </label>
              {/* Add other condition checkboxes similarly */}
            </fieldset>
          </form>
        </div>
        <h3>Data:</h3>
        <div className="flex mb-5">
          <div className="mr-2"><b>Price</b> Within</div>
          <form>
            <input type="number" id="price-min" name="price-min" min="1" step="10" pattern="\d*" className="w-24" onChange={handlePriceChange} />
            <span>and</span>
            <input type="number" id="price-max" name="price-max" min="1" step="10" pattern="\d*" className="w-24" onChange={handlePriceChange} />
          </form>
        </div>
        <div className="flex">
          <div className="mr-2"><b>Reviews</b> Within</div>
          <form>
            <select id="reviews" name="level" onChange={handleReviewsChange}>
              <option value="4">4+ ☆</option>
              <option value="3">3+ ☆</option>
              <option value="2">2+ ☆</option>
              <option value="1">1+ ☆</option>
            </select>
          </form>
        </div>
      </div>

      <div id="account-information">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-medium mb-2">Your account</div>
          <div>
            <div>
              <b>Name: </b>
              {user.name}
            </div>
          </div>
          <div>
            <div>
              <b>Email: </b>
              {user.email}
            </div>
          </div>
          <div
            className="mt-3 px-5 py-2 rounded-[5px] text-white bg-[#F4551B] hover:bg-[#f4551bee] cursor-pointer"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
