import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import ListHotels from '../module/listhotels/ListHotels'
import Hotels from './Hotels'

export const Landing = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/'  element={<Hotels/>}/>
        <Route path='/listhotels' element={<ListHotels/>}/>

      </Routes>
    </BrowserRouter>
  )
}
