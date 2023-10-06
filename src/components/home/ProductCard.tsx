import { IProduct } from '@/redux/features/productsSlice';
import Utils from '@/utils';
import Link from 'next/link';
import React from 'react';
import Image from '../ui/Image';

interface IPropsType {
  index: number;
  item: IProduct;
}

const ProductCard: React.FC<IPropsType> = ({ index, item }) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <Image
        className="w-full h-[330px] rounded-md mt-[30px]"
        src={item.image_url}
        width={200}
        height={315}
        alt={item.product_name}
        // placeholder="blur"
        // blurDataURL={item.blurHash}
        priority={index <= 1 ? true : false}
      />

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase truncate w-[210px]">
          <Link href={`product/${item._id}`}>{item.product_name}</Link>
        </h2>
        <h1 className="text-gray-500 truncate max-w-[150px]">
          {item.product_name}
        </h1>
        <div>{Utils.generateRating(5)}</div>

        <div className="font-bold flex gap-4">
          ${item.price}
          {/* <del className="text-gray-500 font-normal">${price + 50}.00</del> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
