'use client';
import { IProduct } from '@/redux/features/productsSlice';
import React from 'react';
import Image from '../ui/Image';

interface ISliderProps {
  data: IProduct;
}

const SlideProduct: React.FC<ISliderProps> = ({ data }) => {
  return (
    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0 p-5 border border-gray-200 rounded">
      <Image
        className="object-contain w-full lg:h-full rounded"
        width={500}
        height={400}
        src={data.image_url}
        alt={`detail-${data.product_name}`}
      />
    </div>
  );
};

export default SlideProduct;
