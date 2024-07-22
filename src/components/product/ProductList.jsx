import React, { useState } from "react";

const ProductList = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showSpecifications, setShowSpecifications] = useState(false);
  return (
    <>

{/* Product list content goes here */}
<div className="product-detail mb-10">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4">
          <img
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
            alt="Main Product Image"
            className="w-full h-3/5 object-contain custom-img-container "
          />
        </div>

        <div className="w-full md:w-2/3 px-4">
          <h3 id="productName" className="product-detailsh3 font-bold text-3xl">
            Apple iPhone 11 64GB (Unlocked) - White (Refurbished)
          </h3>

          <div className="flex space-x-4 mt-2">
            <a href="#" onClick={() => alert('Title copied to input bar')}>
              <img src="https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/arrow-up.svg" className="share-logo" />
            </a>
            <a href="#" onClick={() => alert('Shared on Facebook')}>
              <img src="https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/facebook.svg" className="share-logo" />
            </a>
            <a href="#" onClick={() => alert('Shared on Twitter')}>
              <img src="https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/twitter.svg" className="share-logo" />
            </a>
            <a href="#" onClick={() => alert('Added to cart')}>
              <img src="https://www.yousave.ai/Apple-iPhone-11-64gb-Unlocked-White-Refurbished/img/AddToCart.svg" className="share-logo opacity-50" id="cart-img" />
            </a>
          
          </div>
          <ul className="list-inline mt-4 flex flex-wrap">
            <li className="list-inline-item w-1/3 md:w-1/6">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
                alt="Main Image"
                className="w-2/5 mx-auto custom-img-container"
              />
            </li>
            <li className="list-inline-item w-1/3 md:w-1/6">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
                alt="Main Image"
                className="w-2/5 mx-auto custom-img-container"
              />
            </li>

            <li className="list-inline-item w-1/3 md:w-1/6">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
                alt="Main Image"
                className="w-2/5 mx-auto custom-img-container"
              />
            </li>

            <li className="list-inline-item w-1/3 md:w-1/6">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
                alt="Main Image"
                className="w-2/5 mx-auto custom-img-container"
              />
            </li>

            <li className="list-inline-item w-1/3 md:w-1/6">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
                alt="Main Image"
                className="w-2/5 mx-auto custom-img-container"
              />
            </li>

            <li className="list-inline-item w-1/3 md:w-1/6">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
                alt="Main Image"
                className="w-2/5 mx-auto custom-img-container"
              />
            </li>
            <li className="list-inline-item w-1/3 md:w-1/6">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmfI-oeZseh5N1Ju27u3KZoRfH3iM_e-gewgWTQv-IRj8nGsO230zb3fS0Jqpeg8Hg3dsFtDTtBbPrvqfViKmMFqWjS0jU&amp;usqp=CAY"
                alt="Main Image"
                className="w-2/5 mx-auto custom-img-container"
              />
            </li>
            
            
            {/* Add the remaining images similarly */}
          </ul>
          <p
            className="mt-3 text-xl flex items-center cursor-pointer"
            onClick={() => setShowDescription(!showDescription)}
          >
            <a id="viewMoreLink">View Description</a>
            <img
              id="viewMoreLinkImg"
              src="img/caret-down.png"
              className="toggle-btn"
              style={{ display: "none" }}
            />
          </p>
          {showDescription && (
            <p id="productDescription">
              Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with long-lasting battery life. Worry less with water resistance up to 2 meters for 30 minutes.
            </p>
          )}
          <p
            className="mt-3 text-xl flex items-center cursor-pointer"
            onClick={() => setShowSpecifications(!showSpecifications)}
          >
            <a id="viewSpecificationsLink">View Specification</a>
            <img
              id="viewSpecificationsLinkImg"
              src="img/caret-down.png"
              className="toggle-btn"
              style={{ display: "none" }}
            />
          </p>
          {showSpecifications && (
            <div id="productSpecification">
              <div>
                <strong>Carrier:</strong> UNLOCKED
              </div>
              <div>
                <strong>Color:</strong> WHITE
              </div>
              <div>
                <strong>Operating system:</strong> IOS
              </div>
              <div>
                <strong>Storage capacity:</strong> 64GB
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
 );
};

export default ProductList;