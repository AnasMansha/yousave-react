import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="border rounded-lg p-4 my-4 shadow-lg bg-white w-full">
      <div className="flex items-center mb-2">
        <img
          src={review.profilePic}
          alt="profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <div className="font-bold text-lg flex items-center">
            {review.title}
            <div className="ml-2 text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  {index < review.rating ? '★' : '☆'}
                </span>
              ))}
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            {review.rating} stars
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-2">{review.description}</p>
      <div className="text-gray-500 text-sm">
        <span className="font-bold">{review.author}</span>
        <span> {review.date} ago from {review.source}</span>
      </div>
    </div>
  );
};

const ReviewList = () => {
  const reviews = [
    {
      profilePic: 'https://via.placeholder.com/40',
      title: 'Great product',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'John Millers',
      date: '2 Days',
      source: 'best buy'
    },
    {
      profilePic: 'https://via.placeholder.com/40',
      title: 'Great product',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'John Millers',
      date: '2 Days',
      source: 'best buy'
    },
    {
      profilePic: 'https://via.placeholder.com/40',
      title: 'Great product',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'John Millers',
      date: '2 Days',
      source: 'best buy'
    },
  ];

  return (
    <div className="w-full mx-auto py-8">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
