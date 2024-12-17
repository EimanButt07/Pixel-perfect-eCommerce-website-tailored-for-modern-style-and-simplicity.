import React from 'react';
import Header from './components/header';
import MainTopHeader from './components/mainTopHeader';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './Products/NewArrivals';
import DressStyle from './components/DressStyle';
import TopProducts from './Products/TopSeling';
import Footer from './components/Footer';

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
       <Footer/>
    </div>
  )
}

export default page
