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
        className="w-full h-auto"
        src={item.images[0]}
        width={200}
        height={300}
        alt={item.name}
        // placeholder="blur"
        // blurDataURL={item.blurHash}
        priority={index <= 1 ? true : false}
      />

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase truncate w-[210px]">
          <Link href={`product/${item.slug}`}>{item.name}</Link>
        </h2>
        <h1 className="text-gray-500 truncate max-w-[150px]">{item.name}</h1>
        <div>{Utils.generateRating(item.rating)}</div>

        <div className="font-bold flex gap-4">
          ${item.price}
          {/* <del className="text-gray-500 font-normal">${price + 50}.00</del> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
