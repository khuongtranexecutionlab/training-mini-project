'use client';
import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface ButtonComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonComponent> = ({ title, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300  duration-[500ms,800ms] ${
        pending ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'
      }`}
      disabled={pending}
    >
      <div className="flex items-center justify-center m-[10px]">
        {pending ? (
          <React.Fragment>
            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <div className="ml-2"> Processing... </div>
          </React.Fragment>
        ) : (
          title
        )}
      </div>
    </button>
  );
};
export default Button;
