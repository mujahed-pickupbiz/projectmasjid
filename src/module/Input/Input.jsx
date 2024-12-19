import React from 'react'

const Input = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <input className="m-2 p-2 rounded-xl border-2 border-black" type="text" placeholder="🗺️" />
    <input className="m-2 p-2 rounded-xl border-2 border-black" type="datetime-local" />
    <input className="m-2 p-2 rounded-xl border-2 border-black" type="number" />
    <button className="m-2 p-2 w-full sm:w-24 rounded-full border-2 border-blue-700 bg-[#1668e3]">Search</button>
  </div>
  )
}

export default Input