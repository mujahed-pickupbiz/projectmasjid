import React, { useState } from 'react';
import data from '../../module/Scrollationns/data.json'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

const ScrollarTions = () => {
  // Card component logic encapsulated in the Fille component
  const Card = ({ card }) => {
    const {Addres, title, Link, rating, images, type ,Descovnt,Rs,ratings,ratinge,Pernight,Offer} = card;
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
      <div className={`card ${type === 'detailed' ? 'w-96' : 'w-72'} text-black shadow-white border flex-none  rounded-lg shadow  `}>
      

        {/* Image display with buttons */}
        <div className="relative ">
          
          
          {/* Left Button */}
          <button
            onClick={prevImage}
            className="absolute -left-3 top-[100px]  transform -translate-y-1/2 px-4 py-2 rounded-full"
          >
            <FaChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={nextImage}
            className="absolute -right-3 top-[100px] transform -translate-y-1/2 px-4 py-2 rounded-full "
          >
          <FaChevronRight />
          </button>
          <a href={Link}>
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full h-48 object-cover rounded-lg rounded-b-none"
          />
          <div className='m-2'>
          <div className='m-2'> 
           <span className="bg-green-700 p-[1px] m-1 text-sm rounded-sm font-semibold">{rating}</span>
    
           <span className='text-sm font-semibold' >{ratings}</span>
           <span className='text-sm font-thin'>  {ratinge}</span>
           </div>

          <div className=' '>
            <h2 className="font-bold text-opacity-10 text-xl">{title}</h2>
            <h2 className='font-thin'>{Addres}</h2>
         
            <div className=''>
            <span className='font-semibold text-xl'><FaIndianRupeeSign className='inline text-[18px]'/> {Rs}</span>
            <s className='font-semibold text-sm'><FaIndianRupeeSign className='inline text-sm'/>{Descovnt}</s>
            <div className='text-sm font-semibold m-'>
            <p className=''>Pre night</p>
            <p className='text-sm'><FaIndianRupeeSign className='inline text-sm'/>{Pernight} total</p>
            <p className=''>includes texes & fees</p>
            <span className='bg-[#ff0000] p-1 rounded-md mt-2'>{Offer} </span>
            </div>
            </div>
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
      {data.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default ScrollarTions;
