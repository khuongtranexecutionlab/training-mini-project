import React from 'react';
import type { FieldErrors } from 'react-hook-form';

type TError = {
  product_name: string;
  description: string;
  image_url: string;
  price: number;
  [key: string]: string | number;
};

interface IError {
  name: string;
  errors: FieldErrors<TError>;
}

const ErrorForm: React.FC<IError> = ({ name, errors }) => {
  if (!errors || !errors[name] || !errors[name]?.message) {
    return null;
  }
  return (
    <div className="mt-2 text-xs text-red-500 font-light">
      {errors[name]?.message}
    </div>
  );
};

export default ErrorForm;
