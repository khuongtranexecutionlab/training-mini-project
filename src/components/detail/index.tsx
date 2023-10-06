"use client";
import { useGetProductQuery } from "@/redux/services/products";
import React from "react";
import InfoProduct from "./InfoProduct";
import SlideProduct from "./SlideProduct";

interface IDetailProps {
  id: string;
}

const Detail: React.FC<IDetailProps> = ({ id }) => {
  const { data, isLoading } = useGetProductQuery(id);
  return (
    <section className="py-10 ">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        data && (
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-wrap mb-24 -mx-4">
              <SlideProduct data={data} />
              <InfoProduct data={data} />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Detail;
