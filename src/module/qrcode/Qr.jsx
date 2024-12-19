import React from "react";
import QRCode from "react-qr-code"; // Import the react-qr-code library

const Qr = () => {
  const qrValue = "https://pickupbiz.com";
  return (
   
      <div className=" lg:m-10 hidden border  lg:grid lg:grid-cols-3 md:grid-cols-2">
    <img className="w-70 h-80 object-cover" src="https://i.pinimg.com/736x/71/8c/5d/718c5dd31b8d283820d34f67b75b7a95.jpg" alt="" />
    <div className="m-2">
    <span className="text-3xl m-2 font-mono font-extrabold">With the Hotels.com app, you can:</span>
     <li className="font-thin m-2"> Save on select hotels</li>
     <li className="font-thin m-2">Earn one reward night* for every 10 nights you stay</li>
     <li className="font-thin m-2">Search, book, and save on the go</li>

     <h1 className="mt-8 text-lg font-bold">Scan the QR code with your device camera and download our app
     </h1>

     <a href="" className="text-blue-500 mt-5 text-sm font-bold underline">*See Hotels.com Rewards terms & conditions</a>
</div> 
<div className="flex items-center justify-center">
      <QRCode value={qrValue} size={180} />
      </div> 
      </div>
  );
}

export default Qr;
