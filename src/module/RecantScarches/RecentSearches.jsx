import React from 'react';
import RecentsSearches from '../../module/RecantScarches/RecentsSearches.json';
import { MdKeyboardAlt } from "react-icons/md";

const RecentSearches = () => {
  // Card component logic encapsulated in the Card component
  const Cards = ({ card }) => {
    const { Data, Title, Travellers,Link } = card; // Destructure the card object

    return (
      <div className="flex w-full">
        <div className="w-80  bg-red-100 bg-opacity-30 rounded-lg shadow-lg ease-in-out border-black border">
          {/* Flex container for the icon and text */}
          <div className="flex items-center p-4 w-full">
            {/* Icon */}
            <div className="border-2 p-2 m-5 rounded-full text-gray-600">
              <MdKeyboardAlt className="text-xl" />
            </div>
            
            {/* Text content */}
            <div className="">
              <a href={Link}>
              <p className="text-lg font-semibold text-gray-800">{Title}</p>
              <p className="text-sm text-gray-600">{Data}</p>
              <p className="text-sm text-gray-600">{Travellers}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex gap-6 justify-start p-6 cursor-grab"
      style={{
        overflowX: "auto",   // Enables horizontal scrolling
        scrollbarWidth: "none",  // Firefox: Hides scrollbar
        msOverflowStyle: "none",  // IE and Edge: Hides scrollbar
      }}
    >
      <style>
        {`
          /* Chrome, Safari, Edge */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      
      {RecentsSearches.map((card) => (
        <Cards key={card.id} card={card} /> // Pass the card prop here
      ))}
    </div>
  );
};

export default RecentSearches;
