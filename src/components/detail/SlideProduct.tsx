'use client';
import { IProduct } from '@/redux/features/productsSlice';
import React from 'react';
import Slider, { Settings } from 'react-slick';

interface ISliderProps {
  data: IProduct;
}

const SlideProduct: React.FC<ISliderProps> = ({ data }) => {
  const settings: Settings = {
    customPaging: function (i: number) {
      console.log(i);
      return (
        <div className="w-[100px]">
          <img
            className="object-cover w-full lg:h-full cursor-pointer"
            src={data.images[i]}
            alt=""
          />
        </div>
      );
    },
    dots: true,
    dotsClass:
      '!flex border border-transparent items-center rounded-[5px] justify-center !border !border-[#ddd6d6]',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0 p-5 border border-gray-200 rounded">
      <Slider {...settings}>
        {data.images.map((item, index) => (
          <div key={index}>
            <img
              className="object-contain w-full lg:h-full"
              src={item}
              alt={`detail-${item}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideProduct;
