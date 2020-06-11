import React from 'react';
import Banner from './components/organisms/Banner/Banner';
import Carousel from './components/organisms/Carousel/Carousel';
import HoneyGrid from './components/organisms/HoneyGrid/HoneyGrid';

import carouselModel from './mockData/carouselModel';
import bannersModel from './mockData/bannersModel';
import honeyGridModel from './mockData/gridModel';

function App() {
  return (
    <div className='App'>
      <HoneyGrid {...honeyGridModel} />
      <Carousel {...carouselModel} />
      {bannersModel.map((banner, index) => (
        <Banner key={`${banner.type}-${index}`} {...banner}></Banner>
      ))}
    </div>
  );
}

export default App;
