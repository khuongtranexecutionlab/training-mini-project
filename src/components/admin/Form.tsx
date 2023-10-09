'use client';
import React from 'react';
import Button from '@/components/ui/ButtonSubmit';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorForm from '@/components/ui/Error';
import {
  useCreateProductMutation,
  useUpdateProductMutation
} from '@/redux/services/products';
interface IFormData extends FieldValues {
  product_name: string;
  description: string;
  image_url: string;
  price: number;
}
const schema = yup.object().shape({
  product_name: yup.string().required('Please enter your name.'),
  description: yup.string().required('Please enter your name.'),
  image_url: yup.string().required('Please enter your url image.'),
  price: yup.number().required('Please enter your price.')
});
const FormAdmin: React.FC<{
  id?: string;
  finish?: () => void;
  isAdmin?: boolean;
}> = ({ isAdmin, finish, id }) => {
  const [create] = useCreateProductMutation();
  const [update] = useUpdateProductMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<IFormData>({
    defaultValues: {
      price: 0
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (values: IFormData) => {
    if (!isAdmin) create(values).then(() => alert('success'));
    else update({ _id: id!, formData: values }).then(() => alert('success'));
    finish?.();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`bg-grey-lighter ${
          !isAdmin && 'min-h-screen'
        } flex flex-col my-1`}
      >
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              {!isAdmin ? 'CREATE PRODUCT' : 'EDIT PRODUCT'}
            </h1>
            <div>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Product name"
                {...register('product_name')}
              />
              <ErrorForm name="product_name" errors={errors} />
            </div>
            <div>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Description"
                {...register('description')}
              />
              <ErrorForm name="description" errors={errors} />
            </div>

            <div>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Price"
                {...register('price')}
              />
              <ErrorForm name="price" errors={errors} />
            </div>

            <div>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="URL image"
                {...register('image_url')}
              />
              <ErrorForm name="image_url" errors={errors} />
            </div>
            <Button
              title={!isAdmin ? 'Create' : 'Update'}
              type="submit"
              className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormAdmin;
