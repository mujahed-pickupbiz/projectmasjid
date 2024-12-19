"use client";
import React from "react";
import { Carousel, Card } from "../components/ui/AppleCardsCarousel";
import datas from "../components/ui/datas.json";
import RecentSearches from "../module/RecantScarches/RecentSearches";
import Scroll from "../module/Scrols/Scroll";
import ScrolationCard from "../module/ScrolationCard/ScrolationCard";
import ImagesWithTitle from "../module/ImagesWithTitle/ImagesWhitTitle";
import ScrollarTions from '../module/Scrollationns/ScrollarTions'
import Qr from "../module/qrcode/Qr";
import WordList from "../module/WorldList/WordList";
import Input from "../module/Input/Input";

const Hotels = () => {

    const cards = datas.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));

  return (
    <div className="m-6">
      <h1 className="text-4xl m-4">Where to?</h1>
      <Input/>
     
      <section className="border-2 m-5 p-5 relative bg-[#191E3B] text-white font-semibold rounded-xl">
        <p className="p-10 inline text-xl"> <img className="w-10 h-10 m-2 inline" src="https://a.travel-assets.com/egds/marks/mod_hotels.svg" alt="" />Members save 10% or more on over 100,000 hotels worldwide when signed in</p>
        <button className="m-2 p-2 w-full sm:w-32 lg:text- rounded-full border-2 border-blue-700 bg-[#1668e3]">Sign in now</button>
      </section>

      <h1 className="text-3xl m-5">Your recent searches</h1>
      <div className="">
<RecentSearches/>
      </div>
      <h1 className="text-3xl m-2 font-bold">Your recently viewed properties</h1>
      <div className="border w-60 font-bold  rounded-2xl rounded-b-none ml-6">
        
        <img className=" rounded-2xl rounded-b-none h-60 w-72 object-cover" src="https://i.pinimg.com/736x/00/32/09/003209690a29f1b55cb7685afd527087.jpg" alt="" />
        <p className="p-[1px]">Coco de Mer Hotel and Black</p>
        <p className="p-[1px]">parrot Suites</p>
        <p className="p-[1px]">9.0/10 <span className="text-sm font-thin">(357)</span></p>
      </div>

      <div className="lg:flex gap-4 mt-4 p-5 border bg-[#E61E43] text-white rounded-xl ">
        <h1 className="text-2xl font-bold p-2 lg:inline">Find and book your perfect stay</h1>
<div className="flex overflow-auto scrollbar-none cursor-grab">
        <span className="flex items-center justify-center border m-2 p-3 bg-[#A1122C] rounded-xl text-xl font-semibold text-center">
          Earn rewards on every night you stay
        </span>
        <span className="flex items-center justify-center border m-2 p-3 bg-[#A1122C] rounded-xl text-xl font-semibold text-center">
          Save more with Member Prices
        </span>
        <span className="flex items-center justify-center border m-2 p-3 bg-[#A1122C] rounded-xl text-xl font-semibold text-center">
          Free cancellation options if plans change
        </span>
        </div>
      </div>

      <div className="w-full h-full">
        <h2 className="pl-4 mx-auto text-4xl font-bold ">Discover your new favourite stay</h2>
        <Carousel items={cards} />
      </div>
      <div>
      <h1 className="text-3xl font-bold">Recommended stays for you </h1>
      <p className="text-xl ">Based on your most recently viewed propety </p>
        <ScrolationCard/>
        <a href=""> See all properties </a>
      </div>

      {/* Add the Fille component here */}
      <div className="relative w-full rounded-xl shadow-lg mb-1 mt-6 ">
 <h1 className="text-3xl text-black font-bold ">Explore stays in trending destinations</h1>
     <ImagesWithTitle/>
      </div>
  
      {/* Add smooth scroll container for Fille */}
      <div className="h-[41rem] bg-transparent relative bg-cover rounded-3xl p-2 mt-6" style={{ backgroundImage: "url(https://forever.travel-assets.com/flex/flexmanager/mediaasset/955886-0_2-Hcom-1dl-crop5.jpg?impolicy=fcrop&w=1200&h=514&p=1&q=high)" }}>
        <button className="border absolute right-20 top-28 text-bold p-2 text-xl rounded-2xl">See all deals</button>
        <div className="w-full absolute bottom-0 left-2 bg-opacity-75 outline-pink-100">
          <Scroll />
      
        </div>
      </div>

      <div>
           <h1 className="mt-4 font-semibold text-4xl">Explore these unique stays</h1>          
        <ScrollarTions/>
        </div>

        <div > 
        <Qr/>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold " style={{fontFamily:"serif"}}>Expedia Group</h1>
          <WordList/>
        </div>
    </div>
  )
}

export default Hotels