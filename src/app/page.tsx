import React from 'react';
import Header from './components/header';
import MainTopHeader from './components/mainTopHeader';
import Hero from './components/Hero';

const page = () => {
  return (
    <div>
      <MainTopHeader/>
      <Header/>
      <Hero/>
    </div>
  )
}

export default page
