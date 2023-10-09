'use client';

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false
  };

  const slideData = [
    {
      id: 0,
      img: '/banner-1.jpg',
      title: 'Trending Item',
      mainTitle: 'WOMENS LATEST FASHION SALE',
      price: '$20'
    },
    {
      id: 1,
      img: '/banner-2.jpg',
      title: 'Trending Accessories',
      mainTitle: 'MODERN SUNGLASSES',
      price: '$15'
    },
    {
      id: 2,
      img: '/banner-3.jpg',
      title: 'Sale Offer',
      mainTitle: 'NEW FASHION SUMMER SALE',
      price: '$30'
    }
  ];
  return (
    <div className="container pt-6 lg:pt-0 overflow-hidden">
      <Slider
        {...settings}
        className="h-[350px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
      >
        {slideData.map(item => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
