import React from 'react';
import type { Metadata } from 'next';
import Detail from '@/components/detail';

type Props = {
  params: { detail: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const product = await fetch(
    'http://localhost:3000/api/products/' + params.detail
  ).then(i => i.json());
  console.log(product);
  return {
    title: `Thông tin sản phẩm ${product.name}`
  };
};

export default async function DynamicProduct({
  params
}: {
  params: { detail: string };
}) {
  return <Detail id={params.detail} />;
}
