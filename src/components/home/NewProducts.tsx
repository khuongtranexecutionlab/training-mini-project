'use client';
import { useAppSelector } from '@/redux/hook';
import { useGetProductsQuery } from '@/redux/services/products';
import React from 'react';
import Loading from '../ui/Loading';
import CardFlip from './CardFlip';

const NewProducts = () => {
  const { isLoading, isFetching, error } = useGetProductsQuery();
  const { data } = useAppSelector(state => state.products);

  return (
    <div className="container relative z-10">
      <h2 className="font-medium text-2xl pb-6">New Products</h2>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <Loading />
      ) : data ? (
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10 2xl:grid-cols-4">
          {data.map((item, index) => (
            <div key={item._id} className="w-[350px] h-[500px]">
              <CardFlip index={index} item={item} variant="Front" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NewProducts;
