import React, { useState, useEffect, useRef } from 'react';
import imagesWithTitles from '../../module/ImagesWithTitle/imagesWithTitles.json';


const ImagesWithTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);

  // Move to the next image
  const nextImage = () => {
    if (currentIndex < imagesWithTitles.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Move to the previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      const offset = currentIndex * 240; // Adjust the width as needed (240px is the image width)
      imageContainerRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <div className="">
      
      {/* Left button */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          onClick={prevImage}
          className={`bg-gray-800 text-white p-2 rounded-full shadow-lg ${currentIndex === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={currentIndex === 0} // Disable button on the first image
          style={{ marginLeft: '10px' }}
        >
          &#8592;
        </button>
      </div>

      {/* Image Container */}
      <div
        ref={imageContainerRef}
        className="flex w-full overflow-x-auto scrollbar-none "
        style={{
          scrollbarWidth: 'none', // For Firefox, hide scrollbar
        }}
      >
        {imagesWithTitles.map((item, index) => (
          <div
          key={index}
          className="w-60 flex-shrink-0 m-2 border-[1px] rounded-xl border-black"
          >
            <a href={item.Link}>
            <img
              src={item.image}
              alt={item.title}
              className="w-60 h-40 object-cover rounded-xl rounded-b-none shadow-xl"
              />
              
            <h2 className="m-1 ml-2 text-lg font-semibold">{item.title}</h2>
            <h4 className="ml-3">{item.addres}</h4>
            </a>
          </div>
        ))}
      </div>

      {/* Right button */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          onClick={nextImage}
          className={`bg-gray-800 text-white p-2 rounded-full shadow-lg ${currentIndex === imagesWithTitles.length - 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={currentIndex === imagesWithTitles.length - 1} // Disable button on the last image
          style={{ marginRight: '10px' }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImagesWithTitle;
