import React from 'react';
import type { Metadata } from 'next';
import Detail from '@/components/detail';

type Props = {
  params: { detail: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;

  const product = await fetch(
    'https://product-mgn.onrender.com/product/' + params.detail
  ).then(i => i.json());
  return {
    title: `Thông tin sản phẩm ${product.data.product_name}`
  };
};

export default async function DynamicProduct({
  params
}: {
  params: { detail: string };
}) {
  return <Detail id={params.detail} />;
}
