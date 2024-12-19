import React, { useState } from 'react';
import cardData from '../../module/Scrols/cardData.json'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Scroll = () => {
  // Card component logic encapsulated in the Fille component
  const Card = ({ card }) => {
    const {Addres, title, id,Link, rating, images, type ,Descovnt,Rs,ratings,ratinge,Pernight,Offer } = card;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to move to the next image
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to move to the previous image
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
      <div className={`card ${type === 'detailed' ? 'w-96' : 'w-72'} bg-black bg-opacity-55 p-2 shadow-white flex-none  rounded-lg shadow  `}>
      

        {/* Image display with buttons */}
        <div className="relative ">
    
          {/* Left Button */}
          <button
            onClick={prevImage}
            className="absolute -left-3 top-[100px]  transform -translate-y-1/2 px-4 py-2 text-white rounded-full"
          >
            <FaChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={nextImage}
            className="absolute -right-3 top-[100px] transform -translate-y-1/2 px-4 py-2  text-white rounded-full "
          >
          <FaChevronRight />
          </button>

            <a href={Link}>
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
          
          <div className='text-white m-1 '>
            <h2 className='text-sm '>{Addres}</h2>
            <h2 className=" text-2xl font-bold bg-white bg-transparent bg-opacity-25 m-[1px]">{title}</h2>
           <div> <span className="bg-green-500 text-[12px] h-10 w-10 border border-black  text-black font-bold font-sans p-[3px] m-1 rounded-[7px]">{rating}</span>
           <span className='text-xl font-semibold' >{ratings}</span>
           <span className='text-sm'>  {ratinge}</span>
           </div>
            <h1 className=''>{id}</h1>

            <div className='mt-2'>
            <span className='text-xl font-bold font-mono'><FaIndianRupeeSign className='inline'/> {Descovnt}</span>
            <s className='font-semibold'><FaIndianRupeeSign className='inline'/>{Rs}</s>
            <p className='text-[13px] font-semibold'>Pre night</p>
            <p className='text-[13px] font-semibold '><FaIndianRupeeSign className='inline'/>{Pernight} total</p>
            <p className='text-[13px] font-semibold '>includes texes & fees</p>
            <span className='text-[15px] p-[3px] rounded-md mt-5 text-black font-bold bg-[#ff0000]'>{Offer} off</span>

            </div>
          
         </div>
         </a>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex gap-6 justify-start p-6" 
      style={{
        overflowX: 'auto',  // Allow horizontal scrolling
        scrollbarWidth: 'none', // For Firefox, hide scrollbar
        cursor: 'grab',       // Change the cursor to grab
      }}
    >
      {cardData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Scroll;
