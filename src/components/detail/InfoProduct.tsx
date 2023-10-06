import { IProduct } from '@/redux/features/productsSlice';
import Utils from '@/utils';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

interface IInfoProduct {
  data: IProduct;
}

const InfoProduct: React.FC<IInfoProduct> = ({ data }) => {
  return (
    <div className="w-full px-4 md:w-1/2">
      <div className="lg:pl-20">
        <div className="mb-6 ">
          <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100  rounded-xl ">
            New Arrival
          </span>
          <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
            {data.name}
          </h2>
          <div className="flex flex-wrap items-center mb-6">
            {Utils.generateRating(data.rating)}
          </div>
          <p className="inline-block text-2xl font-semibold text-gray-700  ">
            <span>{data.price}$</span>
            <span className="ml-3 text-base font-normal text-gray-500 line-through ">
              10,000.00$
            </span>
          </p>
        </div>

        <div className="py-6 mb-6 border-t border-b border-gray-200 ">
          <span className="text-base text-gray-600 ">In Stock</span>
          <p className="mt-2 text-sm text-blue-500 ">
            Ships from china.
            <span className="text-gray-600 ">
              Most customers receive within 3-31 days.
            </span>
          </p>
        </div>
        <div className="mb-6 " />
        <div className="flex flex-wrap items-center mb-6">
          <div className="mb-4 mr-4 lg:mb-0">
            <div className="w-28">
              <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                  <span className="m-auto text-2xl font-thin">-</span>
                </button>
                <input
                  type="number"
                  className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  focus:outline-none text-md hover:text-black"
                  placeholder="1"
                />
                <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4 lg:mb-0">
            <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border  lg:w-11 rounded hover:bg-blue-600  hover:border-blue-500 hover:text-gray-100">
              <AiOutlineHeart />
            </button>
          </div>
          <Link
            href="#"
            className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
          >
            Add to cart
          </Link>
        </div>
        <div className="flex gap-4 mb-6">
          <Link
            href="#"
            className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 hover:bg-blue-600 hover:text-gray-100 rounded-xl"
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
