import { IProduct } from '@/redux/features/productsSlice';
import { GrEdit, GrTrash } from 'react-icons/gr';
import Utils from '@/utils';
import Link from 'next/link';
import React from 'react';
import Image from '../ui/Image';
import { useDeleteProductMutation } from '@/redux/services/products';
interface IPropsType {
  index: number;
  item: IProduct;
  handleFlip: () => void;
}

const ProductCard: React.FC<IPropsType> = ({ index, item, handleFlip }) => {
  const [remove] = useDeleteProductMutation();

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] relative group">
      <div className="absolute flex gap-4 right-4 top-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <GrTrash cursor="pointer" onClick={() => remove(item._id!)} />
        <GrEdit cursor="pointer" onClick={handleFlip} />
      </div>
      <Image
        className="w-[300px] h-[330px] rounded-md mt-[30px] mx-auto "
        src={item.image_url}
        width={200}
        height={315}
        alt={item.product_name}
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

        <div className="font-bold flex gap-4">${item.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
