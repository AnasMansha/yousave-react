import { toastOptions } from "constants";
import { prefrencesConditions } from "constants";
import { storeMerchants } from "constants";
import useDebounce from "hooks/useDebounce";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getPreferences, updatePreferences } from "utils/apis/prefrences";

const Stores = ({ prefrences, setPrefrences, onUpdate }) => {
  const storeNames = Object.keys(storeMerchants);

  const handleCheckboxToggle = (store, isChecked) => {
    const stores = prefrences.stores;
    const storeIndex = stores.indexOf(store);

    if (isChecked && storeIndex === -1) {
      stores.push(store);
    } else if (!isChecked && storeIndex !== -1) {
      stores.splice(storeIndex, 1);
    }
    setPrefrences({ ...prefrences, stores });
    onUpdate();
  };

  return (
    <div className="max-w-[80%] mb-6">
      <div className="text-3xl font-medium">Stores:</div>
      <div className="flex flex-wrap justify-center">
        {storeNames.map((store, index) => (
          <label className="text-lg mr-4 mb-2" key={index}>
            <input
              type="checkbox"
              name="store"
              value={store}
              className="mr-1"
              checked={prefrences.stores.includes(store)}
              onChange={(checkbox) =>
                handleCheckboxToggle(store, checkbox.target.checked)
              }
            />
            {store}
          </label>
        ))}
      </div>
    </div>
  );
};

const Conditions = ({ prefrences, setPrefrences, onUpdate }) => {
  const handleCheckboxToggle = (condition, isChecked) => {
    const conditions = prefrences.conditions;
    const conditionIndex = conditions.indexOf(condition);

    if (isChecked && conditionIndex === -1) {
      conditions.push(condition);
    } else if (!isChecked && conditionIndex !== -1) {
      conditions.splice(conditionIndex, 1);
    }
    setPrefrences({ ...prefrences, conditions });
    onUpdate();
  };

  return (
    <div className="max-w-[80%] mb-6">
      <div className="text-3xl font-medium">Condition:</div>
      <div className="flex flex-wrap justify-center">
        {prefrencesConditions.map((condition, index) => (
          <label className="text-lg mr-4 mb-2" key={index}>
            <input
              type="checkbox"
              name="condition"
              value={condition}
              className="mr-1"
              checked={prefrences.conditions.includes(condition)}
              onChange={(checkbox) =>
                handleCheckboxToggle(condition, checkbox.target.checked)
              }
            />
            {condition}
          </label>
        ))}
      </div>
    </div>
  );
};

const PriceAndReviews = ({ prefrences, setPrefrences, onUpdate }) => {
  const handlePriceChange = (price, isMinPrice = false) => {
    let Price = parseFloat(price);
    if (Price < 0) Price = 0;
    if (isMinPrice) {
      const minPrice =
        Price < prefrences.price_limits[1] ? Price : prefrences.price_limits[1];
      prefrences.price_limits[0] = minPrice;
    } else {
      const maxPrice =
        Price > prefrences.price_limits[0] ? Price : prefrences.price_limits[0];
      prefrences.price_limits[1] = maxPrice;
    }
    updatePreferences(prefrences);
    onUpdate();
  };

  const handleReviewsChange = (reviews) => {
    setPrefrences({ ...prefrences, reviews: parseInt(reviews) });
    onUpdate();
  };

  return (
    <div className="max-w-[80%] mb-6">
      <div className="text-3xl font-medium">Data:</div>
      <div className="flex justify-center mt-2 mb-4">
        <div>
          <b className="mr-1">Price</b>Within
        </div>
        <input
          className=" w-20 border-[1px] mx-2 border-black"
          type="number"
          id="price-min"
          name="price-min"
          min="1"
          step="10"
          pattern="\d*"
          onChange={(event) => handlePriceChange(event.target.value, true)}
          value={prefrences.price_limits[0]}
        />
        <div>and</div>
        <input
          className=" w-20 border-[1px] mx-2 border-black"
          type="number"
          id="price-max"
          name="price-max"
          min="1"
          step="10"
          pattern="\d*"
          onChange={(event) => handlePriceChange(event.target.value)}
          value={prefrences.price_limits[1]}
        />
      </div>
      <div className="flex justify-center">
        <div className="mr-2">
          <b className="mr-1">Reviews</b>Within
        </div>
        <select
          id="reviews"
          name="level"
          onChange={(selector) => handleReviewsChange(selector.target.value)}
          className="border-[1px] border-black"
        >
          <option value="4">4+ ☆</option>
          <option value="3">3+ ☆</option>
          <option value="2">2+ ☆</option>
          <option value="1">1+ ☆</option>
        </select>
      </div>
    </div>
  );
};

const Prefrences = () => {
  const [prefrences, setPrefrences] = useState(null);

  const updatePreferencesDeferred = useDebounce(
    () =>
      updatePreferences(prefrences).then(() =>
        toast.success("prefrences updated", toastOptions)
      ),
    1000
  );

  useEffect(() => {
    const fetchPrefrences = async () => {
      const data = await getPreferences();
      setPrefrences(data);
    };
    if (localStorage.token) fetchPrefrences();
  }, []);

  if (!prefrences) return null;
  return (
    <div
      className="flex flex-col items-center text-center mb-12 mt-14"
      id="prefrences"
    >
      <div className="text-3xl font-medium">Your Prefrences</div>
      <div className="text-xl mb-8" id="prefrences-info">
        (Choose from top retailers to have them sorted with 1 click)
      </div>

      <Stores
        prefrences={prefrences}
        setPrefrences={setPrefrences}
        onUpdate={updatePreferencesDeferred}
      />
      <Conditions
        prefrences={prefrences}
        setPrefrences={setPrefrences}
        onUpdate={updatePreferencesDeferred}
      />
      <PriceAndReviews
        prefrences={prefrences}
        setPrefrences={setPrefrences}
        onUpdate={updatePreferencesDeferred}
      />
    </div>
  );
};

export default Prefrences;
