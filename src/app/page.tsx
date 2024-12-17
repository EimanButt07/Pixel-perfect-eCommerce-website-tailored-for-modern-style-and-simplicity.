import React from 'react';
import Header from './components/header';
import MainTopHeader from './components/mainTopHeader';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './Products/NewArrivals';
import DressStyle from './components/DressStyle';
import TopProducts from './Products/TopSeling';

const page = () => {
  return (
    <div>
      <MainTopHeader/>
      <Header/>
      <Hero/>
      <Brands/>
      <Products/>
      <TopProducts/>
       <DressStyle/>
    </div>
  )
}

export default page
