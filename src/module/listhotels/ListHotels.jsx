import React, { useState } from 'react';
import Hotels from '../../module/listhotels/Hotels.json';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Input from '../Input/Input';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AnyReactComponent from '../../module/map/Map'
import { FaStar } from "react-icons/fa";
import Qr from '../qrcode/Qr';
import WordList from '../WorldList/WordList';

function valuetext(value) {
  return `${value}°C`;
}

const ListHotels = () => {
  // Card component logic encapsulated in the Fille component
  const Card = ({ card }) => {
    const {addres, title,images,descount,rs,total} = card;
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
      <div className='lg:w-[500px] w-[300px] m-2 text-black shadow-white   rounded-lg shadow' >
      

        {/* Image display with buttons */}

      {/* Image display with buttons */}
      <div className="relative">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-64 object-cover rounded-t-lg"
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute top-[50%] left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute top-[50%] right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          {/* Left side content */}
          <div>
            <h2 className="font-bold text-xl text-gray-800">{title}</h2>
            <span className="font-thin text-sm text-gray-500">{addres}</span>

            <div className="flex items-center mt-2">
              <span className="font-semibold text-xl text-gray-800">
                <FaIndianRupeeSign className="inline text-[18px]" /> {rs}
              </span>
              <s className="font-semibold text-sm text-gray-500 ml-2">
                <FaIndianRupeeSign className="inline" /> {descount}
              </s>
            </div>
          </div>

          {/* Right side content */}
          <div className="text-right">
            <p className="text-gray-600 text-sm">Per night</p>
            <p className="text-xl font-semibold text-gray-800 mt-1">
              <FaIndianRupeeSign className="inline text-sm" />
              {total}
            </p>
            <p className="text-gray-500 text-xs mt-1">Includes taxes & fees</p>
          </div>
        </div>

    </div>
        
      </div>
    );
  };

  const [selectedValue, setSelectedValue] = React.useState('a');
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }
  const [value, setValue] = React.useState([20, 37]);

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };
 const [showMore, setShowMore] = React.useState(false);

  // toggle the visibility of the hidden div
  const handleClick = () => {
    setShowMore(!showMore);
  };


  return (
   
    <div className='p-5 bg'>
      <div className='m-5'>
        <Input/>
      </div>
    <div className="flex gap-6 justify-start p-6">
  
    {/* Sidebar */}
    <div className="w-96  p-4 hidden lg:flex rounded-lg">
    <div className='flex-none'>
   <AnyReactComponent/>
   <div>
   <p>Compare properties </p>
   <p> Get a side-by-side view of up to 5 properties</p>
   </div>
   <div>
    <h1 className='text-2xl'>Sharce bt prooertey name</h1>
    <input className='w-full p-2 m-2 rounded-xl border-black bg-black bg-opacity-75' placeholder='🔍 ' type="text"  />
    </div>
    <hr className='text-black ' />

<div>
<FormGroup >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Reserve now, pay later" />
      <FormControlLabel control={<Checkbox />} label="Breakfast included" />
      <FormControlLabel control={<Checkbox />} label="Pet friendly" />
      <FormControlLabel control={<Checkbox />} label="Wifi Included" />
      <FormControlLabel control={<Checkbox />} label="Spa" />
    </FormGroup>
</div>
<Box sx={{ width: 200 }}>
       <Slider
        getAriaLabel={() => '00000'}
        value={value}
        onChange={handleChanges}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>

    <div>
      <Radio
      
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        className='block'
      >
        
      </Radio>
      <span>home</span>
      <br />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
       <span>About</span>
       <br />
       <Radio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
      />
       <span>Contect</span>
       <br />
     
    </div>
    <div>
      <h1>Payment type</h1>
    <FormControlLabel control={<Checkbox />} label="Reserve now, pay later" />
    </div>
    <div>
      <h1>Property cancellation options</h1>
    <FormControlLabel control={<Checkbox />} label="Fully refundable property" />
    </div>
    <div>
      <h1>Property type</h1>
    <FormControlLabel control={<Checkbox />} label="Hotel" />
    <br />
    <FormControlLabel control={<Checkbox />} label="Bed & breakfast" />
    </div>

    <div className=' '>
    <h1>Amenities</h1>
    <FormGroup>
    <FormControlLabel className='' control={<Checkbox />} label="Pool" />
    <FormControlLabel control={<Checkbox />} label="Pet friendly" />
    <FormControlLabel control={<Checkbox />} label="Wifi Included" />
    </FormGroup>
    </div>
      <div>
      <FormGroup>

        {showMore && (
          <div className='hiddend text-sm '>
            <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Spa" />
            <FormControlLabel disabled control={<Checkbox />} label="Airport shuttle included" />   
            <FormControlLabel control={<Checkbox />} label="Parking" />
            <FormControlLabel disabled control={<Checkbox />} label="Kitchen" />   
            <FormControlLabel control={<Checkbox />} label="Air conditioned" />
            <FormControlLabel control={<Checkbox />} label="Gym" />
            <FormControlLabel control={<Checkbox />} label="Outdoor space" />
            <FormControlLabel control={<Checkbox />} label="Electric car charging station" />
            <FormControlLabel control={<Checkbox />} label="Restaurant" />
            <FormControlLabel control={<Checkbox />} label="Cribs" />
            <FormControlLabel disabled control={<Checkbox />} label="Ocean view" />   
            <FormControlLabel disabled control={<Checkbox />} label="Hot tub" />   
            <FormControlLabel disabled control={<Checkbox />} label="Washer and dryer" />   
            <FormControlLabel disabled control={<Checkbox />} label="Golf course" />   
            <FormControlLabel disabled control={<Checkbox />} label="Casino" />   
            <FormControlLabel disabled control={<Checkbox />} label="Water park" />   
            <FormControlLabel control={<Checkbox />} label="Bar" />

            </FormGroup>
          </div>
        )}
      </FormGroup>
        <h1 className='cursor-pointer text-blue-400 underline font-semibold' onClick={handleClick}>{showMore ? 'See Less' : 'See More'}</h1>
    </div>
    <h1>Property class</h1>
    <div className='grid grid-cols-3'>
    <a href="" className='border-2 border-black w-30 m-2 text-center rounded-xl'> 1<FaStar className='inline m-2' /></a>
    <a href="" className='border-2 border-black w-30 m-2 text-center rounded-xl'> 2<FaStar className='inline m-2' /></a>
    <a href="" className='border-2 border-black w-30 m-2 text-center rounded-xl'> 3<FaStar className='inline m-2' /></a>
    <a href="" className='border-2 border-black w-30 m-2 text-center rounded-xl'> 4<FaStar className='inline m-2' /></a>
    <a href="" className='border-2 border-black w-30 m-2 text-center rounded-xl'> 5<FaStar className='inline m-2' /></a>
    </div>

    <div className=''>
      <h1>Meal plans available</h1>
    <FormGroup>
    <FormControlLabel control={<Checkbox />} label="Breakfast included" />
    <FormControlLabel control={<Checkbox />} label="Dinner included" />
    <FormControlLabel control={<Checkbox />} label="Lunch included" />
    <FormControlLabel disabled control={<Checkbox />} label="All inclusive" />  
    </FormGroup>
    </div>
    <div className='grid grid-cols-4'>
      <span className='text-center border-2 border-black m-1 rounded-lg text-lg font-semibold'>Stodio</span>
      <span className='text-center border-2 border-black m-1 rounded-lg text-lg font-semibold'>1</span>
      <span className='text-center border-2 border-black m-1 rounded-lg text-lg font-semibold'>2</span>
      <span className='text-center border-2 border-black m-1 rounded-lg text-lg font-semibold'>3</span>
      <span className='text-center border-2 border-black m-1 rounded-lg text-lg font-semibold'>4+</span>
    </div>
    <div>
      <h1>Neighborhood</h1>
      <Radio
        checked={selectedValue === 'g'}
        onChange={handleChange}
        value="g"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'G' }}
      />
      <h1>Aurangabad</h1>
      <br />
    </div>
    <div>
      <h1>Accessibility</h1>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Stair-free path to entrance" />
      <FormControlLabel control={<Checkbox />} label="Elevator" />
      <FormControlLabel disabled control={<Checkbox />} label="Roll-in shower" />
      </FormGroup>

      {showMore && (
          <div className='hiddend text-sm '>
            <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="In-room accessibility" />
            <FormControlLabel disabled control={<Checkbox />} label="Accessible bathroom" />   
            <FormControlLabel control={<Checkbox />} label="Service animals allowed" />
            <FormControlLabel control={<Checkbox />} label="Wheelchair accessible parking" />
            <FormControlLabel disabled control={<Checkbox />} label="Sign language-capable staff" />   
            </FormGroup>
          </div>
        )}
    
      <h1 className='cursor-pointer text-blue-400 underline font-semibold' onClick={handleClick}>{showMore ? 'See Less' : 'See More'}</h1>
    </div>

    <div>
      <h1>Traveler experience</h1>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Eco-certified" />
      <FormControlLabel control={<Checkbox />} label="LGBTQ welcoming" />
      <FormControlLabel disabled control={<Checkbox />} label="Business friendly" />
      <FormControlLabel disabled control={<Checkbox />} label="Family friendly" />
      </FormGroup>

      {showMore && (
          <div className='hiddend text-sm '>
            <FormGroup>
            <FormControlLabel disabled control={<Checkbox />} label="Adults only" />   
            <FormControlLabel control={<Checkbox  />} label="Luxury Property" />
            <FormControlLabel disabled control={<Checkbox />} label="Budget Property" />   
            <FormControlLabel control={<Checkbox />} label="Wedding" />
            <FormControlLabel control={<Checkbox />} label="Romantic" />
            <FormControlLabel disabled control={<Checkbox />} label="Beach" />   
            </FormGroup>
          </div>
        )}
    
      <h1 className='cursor-pointer text-blue-400 underline font-semibold' onClick={handleClick}>{showMore ? 'See Less' : 'See More'}</h1>
    </div>
    <div>
      <h1>Availability</h1>
      <FormControlLabel control={<Checkbox  />} label=" Only show available properties" />
      
    </div>
   
       </div>
       
       </div>
    <div
      className=" gap-6 justify-start p-6" >
   
      {Hotels.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
    
    </div>

    <div>
    <Qr/>
    <WordList/>
    </div>
    </div>
  );
};

export default ListHotels;
