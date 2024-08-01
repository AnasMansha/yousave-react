import React, { useState } from "react";
import DefaultProfile from "resources/images/product/default_profile.png";

const ReviewCard = ({ review }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleToggleSeeMore = () => {
    setShowFullContent((prevState) => !prevState);
  };

  const displayContent = showFullContent
    ? review.content
    : review.content.length > 300
    ? review.content.slice(0, 300) + "..."
    : review.content;

  return (
    <div className="border rounded-lg p-4 my-4 shadow-lg bg-white w-full">
      <div className="flex items-center mb-2">
        <img
          src={review.profilePic || DefaultProfile}
          alt="profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <div className="font-bold text-lg flex items-center">
            {review.title || "Untitled Review"}
            <div className="ml-2 text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>{index < review.rating ? "★" : "☆"}</span>
              ))}
            </div>
          </div>
          <div className="text-gray-500 text-sm">{review.rating} stars</div>
        </div>
      </div>
      <p className="text-gray-700 mb-2">
        {displayContent}
        {review.content.length > 400 && (
          <button
            onClick={handleToggleSeeMore}
            className="text-blue-500 ml-2 focus:outline-none cursor-pointer"
          >
            {showFullContent ? "Show Less" : "Read More"}
          </button>
        )}
      </p>
      <div className="text-gray-500 text-sm">
        <span className="font-bold">{review.author}</span>
        <span>
          {" "}
          {review.date} from {review.source}
        </span>
      </div>
    </div>
  );
};

const ReviewList = ({ reviews }) => {
  return (
    <div className="w-full mx-auto pt-8">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
