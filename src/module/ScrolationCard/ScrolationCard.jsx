import React from 'react';
import data from '../../module/ScrolationCard/data.json';
import { FaRegHeart } from "react-icons/fa";


const ScrolationCard = () => {
  return (
    <div
      className="flex overflow-x-auto gap-8  "
      style={{
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For Internet Explorer
      }}
    >
      {data.map((item, index) => (
      <a href={item.Link}>
        <div
          key={index}
          className="flex-none w-64  h-60 border rounded-xl"
          style={{
            overflow: 'hidden', // Hide any overflow content
            position: 'relative',
          }}
        >
            <FaRegHeart className='absolute text-3xl rounded-full text-[#ff0000] right-1 top-1 bg-white p-1'/>    
          {/* Image element */}
          <img
            src={item.images}
            alt={item.Title}
            className=" w-full h-28 object-cover rounded-xl rounded-b-none"
         
          />
          
          {/* Title and information */}
          <div className="">
            <h1 className=" font-semibold text-[19px] text-gray-800">  {item.Title}</h1>
              <h2 className="text-sm ">{item.Data}</h2>
            <div className="absolute bottom-0 m-2">
                <span className="text-[12px] font-bold p-1 bg-green-500 border ">{item.Rating}</span>
                <span className="p-1 font-semibold">{item.Gerats}</span>
                <span className="text-sm ">{item.Reviews}</span>
            </div>
          </div>
        </div>
          </a>
      )
    )}
    </div>
  );
};

export default ScrolationCard;
