"use client";
import { useAppSelector } from "@/redux/hook";
import { useGetProductsQuery } from "@/redux/services/products";
import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const { isLoading, isFetching, error } = useGetProductsQuery();
  const { data } = useAppSelector((state) => state.products);

  return (
    <div className="container pt-16 relative z-10">
      <h2 className="font-medium text-2xl pb-4">New Products</h2>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {data.map((item, index) => (
            <ProductCard key={item._id} index={index} item={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NewProducts;
