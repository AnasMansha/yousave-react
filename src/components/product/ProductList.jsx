import { MODAL_TYPES } from "constants/index";
import { toastOptions } from "constants/index";
import ActiveModalContext from "contexts/ActiveModalContext";
import ProductDataContext from "contexts/ProductDataContext";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addToCart, getCart, removeFromCart } from "utils/apis/cart";

const Description = ({ description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div
        className="mt-3 text-xl flex items-center cursor-pointer"
        onClick={() => setShowDescription(!showDescription)}
      >
        <div className="select-none cursor-pointer">
          {showDescription ? "Hide Description" : "View Description"}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showDescription ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 px-2" id="productDescription">
          {description || "No description"}
        </p>
      </div>
    </>
  );
};

const Specification = ({ specs }) => {
  const formatKey = (key) => {
    return key
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };

  const [showSpecifications, setShowSpecifications] = useState(false);

  return (
    <>
      <div
        className="mt-3 text-xl flex items-center cursor-pointer"
        onClick={() => setShowSpecifications(!showSpecifications)}
      >
        <div className="select-none cursor-pointer">
          {showSpecifications ? "Hide Specifications" : "View Specifications"}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showSpecifications
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 px-2">
          {specs && Object.keys(specs).length > 0 ? (
            Object.entries(specs).map(([key, value]) => (
              <div key={key} className="mb-1">
                <strong>{formatKey(key)}:</strong> {value}
              </div>
            ))
          ) : (
            <div>No specifications</div>
          )}
        </div>
      </div>
    </>
  );
};

const ProductAction = ({ img, onClick, disabled = false }) => {
  return (
    <div onClick={onClick}>
      <img
        src={img}
        alt="Action Card"
        className={`w-10 h-10 p-[5px] custom-img-container cursor-pointer ${
          disabled ? "opacity-50" : ""
        }`}
      />
    </div>
  );
};

const ProductList = () => {
  const { productData, productComparisons } = useContext(ProductDataContext);

  const specs = productData?.specs;

  const [cartLoading, setCardLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  const [mainImage, setMainImage] = useState(0);

  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  const addTitleToSearchbar = () => {
    const searchbar = document.getElementById("searchbar-input");
    if (searchbar) {
      searchbar.value = productData.title;
      searchbar.focus();
    }
  };

  const shareOnFacebook = () => {
    var currentPageUrl = window.location.href;
    var facebookShareUrl =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(currentPageUrl);
    window.open(facebookShareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    var currentPageUrl = window.location.href;
    var twitterShareUrl =
      "https://twitter.com/intent/tweet?url=" +
      encodeURIComponent(currentPageUrl);
    window.open(twitterShareUrl, "_blank");
  };

  const handleCartAction = async () => {
    if (!localStorage.token) {
      toast.error("Please login to use cart!", toastOptions);
      return setActiveModal(MODAL_TYPES.LOGIN);
    }
    if (cartLoading) return;
    setCardLoading(true);
    try {
      if (addedToCart) {
        await removeFromCart(productData.product_id);
        setAddedToCart(false);
        toast.success("Removed from cart", toastOptions);
      } else {
        await addToCart(
          productData.product_id,
          productData,
          productComparisons
        );
        setAddedToCart(true);
        toast.success("Added to cart", toastOptions);
      }
      setCardLoading(false);
    } catch (e) {
      toast.error(e.message || "Error updating cart!", toastOptions);
      setCardLoading(false);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      const cart = await getCart();
      for (let i = 0; i < cart.length; i += 1) {
        if (cart[i]["product_id"] === productData.product_id)
          setAddedToCart(true);
      }
      setCardLoading(false);
    };

    const token = localStorage.token;
    if (!token || !productData) return;
    fetchCart();
  }, [productData]);

  if (!productData || productComparisons === null)
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-full lg:w-full px-4">
          <div className="animate-pulse rounded-lg p-4">
            <div className="flex">
              <div className="w-1/3 bg-gray-300 h-64 rounded-lg"></div>
              <div className="w-2/3 pl-4">
                <div className="h-8 bg-gray-300 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded mb-2"></div>
                <div className="flex mb-4">
                  <div className="h-10 bg-gray-300 rounded mr-2 w-10"></div>
                  <div className="h-10 bg-gray-300 rounded mx-2 w-10"></div>
                  <div className="h-10 bg-gray-300 rounded mx-2 w-10"></div>
                  <div className="h-10 bg-gray-300 rounded mx-2 w-10"></div>
                </div>
                <div className="h-10 bg-gray-300 rounded mb-2 w-2/3"></div>
                <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
                <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="product-detail mb-10">
        <div className="flex flex-wrap -mx-4">

          <div className="" style={{height:'300px' }}
          ></div>
          <div className="w-full md:w-1/3 px-4">
            <img
            style={{objectfit: 'contain'}}
              src={productData.media[mainImage]?.link}
              alt="Main Product"
              className="w-full h-3/5 object-contain custom-img-container cursor-pointer"
              onClick={() =>
                setActiveModal({
                  type: MODAL_TYPES.IMAGE_GALLERY,
                  images: productData.media.map((media) => media.link),
                  initialImage: mainImage,
                })
              }
            />
          </div>

          <div className="w-full md:w-2/3 px-4">
            <h3
              id="productName"
              className="product-detailsh3 font-bold text-[1rem] md:text-3xl"
            >
              {productData.title}
            </h3>

            <div className="flex space-x-4 mt-2">
              <ProductAction
                img={
                  "https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/arrow-up.svg"
                }
                onClick={addTitleToSearchbar}
              />
              <ProductAction
                img={
                  "https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/facebook.svg"
                }
                onClick={shareOnFacebook}
              />
              <ProductAction
                img={
                  "https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/twitter.svg"
                }
                onClick={shareOnTwitter}
              />
              <ProductAction
                img={
                  addedToCart
                    ? "https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/RemoveFromCart.svg"
                    : "https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/AddToCart.svg"
                }
                onClick={handleCartAction}
                disabled={
                  cartLoading || !productData || productComparisons === null
                }
              />
            </div>
            <ul className="list-inline mt-4 flex flex-wrap">
              {productData.media.map((media, index) => (
                <div key={index} className="list-inline-item w-1/3 md:w-1/6">
                  <img
                    src={media.link}
                    alt="Main"
                    className="w-2/5 mx-auto custom-img-container cursor-pointer"
                    onClick={() => setMainImage(index)}
                  />
                </div>
              ))}
            </ul>
            <Description description={productData.description} />
            <Specification specs={specs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
